import { div } from "framer-motion/client";
import img from "../assets/images/1.jpg";
import About from "./About";
import Services from "./Services";
import Showcase from "./Showcase";
import Contact from "./Contact";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 my-10 gap-6">
        <div className="mt-36 container mx-5 pl-6">
          <small className="block font-bold text-left text-base text-[#0ea5e9] md:text-left">
            Hi, My Name is
          </small>
          <h3 className="text-4xl text-slate-300 font-black capitalize text-left pt-3 pb-2 md:text-left md:text-[2.6rem] md:pt-4">
            Mohammed Arif
          </h3>
          <h3 className="text-4xl text-slate-300 font-black capitalize text-left mb-3 md:text-left md:text-[2.6rem] md:py-2">
            I build website for satisfaction.
          </h3>

          <p className="text-left text-[1.1rem] pt-3 pb-8 text-slate-400 md:text-left lg:text-xl">
            I'm a MERN stack web developer who specializes in building front-end
            web developer. I make 100% error-free website for client
            satisfaction which make me awesome.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1DwZynKZFDYqOYpjoEsG5Qaws48erKveP"
            download
            className="border-2 transition-all duration-500 rounded-lg border-[#0ea5e9] uppercase py-2 px-4 text-[#0ea5e9] hover:text-slate-900 hover:bg-[#0ea5e9] text-sm font-bold shadow-none hover:shadow-[0_0_25px_5px_#0ea5e9]"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
        <div className="ml-12">
          <div className="w-[70%] container mx-auto mt-28 sm:w-[250px] md:w-[300px] lg:w-[450px] relative z-10">
            <img className="w-full h-full rounded-lg" src={img} alt="" />
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
