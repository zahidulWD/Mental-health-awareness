import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {

  const { login, user } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login({email, password});

    if (!result.success) {
      setError(result.message);
      Swal.fire({
          title: "Oops!",
          icon: "error",
          draggable: false,
          
      });
    }
    else {
      setError("");
      Swal.fire({
          title: "Login SuccessFully!",
          icon: "success",
          draggable: false,
          
      });
      navigate(from, { replace: true })
    }
  }

  return (
    <section className="bg-[#F5F7EE] py-16 px-4 md:px-0" id="login">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 px-2 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Login now and become part of our mental health awareness movement.
          </p>
        </div>

        <div className="max-w-md sm:max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold text-gray-700 mb-2">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email address"
                className="text-sm py-2 px-3 rounded-md border border-black w-full block"
              />
            </div>

            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold text-gray-700 mb-2">Password</span>
              </label>
              <input 
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Create a password"
                className="text-sm py-2 px-3 rounded-md border border-black w-full block"
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-[#4F7100] mt-4 w-full text-white text-sm sm:text-base py-2 sm:py-3 hover:bg-[#EDF1E6] hover:text-gray-800 transition-colors duration-300"
            >
              Login Now
            </button>

            <p className="text-center text-gray-600 text-xs sm:text-sm mt-3">
              Already have an account?{" "}
              <button href="#" className="text-green-700 hover:underline font-semibold">
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
