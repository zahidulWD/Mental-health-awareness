

// import { FaRegPlayCircle } from "react-icons/fa";
// import banner from "../assets/images/banner_image-4.png";
// import endtoend from "../assets/images/end-to-end.png";
// import scienfically from "../assets/images/scienfically.png";
// import recomentet from "../assets/images/recomentet.png";
// import datacontrol from "../assets/images/data-control.png";

// const Hero = () => {
//   return (
//     <div className="bg-[#FDF1DA]">
//       {/* Main Banner Section */}
//       <div className="container-custom flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 py-12">
//         {/* Text Section */}
//         <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4F7100] leading-snug">
//             Nurture your mind, <br />
//             embrace your <span className="text-[#FA7054]">well-being</span>
//           </h1>

//           <p className="text-[#121212CC] max-w-md mx-auto md:mx-0 text-base md:text-lg font-medium">
//             MindNest helps you understand, heal, and strengthen your mental health — 
//             guided by science, compassion, and community.  
//             <br />
//             <span className="text-[#4F7100] font-semibold">
//               আপনার মানসিক শান্তিই আপনার আসল শক্তি — MindNest পাশে আছে সবসময়।
//             </span>
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
//             <a className="btn bg-[#4F7100] hover:bg-[#3a5900] text-white rounded-full px-8 py-3 font-semibold transition">
//               Get Started
//             </a>

//             <button className="flex items-center gap-2 text-[#FA7054] font-semibold hover:opacity-80 transition">
//               <FaRegPlayCircle className="text-2xl" />
//               Watch Intro
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={banner}
//             alt="MindNest Banner"
//             className="w-72 md:w-96 lg:w-[480px] drop-shadow-lg animate-fadeIn"
//           />
//         </div>
//       </div>

//       {/* Info Cards Section */}
//       <div className="bg-[#EDF1E6] px-5 pb-8 -mt-10">
//         <div className="relative max-w-6xl mx-auto bg-[#D1E0AF] rounded-2xl p-6 flex flex-wrap justify-evenly gap-6 shadow-sm">
          
//           {/* Card 1 */}
//           <div className="text-center p-4 flex-[1_1_230px] bg-white/40 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
//             <img src={endtoend} alt="End-to-end Encryption" className="mx-auto mb-3 w-12 h-12" />
//             <h2 className="text-lg lg:text-xl font-semibold text-[#121212]">
//               End-to-end Encryption
//             </h2>
//             <p className="text-sm text-[#121212]/80 mt-1">
//               Your privacy is our priority
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="text-center p-4 flex-[1_1_230px] bg-white/40 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
//             <img src={scienfically} alt="Scientifically Based" className="mx-auto mb-3 w-12 h-12" />
//             <h2 className="text-lg lg:text-xl font-semibold text-[#121212]">
//               Scientifically Based
//             </h2>
//             <p className="text-sm text-[#121212]/80 mt-1">
//               Grounded in proven research
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="text-center p-4 flex-[1_1_230px] bg-white/40 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
//             <img src={recomentet} alt="Expert Recommended" className="mx-auto mb-3 w-12 h-12" />
//             <h2 className="text-lg lg:text-xl font-semibold text-[#121212]">
//               Expert Recommended
//             </h2>
//             <p className="text-sm text-[#121212]/80 mt-1">
//               Trusted by professionals
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="text-center p-4 flex-[1_1_230px] bg-white/40 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
//             <img src={datacontrol} alt="Data Control" className="mx-auto mb-3 w-12 h-12" />
//             <h2 className="text-lg lg:text-xl font-semibold text-[#121212]">
//               Data Control
//             </h2>
//             <p className="text-sm text-[#121212]/80 mt-1">
//               You own your information
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import { FaRegPlayCircle, FaBrain, FaUsers, FaHandshake } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import banner from "../assets/images/banner_image-4.png";

const Hero = () => {
  return (
    <div className="bg-[#FDF1DA] overflow-hidden">
      {/* ===== Banner Section ===== */}
      <div className="container-custom flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 py-12">
        
        {/* ===== Text Section ===== */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4F7100] leading-snug animate-fadeIn">
            Nurture your mind, <br />
            embrace your <span className="text-[#FA7054]">well-being</span>
          </h1>

          <p className="text-[#121212CC] max-w-md mx-auto md:mx-0 text-base md:text-lg font-medium animate-fadeIn">
            MindNest helps you understand, heal, and strengthen your mental health — 
            guided by science, compassion, and community.
            <br />
            <span className="text-[#4F7100] font-semibold">
              আপনার মানসিক শান্তিই আপনার আসল শক্তি — MindNest পাশে আছে সবসময়।
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fadeIn">
            <a
              href="#"
              className="btn bg-[#4F7100] hover:bg-[#3a5900] text-white rounded-full px-8 py-3 font-semibold transition"
            >
              Get Started
            </a>

            <button className="flex items-center gap-2 text-[#FA7054] font-semibold hover:opacity-80 transition">
              <FaRegPlayCircle className="text-2xl" />
              Watch Intro
            </button>
          </div>
        </div>

        {/* ===== Image Section ===== */}
        <div className="w-full md:w-1/2 flex justify-center animate-fadeIn">
          <img
            src={banner}
            alt="MindNest Banner"
            className="w-72 md:w-96 lg:w-[480px] drop-shadow-lg"
          />
        </div>
      </div>

      {/* ===== Info Cards Section ===== */}
      <div className="bg-[#FDF1DA] px-5 pb-12 -mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transition-transform hover:scale-105 hover:shadow-md">
            <FaBrain className="text-[#4F7100] text-4xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-[#121212]">Mindful Healing</h2>
            <p className="text-sm text-[#121212]/80 mt-1">
              Build emotional balance and inner peace.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transition-transform hover:scale-105 hover:shadow-md">
            <FaShieldHeart className="text-[#FA7054] text-4xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-[#121212]">Safe & Secure</h2>
            <p className="text-sm text-[#121212]/80 mt-1">
              Your mental health journey stays private.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transition-transform hover:scale-105 hover:shadow-md">
            <FaUsers className="text-[#4F7100] text-4xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-[#121212]">Community Support</h2>
            <p className="text-sm text-[#121212]/80 mt-1">
              Connect with people who truly care.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transition-transform hover:scale-105 hover:shadow-md">
            <FaHandshake className="text-[#FA7054] text-4xl mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-[#121212]">Guided by Experts</h2>
            <p className="text-sm text-[#121212]/80 mt-1">
              Backed by trusted psychologists & counselors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
