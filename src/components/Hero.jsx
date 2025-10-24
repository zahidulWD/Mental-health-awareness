import { FaLongArrowAltRight, FaRegPlayCircle } from "react-icons/fa";
import banner from "../assets/images/banner-image.png";
import bannerbg from "../assets/images/banner-bg1.png";
import endtoend from "../assets/images/end-to-end.png";
import scienfically from "../assets/images/scienfically.png";
import recomentet from "../assets/images/recomentet.png";
import datacontrol from "../assets/images/data-control.png";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#FDF1DA]">
      <div className="container-custom relative overflow-hidden ">
      {/* Background Image */}
      <img
        src={bannerbg}
        alt="banner background"
        className="absolute bottom-0 left-1/2 md:left-3/4 lg:left-3/4 lg:top-15 -translate-x-1/2 w-[300px] md:w-[350px] lg:w-[400px] opacity-80 pointer-events-none transition-all duration-500"
      />

      <div className="mx-auto px-5 py-16">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10 mt-4">
          {/* Banner Image */}
          <div className="relative z-10 flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src={banner}
              alt="banner"
              className="max-w-xs md:max-w-sm lg:max-w-lg drop-shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left w-full md:w-1/2 mr-8">
            {/* badge */}
            <div className="badge bg-[#FA7054] text-[#FFFFFF] rounded-2xl p-4 text-[10px]  lg:text-sm lg:mb-4"><p className="">Limited offer: 20% discount + 14-day free trial</p></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4F7100] leading-snug text-left">
              Free yourself <br /> from burdensome <br />{" "}
              <span className="text-[#FA7054]">constraints</span>
            </h1>

            <p className="py-6 text-[#121212CC] max-w-md mx-auto md:mx-0 font-medium text-left">
              OCD&me is your scientifically based digital support that helps you systematically manage obsessive-compulsive disorder - in collaboration with your therapist.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <a className="btn bg-[#4F7100] text-white rounded-3xl font-semibold px-6 py-3 flex items-center text-base hover:bg-[#3e5a00] transition">
                Try it for free{" "}
                <FaLongArrowAltRight className="text-sm mt-1 ml-2" />
              </a>

              <a className="btn bg-[#FA7054] rounded-3xl text-[#121212] px-6 py-3 flex items-center gap-2 text-base font-semibold hover:bg-[#e55f45] transition">
                <FaRegPlayCircle className="text-white text-lg" /> Watch videos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
          {/* banner card section */}
{/* banner card section */}
<div className="p-4">
  <div className="-top-20 lg:right-8 relative flex flex-wrap justify-evenly max-w-[1080px] bg-[#D1E0AF] mx-auto rounded-xl p-4 mt-4">
  {/* card1 */}
  <div className="text-center p-2 flex-[1_1_250px]">
    <img src={endtoend} alt="end to end" className="inline-block mx-auto mb-2" />
    <h2 className="text-lg lg:text-xl font-semibold text-[#121212]">End-to-end encryption</h2>
    <p className="text-sm lg:text-base text-[#121212]/80">Maximum security for your data</p>
  </div>

  {/* card2 */}
  <div className="text-center p-2 flex-[1_1_250px]">
    <img src={scienfically} alt="scientifically" className="inline-block mx-auto mb-2" />
    <h2 className="text-lg lg:text-xl font-semibold text-[#121212]">Scientifically based</h2>
    <p className="text-sm lg:text-base text-[#121212]/80">Based on current research findings</p>
  </div>

  {/* card3 */}
  <div className="text-center p-2 flex-[1_1_250px]">
    <img src={recomentet} alt="recommended" className="inline-block mx-auto mb-2" />
    <h2 className="text-lg lg:text-xl font-semibold text-[#121212]">Recommended by experts</h2>
    <p className="text-sm lg:text-base text-[#121212]/80">Tested by leading therapists</p>
  </div>

  {/* card4 */}
  <div className="text-center p-2 flex-[1_1_250px]">
    <img src={datacontrol} alt="data control" className="inline-block mx-auto mb-2" />
    <h2 className="text-lg lg:text-xl font-semibold text-[#121212]">Data control</h2>
    <p className="text-sm lg:text-base text-[#121212]/80">Full control of your data</p>
  </div>
</div>
</div>

    </div>
     
  );
};

export default Hero;
