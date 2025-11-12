
import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

const PremiumSection = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const [data, setData] = useState({ monthly: [], annually: [] });

  useEffect(() => {
    fetch("/premium.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F9EF] via-[#E8F3DA] to-[#F0F8E0] -z-10"></div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Start your journey with
            <span className="text-[#4F7100]"> MindNest Premium</span>
          </h1>
          <p className="py-4 max-w-2xl mx-auto text-gray-600 font-medium text-base md:text-lg">
            Choose the plan that fits your mental wellness goals.
          </p>

          {/* Tabs */}
          <div className="inline-flex bg-[#ECF3DD] p-1 rounded-full mt-2 flex-wrap justify-center gap-2 shadow-sm">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "monthly"
                  ? "bg-[#4F7100] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("annually")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "annually"
                  ? "bg-[#4F7100] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
      className={`relative w-full max-w-sm bg-white rounded-3xl border border-[#E2EED0] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#4F7100]/50 flex flex-col justify-between ${
        highlight ? "shadow-xl scale-105" : "shadow-md"
      }`}
      style={{ minHeight: "500px" }}
    >
      <div className="p-8 flex flex-col flex-grow">
        {highlight && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F09E5433]/40 text-[#F5841E] font-semibold px-6 py-1 rounded-3xl text-sm shadow-md">
            RECOMMENDED
          </span>
        )}

        <h2 className="text-2xl md:text-3xl font-bold uppercase">{title}</h2>

        <div className="mt-3">
          {oldPrice && (
            <small className="text-[#AEBE8A] text-lg font-medium line-through">
              {oldPrice}
            </small>
          )}
          <h1
            className="text-4xl md:text-5xl font-bold mt-1"
            style={{ color }}
          >
            {price}
            <small className="text-sm text-[#12121299] ml-1">
              {activeTab === "monthly" ? "/month" : "/year"}
            </small>
          </h1>
        </div>

        <h3 className="text-lg font-semibold mt-5 text-[#121212]">
          What’s included
        </h3>

        <ul className="mt-3 flex flex-col gap-2 text-sm sm:text-base flex-grow">
          {features?.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCircleCheck className="text-[#4F7100] text-lg mt-[2px]" />
              <span>{f}</span>
            </li>
          ))}
          {unavailable?.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <IoIosCloseCircleOutline className="text-gray-400 text-lg mt-[2px]" />
              <span className="text-gray-500">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pb-8 flex flex-col items-center">
        <a className="btn bg-transparent border border-[#4F7100] hover:bg-[#4F7100] text-black hover:text-white rounded-3xl font-semibold px-6 py-3 flex items-center justify-center text-sm transition-all duration-300">
          Get Started
          <FaLongArrowAltRight className="ml-2 mt-[2px]" />
        </a>
        <p className="text-center text-gray-500 mt-2 text-xs">
          No credit card required for trial period
        </p>
      </div>
    </div>
  );
};

export default PremiumSection;

