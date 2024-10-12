import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import ShowCaseCard from "../components/ShowCaseCard";
import { Button } from "../components/ui/moving-border";

const Showcase = () => {
  return (
    <div className="">
        <div className=" mt-32  flex items-center gap-2 text-3xl  overflow-hidden capitalize font-bold pl-1 w-[90%] md:w-[96%] mx-auto  border-b  text-slate-300 py-2 sm:text-2xl md:text-2xl xl:text-3xl mb-20 border-[#0ea5e9]">
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
          img={img2}
          title={`potfolio..`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`tailwind css`}
          tech4={`tailwind css`}
          tech5={`Framer Motion`}
          github={`https://github.com/HprogrammerArif/Portfolio_MohammedArif`}
          liveLink={`http://localhost:5173/showcase`}
        />

        <ShowCaseCard
          img={img3}
          title={`StayVision || A colaborative study hub`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`Node.Js`}
          tech4={`MongoDB`}
          tech5={`ExpressJS`}
          github={`https://github.com/HprogrammerArif/StayVision-Client`}
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
          github={`https://github.com/HprogrammerArif/stay-vista-client`}
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
          github={`https://github.com/HprogrammerArif/StayVision-Client`}
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
          github={`https://github.com/HprogrammerArif/TasteMatrix-client`}
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
          github={`https://github.com/HprogrammerArif/DiscoverWander-client`}
          liveLink={`https://discoverwander-16ac4.web.app/`}
        />
        
        <ShowCaseCard
          img={img5}
          title={`DiscoverWander || A Tourist Management Website`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`Node.Js`}
          tech4={`MongoDB`}
          tech5={`ExpressJS`}
          github={`https://github.com/HprogrammerArif/DiscoverWander-client`}
          liveLink={`https://discoverwander-16ac4.web.app/`}
        />


      </div>
    </div>
  );
};

export default Showcase;
