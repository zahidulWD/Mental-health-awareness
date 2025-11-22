import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaStar,
  FaUserCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Consultants = () => {
  const [consultants, setConsultants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    location: "All",
    specialization: "All",
    language: "All",
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/consultants.json")
      .then((res) => res.json())
      .then((data) => {
        setConsultants(data);
        setFiltered(data);
      })
      .catch((error) => console.error("Error loading consultants:", error));
  }, []);

  // Filtering Logic
  useEffect(() => {
    let result = consultants;

    if (filters.location !== "All") {
      result = result.filter((c) => c.location === filters.location);
    }
    if (filters.specialization !== "All") {
      result = result.filter(
        (c) => c.specialization === filters.specialization
      );
    }
    if (filters.language !== "All") {
      result = result.filter((c) => c.languages.includes(filters.language));
    }

    setFiltered(result);
    setShowAll(false);
  }, [filters, consultants]);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const uniqueLocations = [
    "All",
    ...new Set(consultants.map((c) => c.location)),
  ];
  const uniqueSpecializations = [
    "All",
    ...new Set(consultants.map((c) => c.specialization)),
  ];
  const uniqueLanguages = [
    "All",
    ...new Set(consultants.flatMap((c) => c.languages)),
  ];

  const displayedConsultants = showAll ? filtered : filtered.slice(0, 6);
  return (
    <section className="bg-gradient-to-b from-[#F4F8EE] to-white py-16 px-4 sm:px-8 lg:px-10 transition-all duration-300">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4F7100]">
          Our <span className="text-[#FFC20F]">Consultants</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Meet our highly qualified professionals dedicated to improving mental
          well-being through expert guidance and personalized support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Sidebar / Filters */}
        <aside className="w-full lg:w-1/4">
          {/* Mobile Filter Button */}
          <div className="flex justify-between lg:hidden mb-4">
            <button
              className="flex items-center gap-2 bg-[#4F7100] text-white px-4 py-2 rounded-full shadow hover:bg-[#3C5700] transition"
              onClick={() => setDrawerOpen(true)}
            >
              <FaUserCheck /> Select Consultant
            </button>
          </div>

          {/* Drawer / Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 z-40 w-72 bg-white/95 backdrop-blur-md shadow-2xl p-6 transform transition-transform duration-300 ease-in-out rounded-r-2xl border-r border-gray-200 
              ${drawerOpen ? "translate-x-0" : "-translate-x-full"} 
              lg:static lg:translate-x-0 lg:rounded-none lg:shadow-none`}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-5 lg:hidden">
              <h3 className="font-semibold text-lg text-[#4F7100]">
                Select Consultant
              </h3>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-gray-500 text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 lg:space-y-6 sticky top-24">
              {/* Location Filter */}
              <div>
                <h4 className="font-semibold text-[#4F7100] mb-2">Location</h4>
                <select
                  className="select select-bordered w-full bg-[#F9FBF4] focus:outline-none border-gray-300"
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                >
                  {uniqueLocations.map((loc, i) => (
                    <option key={i} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Specialization Filter */}
              <div>
                <h4 className="font-semibold text-[#4F7100] mb-2">
                  Specialization
                </h4>
                <select
                  className="select select-bordered w-full bg-[#F9FBF4] focus:outline-none border-gray-300"
                  value={filters.specialization}
                  onChange={(e) =>
                    handleFilterChange("specialization", e.target.value)
                  }
                >
                  {uniqueSpecializations.map((spec, i) => (
                    <option key={i} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Filter */}
              <div>
                <h4 className="font-semibold text-[#4F7100] mb-2">Language</h4>
                <select
                  className="select select-bordered w-full bg-[#F9FBF4] focus:outline-none border-gray-300"
                  value={filters.language}
                  onChange={(e) =>
                    handleFilterChange("language", e.target.value)
                  }
                >
                  {uniqueLanguages.map((lang, i) => (
                    <option key={i} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Button */}
              <button
                className="w-full mt-3 bg-[#FFC20F] text-[#4F7100] font-semibold py-2 rounded-full hover:bg-[#eab308] transition"
                onClick={() =>
                  setFilters({
                    location: "All",
                    specialization: "All",
                    language: "All",
                  })
                }
              >
                Showing all consultants
              </button>
            </div>
          </div>

          {/* Mobile Overlay */}
          {drawerOpen && (
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setDrawerOpen(false)}
            ></div>
          )}
        </aside>

        {/* Consultants Grid */}
        <div className="lg:w-3/4 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {displayedConsultants.length === 0 ? (
            <p className="text-gray-600 text-center col-span-full text-lg">
              No consultants found for the selected filters.
            </p>
          ) : (
            displayedConsultants.map((c) => (
              <div
                key={c.id}
                className="bg-white shadow-md hover:shadow-2xl rounded-2xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 px-2 py-1 rounded-full flex items-center gap-1 text-[#FFC20F] text-sm font-semibold shadow-md">
                    <FaStar className="text-[#FFC20F]" /> {c.rating}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {c.name}
                    </h3>
                    <p className="text-[#4F7100] font-medium text-sm mb-2">
                      {c.role}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {c.bio}
                    </p>

                    <div className="text-sm text-gray-700 space-y-1 mt-3">
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#4F7100]" />{" "}
                        {c.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaEnvelope className="text-[#4F7100]" />{" "}
                        {c.contact.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaPhone className="text-[#4F7100]" /> {c.contact.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaCalendarAlt className="text-[#4F7100]" />{" "}
                        {Object.keys(c.availability)
                          .filter(
                            (day) => c.availability[day] !== "Not available"
                          )
                          .slice(0, 2)
                          .join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      to={`/appointment?consultant=${c.id}`}
                      className="btn bg-[#4F7100] w-3/4 text-white uppercase"
                    >
                      Appointment Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* See More / See Less Button */}
      {filtered.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#4F7100] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#3C5700] transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Consultants;
