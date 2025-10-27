import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const CustomersSaying = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/client.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="py-10 bg-[#EDF1E6] overflow-hidden">
      {/* Title */}
      <div className="support-content text-center mt-10 lg:mt-5">
        <h1 className="text-xl lg:text-4xl font-bold text-[#FA7054] uppercase">
          What are Our <span className="text-[#4F7100]">Customers Saying</span>
        </h1>
        <p className="py-2 px-5 lg:py-6 max-w-2xl mx-auto text-center text-gray-600 font-medium">
          Testimonials from people who manage their obsessive <br />-compulsive
          disorder with OCD&me
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true} 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="custon-swiper max-w-6xl mx-auto mt-10 px-4 !pb-14"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card bg-[#ECF3DD] shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100 h-full">
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                “{item.text}”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomersSaying;
