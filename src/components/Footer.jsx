import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaXTwitter } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialFacebook, TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className=" bg-[#2B3E00]">
      <footer className="footer sm:footer-horizontal text-white p-10 container-custom mb-5">
        <aside>
          <h2 className="font-bold text-2xl">
            COD & <small>me</small>
          </h2>
          <p className="text-[#FFFFFF]/80">
            Creatives driven by the desire to bring your <br /> vision to life.
            With a blend of artistic flair of <br /> brands than ever before
          </p>
          {/* socail icons with react icon */}
          <div className="flex justify-start gap-4 mt-8 ite items-center">
            <a
              href=""
              className="text-2xl bg-[#4F7100] rounded-full text-[white] p-2"
            >
              {" "}
              <TiSocialFacebook />{" "}
            </a>
            <a
              href=""
              className="text-2xl bg-[#4F7100] rounded-full text-[white] p-2"
            >
              {" "}
              <CiTwitter />
            </a>
            <a
              href=""
              className="text-2xl bg-[#4F7100] rounded-full text-[white] p-2"
            >
              {" "}
              <CiInstagram />
            </a>
            <a
              href=""
              className=" text-2xl bg-[#4F7100] rounded-full text-[white] p-2"
            >
              {" "}
              <RiTwitterXFill />
            </a>
          </div>
        </aside>
        {/* nav-02 */}
        <nav>
          <h6 className="text-lg font-semibold">Company</h6>
          <a className="link link-hover hover:underline text-[#FFFFFF]/80">
            Home
          </a>
          <a className="link link-hover hover:underline text-[#FFFFFF]/80">
            About
          </a>
          <a className="link link-hover hover:underline text-[#FFFFFF]/80">
            Services
          </a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Legal</h6>
          <a className="link link-hover hover:underline text-[#FFFFFF]/80">
            Contact Us
          </a>
          <a className="link link-hover hover:underline text-[#FFFFFF]/80">
            Privacy policy
          </a>
          <a className="link link-hover hover:underline text-[#FFFFFF]/80">
            Terms & Conditions
          </a>
        </nav>
        {/* nav-03 */}
        <nav className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Contact Info</h6>

          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-white/80 mt-1" />
            <a className="link link-hover hover:underline text-[#FFFFFF]/80">
              4140 Parker Rd. Allentown, <br /> New Mexico 31134
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white/80" />
            <a className="link link-hover hover:underline text-[#FFFFFF]/80">
              mentalhealthbd@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaPhone className="text-white/80" />
            <a className="link link-hover hover:underline text-[#FFFFFF]/80">
              (123) 456 7890
            </a>
          </div>
        </nav>
      </footer>
      <div className="">
        <hr className="border-t border-[#fff]/20 mb-4" />
        <p className="text-center font-normal text-lg text-[#FFFFFFCC]/80 py-6">
          2025 © All rights reserved by COD & me
        </p>
      </div>
    </div>
  );
};

export default Footer;
