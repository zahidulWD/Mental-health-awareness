// import React from "react";

// const Register = () => {
//   return (
//     <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
//         {/* Form Section */}
//         <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
//           <div className="card-body">
//             <h2 className="text-center text-2xl font-semibold mb-4">
//               Register Now
//             </h2>

//             <form className="space-y-4">
//               {/* Name */}
//               <div>
//                 <label className="label">
//                   <span className="label-text font-medium">Full Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="input input-success w-full"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="label">
//                   <span className="label-text font-medium">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email"
//                   className="input input-success w-full"
//                   required
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="label">
//                   <span className="label-text font-medium">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Enter password"
//                   className="input input-success w-full"
//                   required
//                 />
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label className="label">
//                   <span className="label-text font-medium">Confirm Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Confirm password"
//                   className="input input-success w-full"
//                   required
//                 />
//               </div>

//               {/* Forgot Password */}
//               <div className="text-right">
//                 <a href="#" className="link link-hover text-sm text-primary">
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Register Button */}
//               <a className="btn bg-[#4F7100] w-full text-white">
//                 Register
//               </a>
//             </form>

//             {/* Divider */}
//             <div className="divider">OR</div>

//             {/* Login Link */}
//             <p className="text-center text-sm">
//               Already have an account?{" "}
//               <a href="#" className="link text-primary font-medium">
//                 Login here
//               </a>
//             </p>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Register;



import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <section className="bg-[#F5F7EE] py-16" id="register">
      <div className="container-custom mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Join Our Community</h2>
          <p className="text-gray-600">
            Register now and become part of our mental health awareness movement.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8">
          <form className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Full Name</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full pl-10"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Email</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered w-full pl-10"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Password</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full pl-10"
                />
              </div>
            </div>

            {/* Submit Button */}
            <a type="submit" className="btn bg-[#4F7100] mt-4 w-full text-white">
              Register Now
            </a>

            <p className="text-center text-gray-600 text-sm mt-3">
              Already have an account?{" "}
              <a href="#" className="text-green-700 hover:underline font-semibold">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

