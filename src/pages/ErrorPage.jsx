import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EDF1E6] px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold text-[#4F7100] mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="btn bg-[#4F7100] text-white px-6 py-3 rounded-lg hover:bg-[#FFC20F] hover:text-gray-800 transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
