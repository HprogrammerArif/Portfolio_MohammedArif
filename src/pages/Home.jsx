import { div } from "framer-motion/client";
import img from "../assets/images/1.jpg";
import About from "./About";
import Services from "./Services";
import Showcase from "./Showcase";
import Contact from "./Contact";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <div className="mt-28 lg:mt-36 ">
      <div className="flex flex-col sm:flex-row lg:gap-6">
        <div className="container text-center md:text-left md:mx-5 md:mb-0 mb-6">
          <small className="block font-bold  text-base text-[#0ea5e9]">
            Hi, My Name is
          </small>
          <h3 className="text-2xl sm:text-4xl lg:text-[2.6rem] text-slate-300 font-black capitalize  pt-3 pb-2 md:pb-5">
            Mohammed Arif <br />
          </h3>
          <h3 className="text-2xl sm:text-4xl lg:text-[2.6rem] text-slate-300 font-black capitalize  md:mb-3">
            I build websites for satisfaction.
          </h3>

          <p className=" w-72 mx-auto md:w-full text-base sm:text-lg lg:text-xl pt-3 pb-8 text-slate-400">
            I'm a MERN stack web developer who specializes in front-end
            development. I make 100% error-free websites to ensure client
            satisfaction, which makes me awesome.
          </p>

          <a
            href="https://drive.google.com/uc?export=download&id=1DwZynKZFDYqOYpjoEsG5Qaws48erKveP"
            download
            className="border-2 transition-all  duration-500 rounded-lg border-[#0ea5e9] uppercase py-2 px-4  text-[#0ea5e9] hover:text-slate-900 hover:bg-[#0ea5e9] text-sm font-bold shadow-none hover:shadow-[0_0_25px_5px_#0ea5e9]"
            target="_blank"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center items-center mt-6 sm:mt-0">
          <div className="w-[70%] md:mr-12 sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[450px] relative z-10">
            <img className="w-full h-full rounded-lg" src={img} alt="Profile" />
            <div className="absolute bottom-0 right-0 w-full h-full border-2 border-[#0ea5e9] rounded-lg -z-10 transform translate-x-6 translate-y-6"></div>
          </div>
        </div>
      </div>

      <About />
      <Services />
      <Showcase />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
