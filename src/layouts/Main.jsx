import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Main = () => {
  return (
    <div>
     <Navbar/>
     <div className='pt-6 min-h-[calc(100vh-98px)]'>
        <Outlet />
      </div>
     <Footer/>
    </div>
  );
};

export default Main;