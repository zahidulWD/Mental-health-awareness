import React, { useState } from "react";
import Swal from "sweetalert2";

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.date) {
      Swal.fire({
        title: "Please fill all required fields!",
        icon: "warning",
        confirmButtonColor: "#4F7100",
      });
      return;
    }

    Swal.fire({
      title: "Appointment Request Sent!",
      text: "We will contact you shortly.",
      icon: "success",
      confirmButtonColor: "#4F7100",
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#EDF1E6] py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-6 md:p-10 rounded-2xl">

        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4F7100] uppercase">
            Book an <span className="text-[#FFC20F]">Appointment</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Schedule your session with our expert mental health professionals.
            We ensure a safe, confidential and supportive environment for you.
          </p>
          <div className="w-24 h-1 bg-[#FFC20F] mx-auto rounded-full mt-4"></div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* NAME */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered bg-white focus:outline-none border-[#4F7100]"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Email *</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-white focus:outline-none border-[#4F7100]"
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Phone Number *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="number"
              placeholder="Enter your phone number"
              className="input input-bordered bg-white focus:outline-none border-[#4F7100]"
            />
          </div>

          {/* DATE */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Preferred Date *</label>
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              type="date"
              className="input input-bordered bg-white focus:outline-none border-[#4F7100]"
            />
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Message (Optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write a short message (optional)"
              className="textarea textarea-bordered bg-white border-[#4F7100] h-28"
            ></textarea>
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="btn bg-[#4F7100] text-white px-10 py-2 text-lg hover:bg-[#3D5700] transition duration-300 uppercase tracking-wide"
            >
              Submit Appointment
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Appointment;