import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

export default function Home() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div>
      Home : {user?.email}
      <button onClick={handleLogOut} className="btn btn-error">
        LogOut
      </button>
    </div>
  );
}
