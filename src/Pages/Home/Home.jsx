import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "./Banner";
import Category from "./Category";

export default function Home() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div>
      <Banner />
      <Category />
    </div>
  );
}
