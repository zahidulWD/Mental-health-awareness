
import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

const PremiumSection = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const [data, setData] = useState({ monthly: [], annually: [] });
  const [loading, setLoading] = useState(true);

    useEffect(() => {

      setTimeout(() => {
        fetch("/premium.json")
          .then((res) => res.json())
          .then((json) => {
            setData(json);
            setLoading(false);
          })
          .catch((err) => console.error("Error loading data:", err));
      }, 1000);
    }, []);


  if (loading) {
    return (
      <p className="text-center py-20 text-gray-500">
        <span className="loading loading-bars loading-xl"></span>
      </p>
    );
  }

  return (
    <div className="bg-[#EDF1E6] py-10 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 mt-4 lg:mt-5 px-2 md:px-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Start your treatment with  
            <span className="text-[#FFC20F]"> ZwangsFrei Premium</span>
          </h1>
          <p className="py-2 lg:py-6 max-w-2xl mx-auto text-gray-600 font-medium text-sm sm:text-base md:text-lg">
            All the features you need for successful therapy support
          </p>

          {/* Tab Buttons */}
          <div className="inline-flex bg-[#ECF3DD] p-1 rounded-full mt-4 flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "monthly"
                  ? "bg-[#4F7100] text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("annually")}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "annually"
                  ? "bg-[#4F7100] text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {data[activeTab].map((plan, index) => (
            <Card key={index} {...plan} activeTab={activeTab} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({
  title,
  price,
  oldPrice,
  color,
  features,
  unavailable,
  highlight,
  activeTab,
}) => {
  return (
    <div
      className={`relative w-full sm:w-[95%] md:w-[85%] lg:w-96 bg-white shadow-lg rounded-3xl transition-all duration-300 mt-16 ${
        highlight ? "shadow-2xl scale-105" : ""
      }`}
    >
      <div className="card-body pt-10 px-4 sm:px-6 pb-6">
        {highlight && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F09E5433]/40 text-[#f5790c] font-semibold px-4 sm:px-6 py-1 sm:py-2 rounded-3xl text-xs sm:text-sm shadow-sm">
            RECOMMENDED
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold uppercase">{title}</h2>
        <div className="mt-2">
          {oldPrice && (
            <small className="text-[#AEBE8A] text-lg sm:text-xl font-medium line-through">
              {oldPrice}
            </small>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color }}>
            {price}
            <small className="text-sm sm:text-base text-[#12121266]/40 font-medium ml-1">
              {activeTab === "monthly" ? "/month" : "/year"}
            </small>
          </h1>
        </div>

        <h3 className="text-lg sm:text-xl font-bold mt-5 text-[#121212]">
          What’s included
        </h3>

        <ul className="mt-3 flex flex-col gap-2 text-sm sm:text-base">
          {features?.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCircleCheck className="text-[#4F7100] text-lg flex-shrink-0 mt-[2px]" />
              <span>{f}</span>
            </li>
          ))}
          {unavailable?.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <IoIosCloseCircleOutline className="text-gray-400 text-lg flex-shrink-0 mt-[2px]" />
              <span className="text-gray-500">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-center gap-2">
          <a className="btn bg-transparent border border-[#4F7100] hover:bg-[#4F7100] text-black hover:text-white rounded-3xl font-semibold px-6 py-3 flex items-center justify-center text-sm sm:text-base transition">
            Register as a therapist
            <FaLongArrowAltRight className="ml-2 mt-[2px]" />
          </a>
          <p className="text-center text-gray-500 mt-2 text-xs sm:text-sm">
            No credit card required for trial period
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumSection;

