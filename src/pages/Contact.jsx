import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#EDF1E6] py-16" id="contact">
      <div className="container-custom mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            If you need help or want to reach out, feel free to contact us.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <FaPhone className="text-2xl text-green-600 mr-4" />
              <span className="text-gray-700">+880 164 576 9571</span>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-2xl text-green-600 mr-4" />
              <span className="text-gray-700">mindnest@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl text-green-600 mr-4" />
              <span className="text-gray-700">
                Dhaka, Bangladesh
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-success w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-success w-full"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
              ></textarea>
              <a
                type="submit"
                className="btn bg-[#4F7100] mt-2 text-white hover:bg-[#EDF1E6] hover:text-gray-800 transition-colors duration-300"
              >
                Send Message
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
