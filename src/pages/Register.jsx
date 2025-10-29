
const Register = () => {
  return (
    <section className="bg-[#F5F7EE] py-16 px-4 md:px-0" id="register">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 px-2 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Register now and become part of our mental health awareness movement.
          </p>
        </div>

        <div className="max-w-md sm:max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8">
          <form className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full pl-10 py-2 sm:py-3"
              />
            </div>

            {/* Email Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full pl-10 py-2 sm:py-3"
              />
            </div>

            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered w-full pl-10 py-2 sm:py-3"
              />
            </div>

            {/* Submit Button */}
            <a
              type="submit"
              className="btn bg-[#4F7100] mt-4 w-full text-white text-sm sm:text-base py-2 sm:py-3 hover:bg-[#FFC20F] hover:text-gray-800 transition-colors duration-300"
            >
              Register Now
            </a>

            <p className="text-center text-gray-600 text-xs sm:text-sm mt-3">
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
