

import { useState, useEffect } from "react";
import Awareness from "../assets/images/download.png";
import CommunitySupport from "../assets/images/community.png";
import { FaCircleCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const modalContent = {
  awareness: {
    title: "Raising Awareness",
    description: `Prominent experts like Dr. Mehedi Hasan and Dr. Nafisa Rahman
      lead initiatives to educate people about mental health, depression,
      anxiety, and trauma in Bangladesh. Awareness campaigns include:`,
    points: [
      "Nationwide awareness campaigns",
      "Expert-led workshops & seminars",
      "Educational social media content",
    ],
  },
  community: {
    title: "Community Support",
    description: `Recording mental health needs and providing support through
      clinics, online consultations, and community programs across
      Bangladesh. Community support initiatives include:`,
    points: [
      "Online & offline counseling support",
      "Collaboration with mental health NGOs",
      "Local support groups & programs",
    ],
  },
};

const Supports = () => {
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#EDF1E6]">
      <div className="container-custom">
        {/* ===== Section Heading ===== */}
        <div
          className="support-content text-center px-4 md:px-8 lg:px-12 py-10 lg:py-14"
          data-aos="fade-up" 
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E4600] leading-snug">
            How Bangladesh’s{" "}
            <span className="text-[#FFC20F]">
              Mental Health Pioneers Support You
            </span>
          </h1>

          <p className="mt-3 lg:mt-5 text-sm sm:text-base lg:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Promoting mental well-being across Bangladesh through awareness, 
            community support, and effective interventions.
          </p>
          {/* line */}
          <div className="w-20 h-1 bg-[#FFC20F] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Step 1: Awareness */}
        <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div
              className="order-2 lg:order-1 text-center lg:text-left"
              data-aos="fade-right" 
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#F8D288] text-black rounded-full font-bold">
                  1
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Raising Awareness
                </h2>
              </div>
              <p className="text-[#121212CC]/80 text-left font-normal text-lg sm:text-base mb-5 leading-relaxed">
                Prominent experts like Dr. Mehedi Hasan and Dr. Nafisa Rahman
                lead initiatives to educate people about mental health,
                depression, anxiety, and trauma in Bangladesh.
              </p>
              <ul className="space-y-3 text-[14px] sm:text-[15px]">
                <li className="flex items-start sm:items-center gap-2 text-left">
                  <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                  <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                    Nationwide awareness campaigns
                  </span>
                </li>
                <li className="flex items-start sm:items-center gap-2 text-left">
                  <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                  <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                    Expert-led workshops & seminars
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex justify-start lg:justify-start">
                <button
                  className="btn bg-[#5A7A3C] hover:bg-[#4f6c35] text-white mt-2 rounded-full px-6"
                  onClick={() => setOpenModal("awareness")}
                >
                  Learn More →
                </button>
              </div>
            </div>

            <div className="flex justify-center order-1 lg:order-2" data-aos="fade-left">
              <div className="w-[90%] lg:w-full rounded-2xl flex justify-center items-center">
                <img
                  src={Awareness}
                  alt="Awareness"
                  className="w-full sm:w-[300px] md:w-[340px] lg:w-100%"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Community Support */}
        <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div
              className="order-2 lg:order-1 text-center lg:text-left"
              data-aos="fade-right" // <-- Animation added
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#F8D288] text-black rounded-full font-bold">
                  2
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">Community Support</h2>
              </div>
              <p className="text-[#121212CC]/80 text-left font-normal text-lg sm:text-base mb-5 leading-relaxed">
                Recording mental health needs and providing support through
                clinics, online consultations, and community programs across
                Bangladesh.
              </p>
              <ul className="space-y-3 text-[14px] sm:text-[15px]">
                <li className="flex items-start sm:items-center gap-2 text-left">
                  <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                  <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                    Online & offline counseling support
                  </span>
                </li>
                <li className="flex items-start sm:items-center gap-2 text-left">
                  <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                  <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                    Collaboration with mental health NGOs
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex justify-start lg:justify-start">
                <button
                  className="btn bg-[#5A7A3C] hover:bg-[#4f6c35] text-white mt-2 rounded-full px-6"
                  onClick={() => setOpenModal("community")}
                >
                  Explore Programs →
                </button>
              </div>
            </div>

            <div className="flex justify-center order-1 lg:order-2" data-aos="fade-left">
              <div className="w-[90%] lg:w-[416px] rounded-2xl flex justify-center items-center">
                <img
                  src={CommunitySupport}
                  alt="Community Support"
                  className="w-full sm:w-[300px] md:w-[340px] lg:w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="modal modal-open fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="modal-box max-w-lg relative bg-white rounded-2xl shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              onClick={() => setOpenModal(null)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {modalContent[openModal].title}
            </h3>
            <p className="text-gray-600 mb-4">{modalContent[openModal].description}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {modalContent[openModal].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="text-center">
              <button
                className="btn bg-[#5A7A3C] hover:bg-[#4f6c35] text-white rounded-full px-6"
                onClick={() => setOpenModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Supports;


