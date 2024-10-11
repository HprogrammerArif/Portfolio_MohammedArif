import { Vortex } from "../components/ui/vortex";

import { useState } from "react";
import { FaCheckSquare, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowCaseCard = ({
  img,
  title,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  liveLink,
  github,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" relative max-w-sm">
      <div />
      <div
        className="relative shadow-xl w-full h-full  px-4 py-8 overflow-hidden flex flex-col justify-end items-start"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <Vortex
            rangeY={300}
            particleCount={300}
            baseHue={120}
            className="w-full h-full"
          >
            <img src={img} className="w-full h-full object-cover" />

            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col text-white p-4 transition-opacity duration-300 ease-in-out">
                <h3 className="text-lg mt-4 font-bold border-b-2 uppercase border-[#0ea5e9]">
                  {title}
                </h3>

                <h3 className="text-lg font-bold text-[#0ea5e9]">
                  Technolozy Usage:
                </h3>
                <div className="text-[#0ea5e9] ml-6 flex gap-16">
                  <div>
                    <div className="flex gap-2 items-center mb-2">
                      <FaCheckSquare />
                      <p className="text-slate-200">{tech1}</p>
                    </div>
                    <div className="flex gap-2 items-center mb-2">
                      <FaCheckSquare />
                      <p className="text-slate-200">{tech2}</p>
                    </div>
                    <div className="flex gap-2 items-center mb-2">
                      <FaCheckSquare />
                      <p className="text-slate-200">{tech3}</p>
                    </div>
                    <div className="flex gap-2 items-center mb-2">
                      <FaCheckSquare />
                      <p className="text-slate-200">{tech4}</p>
                    </div>
                    <div className="flex gap-2 items-center mb-2">
                      <FaCheckSquare />
                      <p className="text-slate-200">{tech5}</p>
                    </div>
                  </div>
                </div>

                <div className="flex mt-8 gap-3">
                  <div className="flex gap-2">
                    <Link
                      target="_blank"
                      to={liveLink}
                      className="h-6 w-6 rounded-full border flex items-center justify-center mb-4 border-[#0ea5e9]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4 text-[#0ea5e9]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </Link>
                    Live
                  </div>

                  <Link target="_blank" to={github} className="flex gap-2">
                    <FaGithub className="text-[#0ea5e9] w-6 h-6" /> GitHub
                  </Link>
                </div>
              </div>
            )}
          </Vortex>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseCard;
