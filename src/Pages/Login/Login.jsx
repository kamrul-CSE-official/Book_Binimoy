import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import bgImg from "../../assets/loginBG.png";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const { login, signUpWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((result) => {
        console.log("Successfuly login. ", result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Login fail ", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Try again. Something went wrong!",
        });
      });
  };
  const handleGoogleLogin = async () => {
    await signUpWithGoogle();
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        color: "white",
      }}
      className="hero min-h-screen"
    >
      <div className="w-full md:w-1/2">
        <div className="card w-full shadow-2xl bg-base-100">
          <h1 className="text-4xl font-extrabold text-green-500 text-center my-3">
            Please Login
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-500 text-white hover:bg-green-600">
                Login
              </button>
            </div>
          </form>
          <button
            onClick={() => handleGoogleLogin()}
            className="btn btn-circle mx-auto mb-3 bg-green-300"
          >
            <FaGoogle size={25} />
          </button>
          <Link to="/regester" className="text-green-600 font-bold my-2 mx-4">
            Create An Account
          </Link>
        </div>
      </div>
    </div>
  );
}
