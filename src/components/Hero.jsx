
import { useState } from "react";
import { FaRegPlayCircle, FaBrain, FaUsers, FaHandshake } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import banner from "../assets/images/banner_image-4.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleGetStarted = () => {
    navigate("/login"); 
  };

  const handleWatchVideo = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-[#FDF1DA] overflow-hidden relative">
      {/* ===== Banner Section ===== */}
      <div className="container-custom flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 py-12">
        {/* ===== Text Section ===== */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4F7100] leading-snug animate-fadeIn">
            Nurture your mind, <br />
            embrace your <span className="text-[#FA7054]">well-being</span>
          </h1>

          <p className="text-[#121212CC] max-w-md mx-auto md:mx-0 text-base md:text-lg font-medium animate-fadeIn">
            MindNest helps you understand, heal, and strengthen your mental
            health — guided by science, compassion, and community.
            <br />
            <span className="text-[#4F7100] font-semibold">
              আপনার মানসিক শান্তিই আপনার আসল শক্তি — MindNest পাশে আছে সবসময়।
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fadeIn">
            <button
              onClick={handleGetStarted}
              className="btn bg-[#4F7100] hover:bg-[#3a5900] text-white rounded-full px-8 py-3 font-semibold transition"
            >
              Get Started
            </button>

            <button
              onClick={handleWatchVideo}
              className="flex items-center gap-2 text-[#FA7054] font-semibold hover:opacity-80 transition"
            >
              <FaRegPlayCircle className="text-2xl" />
              Watch Intro
            </button>
          </div>
        </div>

        {/* ===== Image Section ===== */}
        <div className="w-full md:w-1/2 flex justify-center animate-fadeIn">
          <img
            src={banner}
            alt="MindNest Banner"
            className="w-72 md:w-96 lg:w-[480px] drop-shadow-lg"
          />
        </div>
      </div>

      {/* ===== Info Cards Section ===== */}
      <div className="bg-[#FDF1DA] px-5 pb-12 -mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transition-transform hover:scale-105 hover:shadow-md">
            <FaBrain className="text-[#4F7100] text-4xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-[#121212]">
              Mindful Healing
            </h2>
            <p className="text-sm text-[#121212]/80 mt-1">
              Build emotional balance and inner peace.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center transition-transform hover:scale-105 hover:shadow-md">
            <FaShieldHeart className="text-[#FA7054] text-4xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-[#121212]">
              Safe & Secure
            </h2>
            <p className="text-sm text-[#121212]/80 mt-1">
              Your mental health journey stays private.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center transition-transform hover:scale-105 hover:shadow-md">
            <FaUsers className="text-[#4F7100] text-4xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-[#121212]">
              Community Support
            </h2>
            <p className="text-sm text-[#121212]/80 mt-1">
              Connect with people who truly care.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center transition-transform hover:scale-105 hover:shadow-md">
            <FaHandshake className="text-[#FA7054] text-4xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-[#121212]">
              Guided by Experts
            </h2>
            <p className="text-sm text-[#121212]/80 mt-1">
              Backed by trusted psychologists & counselors.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Modal for Video ===== */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-11/12 md:w-3/4 lg:w-1/2 overflow-hidden relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl z-50"
            >
              &times;
            </button>
            <div className="w-full h-64 md:h-[400px] lg:h-[450px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/56nbk6P3uV4"
                title="Bangladesh Mental Health"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
