import auth from '@/firebase/firebase.config';
import {
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthInfo {
  user: UserCredential | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  signUpWithGoogle: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthInfo | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserCredential | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // const storeUserData = () => {
  //   const userData = {
  //     email: user!.email as string,
  //   };
  // };

  //   create User
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   login / signUp with google
  const signUpWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser as UserCredential | null);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo: AuthInfo = {
    user,
    loading,
    createUser,
    login,
    signUpWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
