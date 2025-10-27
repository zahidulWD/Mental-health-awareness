import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        {/* Form Section */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-semibold mb-4">
              Register Now
            </h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-success w-full"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-success w-full"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-success w-full"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-success w-full"
                  required
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="link link-hover text-sm text-primary">
                  Forgot password?
                </a>
              </div>

              {/* Register Button */}
              <a className="btn bg-[#4F7100] w-full text-white">
                Register
              </a>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Login Link */}
            <p className="text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="link text-primary font-medium">
                Login here
              </a>
            </p>
          </div>
        </div>
    </div>
  );
};

export default Register;
