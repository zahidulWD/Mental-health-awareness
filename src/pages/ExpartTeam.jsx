

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaTimes, FaGraduationCap, FaClock, FaLanguage, FaUserTie, FaCheckCircle } from "react-icons/fa";

const ExpartTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data fetch
  useEffect(() => {
    fetch("/ExpartTeam.json")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading team data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-100">
        <span className="loading loading-bars loading-lg text-[#4F7100]"></span>
      </div>
    );
  }

  // Appointment handler
  const handleAppointment = (member) => {
    window.location.href = "/register";
  };

  return (
    <section className="py-4 md:py-8 lg:py-10 bg-[#EDF1E6]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4F7100] uppercase">
          Meet Our <span className="text-[#FFC20F]">Expert Team</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
          A dedicated team of mental health professionals working together to
          promote emotional well-being, resilience, and mindfulness.
        </p>
         <div className="w-20 h-1 bg-[#FFC20F] mx-auto rounded-full mb-4"></div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="custon-swiperTeam !pb-14"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className="card bg-[#ECF3DD] w-80 md:w-96 shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <figure className="px-10 pt-10">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-xl h-48 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-lg font-medium">{member.name}</h2>
                  <p className="text-green-800 text-sm md:text-base">{member.role}</p>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-3 px-2">{member.details}</p>
                  <div className="card-actions justify-center mt-3">
                    <a
                      className="btn bg-[#4F7100] w-full text-white uppercase"
                      onClick={() => setSelectedMember(member)}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal for details */}
      {selectedMember && (
        <dialog open className="modal modal-open">
          <div className="modal-box max-w-lg bg-white rounded-2xl relative shadow-2xl">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              <FaTimes size={20} />
            </button>

            <div className="text-center">
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-[#4F7100]/40"
              />
              <h3 className="text-xl font-semibold text-gray-800">{selectedMember.name}</h3>
              <p className="text-green-800 font-medium mb-4">{selectedMember.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 px-2">{selectedMember.details}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 text-left text-gray-700 px-2">
              {selectedMember.location && (
                <p className="flex items-center gap-2">
                  <FaGraduationCap className="text-[#4F7100]" /> 
                  <span><strong>Education:</strong> {selectedMember.location}</span>
                </p>
              )}
              {selectedMember.experience && (
                <p className="flex items-center gap-2">
                  <FaUserTie className="text-[#4F7100]" /> 
                  <span><strong>Experience:</strong> {selectedMember.experience}</span>
                </p>
              )}
              {selectedMember.specialization && (
                   <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#4F7100]" /> 
                  <span><strong>Specialization:</strong> {selectedMember.specialization}</span>
                </p>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                className="btn bg-[#4F7100] w-3/4 text-white uppercase"
                onClick={() => handleAppointment(selectedMember)}
              >
                Appointment Now
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default ExpartTeam;
