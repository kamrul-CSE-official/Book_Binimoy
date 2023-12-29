import auth from '@/firebase/firebase.config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: string | null;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: null,
};

interface Icredential {
  email: string;
  password: string;
}

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: Icredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(createUser.pending, (state) => {})
    //   .addCase(createUser.fulfilled, () => {})
    //   .addCase(createUser.rejected, () => {});
  },
});

export default userSlice.reducer;
