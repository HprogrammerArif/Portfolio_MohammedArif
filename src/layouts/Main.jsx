import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";


const Main = () => {
  return (
    <div className="bg-[#0f172a]">
     <Navbar/>
     <div className='pt-6 container mx-auto min-h-[calc(100vh)] '>
     <Toaster />
        <Outlet />
      </div>
     <Footer/>
    </div>
  );
};

export default Main;