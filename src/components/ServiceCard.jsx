import { Meteors } from "../components/ui/meteors";
import { FaFolder, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  liveLink,
  gitHub,
  text,
  title,
  stackName1,
  stackLink1,
  stackName2,
  stackLink2,
  stackName3,
  stackLink3,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" w-full relative max-w-sm">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="flex justify-between mb-4 w-full">
          <div className="h-8 w-8 rounded-full border flex items-center justify-center mb-4 border-[#0ea5e9]">
            <FaFolder className="text-[#0ea5e9]" />
          </div>

          <div className="flex gap-3">
            <Link
              target="_blank"
              to={liveLink}
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

            <Link target="_blank" to={gitHub}>
              <FaGithub className="text-[#0ea5e9] w-8 h-8" />
            </Link>
          </div>
        </div>

        <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
          {title}
        </h1>

        <p className="font-normal text-md text-slate-400 mb-4 relative z-50">
          {isExpanded ? text : `${text?.slice(0, 150)}...`}
          <span
            onClick={toggleExpanded}
            className="cursor-pointer text-[#0ea5e9]"
          >
            {isExpanded ? " Less" : " More"}
          </span>
        </p>

        <div className="text-lg">
          <Link
            to={stackLink1}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-2 py-1 text-[#0ea5e9]"
          >
            {stackName1}
          </Link>

          <Link
            to={stackLink2}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-2 py-1 text-[#0ea5e9]"
          >
            {stackName2}
          </Link>

          <Link
            to={stackLink3}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-2 py-1 text-[#0ea5e9]"
          >
            {stackName3}
          </Link>
        </div>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
};

export default ServiceCard;
