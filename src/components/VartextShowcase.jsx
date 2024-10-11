import { FaFolder, FaGithub } from "react-icons/fa";
import { Vortex } from "../components/ui/vortex";
import { Link } from "react-router-dom";
import img from "../assets/images/1.jpg";

const VartextShowcase = () => {
  return (
    <div>
     <div className="grid grid-cols-1 p-2 m-2 lg:grid-cols-3 gap-8 md:grid-cols-2">
        <div className=" w-full relative max-w-sm">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div>
              <Vortex
                rangeY={300}
                particleCount={300}
                baseHue={120}
                className="w-full h-full"
              >
                <div className="flex justify-between mt-16 w-full">
                  <div className="h-8 w-8 rounded-full border flex items-center justify-center mb-4 border-[#0ea5e9]">
                    <FaFolder className="text-[#0ea5e9]" />
                  </div>
                  <h1 className="text-[#0ea5e9]">DEMO CARD</h1>
                  <div className="flex gap-3">
                    <Link
                      target="_blank"
                      to={`https://tastematrix.web.app/`}
                      className="h-8 w-8 rounded-full border flex items-center justify-center mb-4 border-[#0ea5e9]"
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

                    <Link
                      target="_blank"
                      to={`https://github.com/HprogrammerArif`}
                    >
                      <FaGithub className="text-[#0ea5e9] w-8 h-8" />
                    </Link>
                  </div>
                </div>

                <img src={img} alt="" />

                <div className="text-lg">
                  <Link
                    to={`https://chatgpt.com/c/67076b4f-e98c-8003-9b11-33ab0632be31`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" px-2 py-1 text-[#0ea5e9]"
                  >
                    React.Js
                  </Link>

                  <Link
                    to={`https://chatgpt.com/c/67076b4f-e98c-8003-9b11-33ab0632be31`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" px-2 py-1 text-[#0ea5e9]"
                  >
                    Tailwind CSS
                  </Link>

                  <Link
                    to={`https://chatgpt.com/c/67076b4f-e98c-8003-9b11-33ab0632be31`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" px-2 py-1 text-[#0ea5e9]"
                  >
                    Vite
                  </Link>
                </div>
              </Vortex>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default VartextShowcase;