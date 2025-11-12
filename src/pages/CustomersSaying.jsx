
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  FaTimes,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const CustomersSaying = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetch("/client.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const selectedTestimonial =
    selectedIndex !== null ? testimonials[selectedIndex] : null;

  return (
    <div className="py-10 bg-[#EDF1E6] overflow-hidden">
      {/* Section Title */}
      <div className="text-center mt-2 lg:mt-5">
        <h1 className="text-xl lg:text-4xl font-bold text-[#4F7100] uppercase">
          What are Our{" "}
          <span className="text-[#FFC20F]">Customers Saying</span>
        </h1>
        <p className="py-2 px-5 lg:py-6 max-w-2xl mx-auto text-center text-gray-600 font-medium">
          Testimonials from people who manage their obsessive-compulsive
          disorder with MindNest
        </p>
        <div className="w-20 h-1 bg-[#FFC20F] mx-auto rounded-full mb-4"></div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto mt-10 px-4 !pb-14 custon-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className="bg-white hover:bg-[#F9FDF3] border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6 h-full cursor-pointer transition-all duration-300 flex flex-col justify-between"
              onClick={() => setSelectedIndex(index)}
            >
              <FaQuoteLeft className="text-[#4F7100] opacity-40 mb-2 text-2xl" />
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                “{item.text}”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border border-[#4F7100]/30 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedTestimonial && (
        <dialog open className="modal modal-open backdrop-blur-sm">
          <div className="modal-box w-[90%] max-w-lg bg-gradient-to-br from-[#F9FDF3] to-white rounded-3xl relative shadow-2xl border border-[#4F7100]/20">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-all duration-300"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes size={22} />
            </button>

            {/* Content */}
            <div className="text-center p-4 md:p-6">
              <img
                src={selectedTestimonial.img}
                alt={selectedTestimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#4F7100]/40 shadow-md"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {selectedTestimonial.name}
              </h3>
              <p className="text-[#4F7100] font-medium mb-2">
                {selectedTestimonial.role}
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-3 text-[#FFC20F]">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`mx-0.5 ${
                      i < selectedTestimonial.rating
                        ? "text-[#FFC20F]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <div className="relative px-3">
                <FaQuoteLeft className="absolute -left-1 top-0 text-[#FFC20F] opacity-40 text-2xl" />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 px-5">
                  {selectedTestimonial.text}
                </p>
                <FaQuoteRight className="absolute -right-1 bottom-4 text-[#FFC20F] opacity-40 text-2xl" />
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-4 flex-wrap">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 bg-[#4F7100] text-white px-4 py-2 rounded-full hover:bg-[#3C5700] transition-all duration-300"
                >
                  <FaArrowLeft /> Prev
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-[#4F7100] text-white px-4 py-2 rounded-full hover:bg-[#3C5700] transition-all duration-300"
                >
                  Next <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default CustomersSaying;
