// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// const CustomersSaying = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetch("/client.json")
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//       .catch((error) => console.error("Error loading data:", error));
//   }, []);

//   return (
//     <div className="py-10 bg-[#EDF1E6] overflow-hidden">
//       {/* Title */}
//       <div className="support-content text-center mt-10 lg:mt-5">
//         <h1 className="text-xl lg:text-4xl font-bold text-[#4F7100] uppercase">
//           What are Our <span className="text-[#FFC20F]">Customers Saying</span>
//         </h1>
//         <p className="py-2 px-5 lg:py-6 max-w-2xl mx-auto text-center text-gray-600 font-medium">
//           Testimonials from people who manage their obsessive <br />-compulsive
//           disorder with OCD&me
//         </p>
//       </div>

//       {/* Swiper Slider */}
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         loop={true} 
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="custon-swiper max-w-6xl mx-auto mt-10 px-4 !pb-14"
//       >
//         {testimonials.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="card bg-[#ECF3DD] shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100 h-full">
//               <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
//                 “{item.text}”
//               </p>
//               <div className="flex items-center gap-4 mt-auto">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full border border-gray-300"
//                 />
//                 <div>
//                   <h4 className="font-semibold">{item.name}</h4>
//                   <p className="text-sm text-gray-500">{item.role}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CustomersSaying;


import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaTimes } from "react-icons/fa";

const CustomersSaying = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

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
        <h1 className="text-xl lg:text-4xl font-bold text-[#4F7100] uppercase">
          What are Our <span className="text-[#FFC20F]">Customers Saying</span>
        </h1>
        <p className="py-2 px-5 lg:py-6 max-w-2xl mx-auto text-center text-gray-600 font-medium">
          Testimonials from people who manage their obsessive <br />-compulsive
          disorder with OCD&me
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
        className="custon-swiper max-w-6xl mx-auto mt-10 px-4 !pb-14"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="card bg-[#ECF3DD] shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100 h-full cursor-pointer"
              onClick={() => setSelectedTestimonial(item)}
            >
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

      {/* Modal for full testimonial */}
      {selectedTestimonial && (
        <dialog open className="modal modal-open backdrop-blur-sm">
          <div className="modal-box max-w-md bg-white rounded-2xl relative shadow-2xl">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              onClick={() => setSelectedTestimonial(null)}
            >
              <FaTimes size={20} />
            </button>

            <div className="text-center px-4">
              <img
                src={selectedTestimonial.img}
                alt={selectedTestimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-[#4F7100]/40"
              />
              <h3 className="text-xl font-semibold text-gray-800">{selectedTestimonial.name}</h3>
              <p className="text-green-800 font-medium mb-4">{selectedTestimonial.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{selectedTestimonial.text}</p>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default CustomersSaying;
