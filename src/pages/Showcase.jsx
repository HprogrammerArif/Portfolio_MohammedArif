import img from "../assets/images/1.jpg";
import ShowCaseCard from "../components/ShowCaseCard";

const Showcase = () => {
  return (
    <div className="mt-28">
      <div className="grid grid-cols-1 p-2 m-2 lg:grid-cols-3 gap-8 md:grid-cols-2">
        <ShowCaseCard
          img={img}
          title={`potfolio..`}
          tech1={`javascript. (ES6+)`}
          tech2={`react js`}
          tech3={`tailwind css`}
          tech4={`tailwind css`}
          tech5={`Framer Motion`}
          github={`https://github.com/HprogrammerArif`}
          liveLink={`http://localhost:5173/showcase`}
        />
      </div>
    </div>
  );
};

export default Showcase;
