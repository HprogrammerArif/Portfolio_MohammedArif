import { Button } from "../components/ui/moving-border";

import { Meteors } from "../components/ui/meteors";
import { FaFolder, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const text =
    "React.js is an open-source JavaScript library for building user interfaces. It is used by developers to create dynamic and responsive web applications. React.js uses a component-based architecture for reusable pieces of code.";

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      
      <div className=" mt-12 md:mt-32  flex items-center gap-2 text-lg  overflow-hidden capitalize font-bold pl-1 w-[90%] md:w-[96%] mx-auto  border-b  text-slate-300 py-2 sm:text-2xl md:text-2xl xl:text-3xl mb-20 border-[#0ea5e9]">
        services
        <div>
          <Button
            borderRadius="1.75rem"
            className=" border p-0 m-0 text-[#0ea5e9] border-[#0ea5e9]"
          >
            which iam able?
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 p-2 m-2 lg:grid-cols-3 gap-8 md:grid-cols-2">

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

                <Link target="_blank" to={`https://github.com/HprogrammerArif`}>
                  <FaGithub className="text-[#0ea5e9] w-8 h-8" />
                </Link>
              </div>
            </div>

            <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
              web UI with figma&apos;re cool
            </h1>

            <p className="font-normal text-md text-slate-400 mb-4 relative z-50">
              {isExpanded ? text : `${text.slice(0, 150)}...`}
              <span
                onClick={toggleExpanded}
                className="cursor-pointer text-[#0ea5e9]"
              >
                {isExpanded ? " Less" : " More"}
              </span>
            </p>

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

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        
      <ServiceCard liveLink="https://tastematrix.web.app/" 
      gitHub={`https://github.com/HprogrammerArif/BYTEBLAZE-BLOG-REACT`} 
      text={"Bootstrap is a widely used open-source front-end framework that provides a set of pre-designed HTML, CSS, and JavaScript components for building responsive and mobile-first websites and applications"} 
      title={`Design with bootstrap`} 
      stackName1={`JavaScript`}
       stackLink1={`https://www.w3schools.com/js/`} 
      stackName2={`CSS-3`}
       stackLink2={`https://www.w3schools.com/js/`} 
      stackName3={`Bootstrap-5`}
       stackLink3={`https://getbootstrap.com/docs/5.0/getting-started/introduction/`} 
        />

      <ServiceCard liveLink="https://tastematrix.web.app/" 
      gitHub={`https://github.com/HprogrammerArif/BYTEBLAZE-BLOG-REACT`} 
      text={"Tailwind CSS is a popular utility-first CSS framework that provides a wide range of pre-designed classes for building modern and responsive user interfaces. It allows developers to rapidly style their applications without custom CSS."} 
      title={`Design with tailwind`} 
      stackName1={`HTML-5`}
       stackLink1={`https://www.w3schools.com/js/`} 
      stackName2={`CSS-3`}
       stackLink2={`https://www.w3schools.com/js/`} 
      stackName3={`Bootstrap-5`}
       stackLink3={`https://getbootstrap.com/docs/5.0/getting-started/introduction/`} 
        />
      <ServiceCard liveLink="https://tastematrix.web.app/" 
      gitHub={`https://github.com/HprogrammerArif/BYTEBLAZE-BLOG-REACT`} 
      text={"React.js is an open-source JavaScript library for building user interfaces.it used by developers to create dynamic and responsive web applications. React.js uses a component-based architecture for reusable pieces of code."} 
      title={`Frontend with react.js`} 
      stackName1={`JavaScript`}
       stackLink1={`https://www.w3schools.com/js/`} 
      stackName2={`React.Js`}
       stackLink2={`https://www.w3schools.com/js/`} 
      stackName3={`Bootstrap-5`}
       stackLink3={`https://getbootstrap.com/docs/5.0/getting-started/introduction/`} 
        />
      <ServiceCard liveLink="https://tastematrix.web.app/" 
      gitHub={`https://github.com/HprogrammerArif/BYTEBLAZE-BLOG-REACT`} 
      text={"Next.js is a popular open-source framework for building server-side rendered React applications. It provides a set of tools and features for building static,server-side rendering and dynamic web pages with optimized performance"} 
      title={`Build with next.js`} 
      stackName1={`JavaScript`}
       stackLink1={`https://www.w3schools.com/js/`} 
      stackName2={`next.js`}
       stackLink2={`https://www.w3schools.com/js/`} 
      stackName3={`Firebase`}
       stackLink3={`https://getbootstrap.com/docs/5.0/getting-started/introduction/`} 
        />
      <ServiceCard liveLink="https://tastematrix.web.app/" 
      gitHub={`https://github.com/HprogrammerArif/BYTEBLAZE-BLOG-REACT`} 
      text={"Firebase is a mobile and web application development platform that provides a suite of backend services, including real-time database, cloud storage, authentication, hosting for quickly build app"} 
      title={`Build with firebase`} 
      stackName1={`JavaScript`}
       stackLink1={`https://www.w3schools.com/js/`} 
      stackName2={`React.Js`}
       stackLink2={`https://www.w3schools.com/js/`} 
      stackName3={`Firebase`}
       stackLink3={`https://getbootstrap.com/docs/5.0/getting-started/introduction/`} 
        />

      <ServiceCard liveLink="https://tastematrix.web.app/" 
      gitHub={`https://github.com/HprogrammerArif/BYTEBLAZE-BLOG-REACT`} 
      text={"Express.js is a minimalist web framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of robust features for creating HTTP servers and routing requests with middleware architecture."} 
      title={`Build with express.js`} 
      stackName1={`JavaScript`}
       stackLink1={`https://www.w3schools.com/js/`} 
      stackName2={`Express.Js`}
       stackLink2={`https://www.w3schools.com/js/`} 
      stackName3={`MongoDB`}
       stackLink3={`https://getbootstrap.com/docs/5.0/getting-started/introduction/`} 
        />

      <ServiceCard liveLink="https://tastematrix.web.app/" 
      gitHub={`https://github.com/HprogrammerArif/BYTEBLAZE-BLOG-REACT`} 
      text={"MongoDB is a popular NoSQL database that uses a document-based model to store data in a flexible and scalable way. It is designed to handle large amounts of unstructured data and is often used in modern web applications."} 
      title={`build with mongo db`} 
      stackName1={`JavaScript`}
       stackLink1={`https://www.w3schools.com/js/`} 
      stackName2={`Express.Js`}
       stackLink2={`https://www.w3schools.com/js/`} 
      stackName3={`MongoDB`}
       stackLink3={`https://getbootstrap.com/docs/5.0/getting-started/introduction/`} 
        />
      </div>
      
      
    </div>
  );
};

export default Services;
