import { Button } from "../components/ui/moving-border";
import img from "../assets/images/pic2.jpg";
import { FaBuromobelexperte, FaCheckSquare } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className=" mt-28  flex items-center gap-2 text-3xl  overflow-hidden capitalize font-bold pl-1 w-[90%] md:w-[96%] mx-auto  border-b  text-slate-300 py-2 sm:text-2xl md:text-2xl xl:text-3xl mb-20 border-[#0ea5e9]">
        About Me
        <div>
          <Button
            borderRadius="1.75rem"
            className=" border p-0 m-0 text-[#0ea5e9] border-[#0ea5e9]"
          >
            Who Am I?
          </Button>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-16">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start md:col-span-2 md:ml-6 xl:ml-0">
            <div className="relative z-10 w-[80%] sm:w-[240px] md:w-[300px] lg:w-[380px] xl:w-[430px]">
              <img
                className="w-full h-full rounded-lg"
                src={img}
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 w-full h-full border-2 border-[#0ea5e9] rounded-lg -z-10 transform translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:col-span-3 w-[95%] sm:w-[90%] mt-8 md:mt-0 md:w-[100%] pl-4 md:pl-8">
            <p className="text-left text-[1rem] sm:text-[1.1rem] lg:text-xl text-slate-200 leading-relaxed">
              Hello! My name is Mohammed Arif. I'm a MERN stack developer who
              loves to create amazing user experiences. I specialize in using
              the latest technologies like JavaScript, React.js, Next.js,
              Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase to build
              robust and scalable web applications from scratch. <br />
              <br />
              I've been working in the tech industry for years and have
              extensive experience building web applications. I use React.js and
              Next.js to create responsive and dynamic user interfaces that are
              easy to use. I also use Tailwind CSS to make websites look
              beautiful and professional. <br />
              <br />
              On the server-side, I use Node.js and Express.js to create fast
              and reliable applications. For data storage, I rely on MongoDB and
              Firebase to keep everything organized and efficient. <br />
              <br />I stay updated with the latest trends in web development so
              I can build the best websites possible. My goal is to exceed
              client expectations and provide an exceptional experience. If you
              need a web developer who can help you create an amazing website,
              let's talk!
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 ">

        <div>
          <div className="flex items-center gap-2 text-lg  overflow-hidden capitalize font-bold pl-1 w-[90%] md:w-[96%] mx-auto  border-b  text-slate-300 py-2 sm:text-xl md:text-xl xl:text-2xl mb-6 border-[#0ea5e9]">
            <div className="flex items-center gap-4 md:gap-16">
              <p>My Experties</p>
              <div>
                <Button
                  borderRadius="1.75rem"
                  className=" border text-[#0ea5e9] border-[#0ea5e9]"
                >
                  <FaBuromobelexperte />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-[#0ea5e9] mx-4 md:ml-6 flex gap-16">
            <div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">JavaScript (ES6+)</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">React js</p>
              </div>

              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">mongo db</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">tailwind css</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">TypeScript</p>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">Node js</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">Express js</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">firebase</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">Bootstrap</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">Next Js</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center md:gap-2 text-lg  overflow-hidden capitalize font-bold pl-1 w-[90%] md:w-[96%] mx-auto  border-b  text-slate-300 py-2 sm:text-xl md:text-xl xl:text-2xl mb-6 border-[#0ea5e9]">
            <div className="flex items-center md:gap-4">
              <p>why choose me ?</p>
              <div>
                <Button
                  borderRadius="1.75rem"
                  className=" border p-0 m-0 text-[#0ea5e9] border-[#0ea5e9]"
                >
                  Who Am I?
                </Button>
              </div>
            </div>
          </div>
          <div className="text-[#0ea5e9] ml-6 flex gap-4 mx-2 md:gap-16">
            <div>
              <div className="flex gap-2 items-center  mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">1year+ coding experience</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">clean code</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">Dedication & Commitment</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">Detaila Analysis</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">Team Player</p>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">readable code</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">hand code</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaCheckSquare />
                <p className="text-slate-200">Strong Commitment</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
