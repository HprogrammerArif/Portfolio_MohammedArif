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
  githubClient,
  githubServer,
}) => {
  return (
    <div className=" relative max-w-sm">
      {/*       
      <div
        className="relative shadow-xl w-full h-full  px-2 py-3 overflow-hidden flex flex-col justify-end items-start"
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
            <img src={img} className="w-full h-[350px] object-center" />

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

      </div> */}

      <div
        className="overflow-hidden bg-center w-full h-96 object-center rounded-lg cursor-pointer group"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover", // Makes the whole image fit inside the div
          backgroundPosition: "top", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800  group-hover:opacity-100">
          <div>
            <h3 className="text-lg mt-4 text-slate-200 font-bold border-b-2 uppercase border-[#0ea5e9]">
              {title}
            </h3>

            <h3 className="text-lg font-bold mt-2 text-[#0ea5e9]">
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
              <div className="flex gap-2 text-slate-200">
                <Link
                  target="_blank"
                  to={liveLink}
                  className="flex items-center justify-center gap-2"
                >
                  <a className="h-6 w-6 rounded-full border  border-[#0ea5e9]">
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
                  </a>

                  <p>Live</p>
                </Link>
              </div>

              <Link
                target="_blank"
                to={githubClient}
                className="flex gap-2 ml-4 text-slate-200"
              >
                <FaGithub className="text-[#0ea5e9] w-6 h-6" /> Client
              </Link>
              <Link
                target="_blank"
                to={githubServer}
                className="flex gap-2  text-slate-200"
              >
                <FaGithub className="text-[#0ea5e9] w-6 h-6" /> Server
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseCard;
