import img1 from "../assets/images/1.png";

import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/9.png";
import img7 from "../assets/images/7.png";
import ShowCaseCard from "../components/ShowCaseCard";
import { Button } from "../components/ui/moving-border";

const Showcase = () => {
  return (
    <div className="">
      <div className=" mt-12 md:mt-32  flex items-center gap-2 text-xl  overflow-hidden capitalize font-bold pl-1 w-[90%] md:w-[96%] mx-auto  border-b  text-slate-300 py-2 sm:text-2xl md:text-2xl xl:text-3xl mb-20 border-[#0ea5e9]">
        Showcase
        <div>
          <Button
            borderRadius="1.75rem"
            className=" border p-0 m-0 text-[#0ea5e9] border-[#0ea5e9]"
          >
            Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 p-2 m-2 lg:grid-cols-3 gap-8 md:grid-cols-2">
        <ShowCaseCard
          img={img6}
          title={`potfolio..`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`tailwind css`}
          tech4={`tailwind css`}
          tech5={`Framer Motion`}
          githubClient={`https://github.com/HprogrammerArif/Portfolio_MohammedArif`}
          githubServer={`https://github.com/HprogrammerArif/Portfolio_MohammedArif`}
          liveLink={`https://mohammed-arif-88f5c.web.app/`}
        />

        <ShowCaseCard
          img={img3}
          title={`StayVision || A colaborative study hub`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`Node.Js`}
          tech4={`MongoDB`}
          tech5={`ExpressJS`}
          githubClient={`https://github.com/HprogrammerArif/StayVision-Client`}
          githubServer={`https://github.com/HprogrammerArif/StayVision-Server`}
          liveLink={`https://stayvision-e5db4.web.app/`}
        />

        <ShowCaseCard
          img={img1}
          title={`Stayvista || A Hotel Booking Management`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`Node.Js`}
          tech4={`MongoDB`}
          tech5={`ExpressJS`}
          githubClient={`https://github.com/HprogrammerArif/stay-vista-client`}
          githubServer={`https://github.com/HprogrammerArif/stay-vista-server`}
          liveLink={`https://stayvista-arif.web.app/`}
        />

<ShowCaseCard
          img={img3}
          title={`StayVision || A colaborative study hub`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`Node.Js`}
          tech4={`MongoDB`}
          tech5={`ExpressJS`}
          githubClient={`https://github.com/HprogrammerArif/StayVision-Client`}
          githubServer={`https://github.com/HprogrammerArif/StayVision-Server`}
          liveLink={`https://stayvision-e5db4.web.app/`}
        />

        <ShowCaseCard
          img={img4}
          title={`TasteMatrix || A Resturent Foods Showcase Website`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`Node.Js`}
          tech4={`MongoDB`}
          tech5={`ExpressJS`}
          githubClient={`https://github.com/HprogrammerArif/TasteMatrix-client`}
          githubServer={`https://github.com/HprogrammerArif/TasteMatrix-server`}
          liveLink={`https://tastematrix.web.app/`}
        />

        <ShowCaseCard
          img={img5}
          title={`DiscoverWander || A Tourist Management Website`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`Node.Js`}
          tech4={`MongoDB`}
          tech5={`ExpressJS`}
          githubClient={`https://github.com/HprogrammerArif/DiscoverWander-client`}
          githubServer={`https://github.com/HprogrammerArif/DiscoverWander-server`}
          liveLink={`https://discoverwander-16ac4.web.app/`}
        />

        <ShowCaseCard
          img={img7}
          title={`TheEstateMarket || A Real-State Property Listings Website`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`Tailwind CSS`}
          tech4={`DaisyUI`}
          tech5={`MambaUI`}
          githubClient={`https://github.com/HprogrammerArif/TheEstateMarket`}
          githubServer={`https://github.com/HprogrammerArif/TheEstateMarket`}
          github={`https://github.com/HprogrammerArif/TheEstateMarket`}
          liveLink={`https://theestatemarket.web.app/`}
        />


        {/* <div
          className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
          }}
        >
          <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
            <h2 className="mt-4 text-xl font-semibold text-white capitalize">
              Best website collections
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
              Website
            </p>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Showcase;
