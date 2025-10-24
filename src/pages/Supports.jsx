import Psychoeducation from "../assets/images/Psychoeducation.png";
import Identifying from "../assets/images/Identifying.png";
import Therapy from "../assets/images/therapy.png";
import { FaCircleCheck } from "react-icons/fa6";

const Supports = () => {
  return (
    <div className="container-custom">
      {/* support-content */}
      <div className="support-content text-center">
        <h1 className="text-2xl lg:text-4xl font-bold">
          How OCD&me supports you
        </h1>
        <p className="py-2 px-5 lg:py-6 max-w-2xl mx-auto text-center lg:text-center">
          The scientifically based approach to overcoming obsessive- <br />
          compulsive disorder in a few simple steps
        </p>
      </div>

      <section className="bg-[#FAF8F1] py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 mb-8">
          {/* --- Left Content --- */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F8D288] text-black rounded-full font-bold">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Psychoeducation
              </h2>
            </div>

            <p className="text-[#121212CC]/80 font-normal text-lg sm:text-base mb-5 leading-relaxed">
              Start with a comprehensive understanding of your
              obsessive-compulsive disorder. Our scientifically based
              psychoeducation explains how compulsions develop, what types there
              are, and how treatment works.
            </p>

            <ul className="space-y-3 text-[14px] sm:text-[15px]">
              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Understandable explanation of OCD mechanisms
                </span>
              </li>

              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Identifying your specific compulsive disorder
                </span>
              </li>

              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Scientifically based information
                </span>
              </li>
            </ul>

            <div className="mt-6 flex justify-start lg:justify-start">
              <a className="btn bg-[#5A7A3C] hover:bg-[#4f6c35] text-white mt-2 rounded-full px-6">
                Try it for free →
              </a>
            </div>
          </div>

          {/* --- Right Image --- */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="bg-[#EDF1E6] w-[90%] lg:w-[416px] rounded-2xl flex justify-center items-center">
              <img
                src={Psychoeducation}
                alt="Therapy Illustration"
                className="max-w-sm rounded-xl -mt-6 w-[80%] sm:w-[300px] md:w-[340px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section_02 */}
      <section className="bg-[#FAF8F1] py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 mb-8">
          {/* --- Left Content --- */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F8D288] text-black rounded-full font-bold">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Identifying Compulsions 5
              </h2>
            </div>

            <p className="text-[#121212CC]/80 font-normal text-lg sm:text-base mb-5 leading-relaxed">
              Systematically record your individual obsessive thoughts and actions. By deconstructing them, you'll identify the underlying vicious cycles and be able to break them in a targeted manner.
            </p>

            <ul className="space-y-3 text-[14px] sm:text-[15px]">
              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Structured recording of your compulsions
                </span>
              </li>

              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Analysis of vicious circles
                </span>
              </li>

              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Categorization according to types of coercion
                </span>
              </li>
            </ul>

            <div className="mt-6 flex justify-start lg:justify-start">
              <a className="btn bg-[#5A7A3C] hover:bg-[#4f6c35] text-white mt-2 rounded-full px-6">
                Try it for free →
              </a>
            </div>
          </div>

          {/* --- Right Image --- */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="bg-[#FFF1EE] w-[90%] lg:w-[416px] rounded-2xl flex justify-center items-center">
              <img
                src={Identifying}
                alt="Identifying"
                className="max-w-sm rounded-xl -mt-6 w-[80%] sm:w-[300px] md:w-[340px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section_03 */}
      <section className="bg-[#FAF8F1] py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 mb-8">
          {/* --- Left Content --- */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F8D288] text-black rounded-full font-bold">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                ERP therapy
              </h2>
            </div>

            <p className="text-[#121212CC]/80 font-normal text-lg sm:text-base mb-5 leading-relaxed">
              Plan customized exposure exercises (ERPs) for your specific compulsions. Gradual exposure will help you reduce your anxiety and overcome the compulsions.
            </p>

            <ul className="space-y-3 text-[14px] sm:text-[15px]">
              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Systematic planning of your exposure exercises
                </span>
              </li>

              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Recording anxiety curves during exposures
                </span>
              </li>

              <li className="flex items-start sm:items-center gap-2 text-left">
                <FaCircleCheck className="text-[#FA7054] text-base sm:text-lg flex-shrink-0 mt-[2px]" />
                <span className="leading-snug text-[#121212] lg:text-lg lg:font-medium">
                  Suggestions for the next steps in treatment
                </span>
              </li>
            </ul>

            <div className="mt-6 flex justify-start lg:justify-start">
              <a className="btn bg-[#5A7A3C] hover:bg-[#4f6c35] text-white mt-2 rounded-full px-6">
                Try it for free →
              </a>
            </div>
          </div>

          {/* --- Right Image --- */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="bg-[#FDF1DA] w-[90%] lg:h-[400px] lg:w-[416px] rounded-2xl flex justify-center items-center">
              <img
                src={Therapy}
                alt="Therapy"
                className="max-w-sm rounded-xl w-[80%] sm:w-[300px] md:w-[340px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Supports;
