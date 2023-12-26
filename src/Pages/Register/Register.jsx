import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import bgImg from "../../assets/loginBG.png";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../Components/Share/Loading";
import Swal from "sweetalert2";

export default function Register() {
  const { createUser, signUpWithGoogle } = useContext(AuthContext);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (fileData) => {
    try {
      const formData = new FormData();
      formData.append("image", fileData);

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB}`,
        formData
      );

      const imageUrl = response?.data?.data?.url;
      setImageURL(imageUrl);
      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error uploading image. Please try again.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const profilePic = form.get("profilePic");

    try {
      await uploadImage(profilePic);

      if (imageURL !== null) {
        await createUser(email, password).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        });
        console.log(name, "Successfully registered.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
      }}
      className="hero min-h-screen"
    >
      <div className="w-full md:w-1/2">
        {!loading ? (
          <div className="card w-full shadow-2xl bg-base-100">
            <h1 className="text-4xl font-extrabold text-green-500 text-center my-3">
              Please Register
            </h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered text-black-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-black-500"
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
                  className="input input-bordered text-black-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Pic</span>
                </label>
                <input
                  type="file"
                  name="profilePic"
                  placeholder="Profile Pic"
                  className="input input-bordered text-black-500"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white hover:bg-green-600">
                  Regester
                </button>
              </div>
            </form>
            <button
              onClick={() => handleGoogleLogin()}
              className="btn btn-circle mx-auto mb-3 bg-green-300"
            >
              <FaGoogle size={25} />
            </button>
            <Link to="/login" className="text-green-600 font-bold my-2 mx-4">
              Login Your Account
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <>
                <p>Wait...</p>
                <Loading />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
