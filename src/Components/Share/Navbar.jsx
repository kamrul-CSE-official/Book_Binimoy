import { Link } from "react-router-dom";
import ThemeChange from "./ThemeChange";

export default function Navbar() {
  return (
    <div className="border border-black">
      <h4 className="text-2xl">Navbar</h4>
      <button className="btn">
        <ThemeChange />
      </button>
      <Link className="btn btn-accent" to="/">Home</Link>
      <Link className="btn btn-primary" to="/login">Login</Link>
      <Link className="btn btn-secondary" to="/regester">Regester</Link>
    </div>
  );
}
