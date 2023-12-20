import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "./Banner";

export default function Home() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div>
      <Banner />
    </div>
  );
}
