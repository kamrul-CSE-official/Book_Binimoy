import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";

export default function MainLayouts() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
