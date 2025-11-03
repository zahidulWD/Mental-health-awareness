import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2B3E00] text-[#FFFFFFCC] pt-16 pb-8">
      <div className="container-custom mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">MindNest</h2>
          <p>
            A calm place to explore, learn, and grow your mental well-being.
            Join us in spreading awareness and support for better mental health.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="bg-[#4F7100] text-white p-2 rounded-full hover:bg-[#678F15] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-[#4F7100] text-white p-2 rounded-full hover:bg-[#678F15] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-[#4F7100] text-white p-2 rounded-full hover:bg-[#678F15] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Therapy Plans</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Mental Health Blog</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#B8E28A]" /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#B8E28A]" /> mindnest@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#B8E28A]" /> +880 1645 769 571
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#FFFFFF33] mt-10 pt-5 text-center text-[#FFFFFF99] text-sm">
        © {new Date().getFullYear()} MindNest | All Rights Reserved 🌿
      </div>
    </footer>
  );
};

export default Footer;
