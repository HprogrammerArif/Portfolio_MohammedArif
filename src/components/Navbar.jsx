import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Arif.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-[#0f172a] w-full z-50 max-w-[1450px] mx-auto md:px-14 fixed top-0 shadow-sm container">
    <div className="flex justify-between items-center py-6">
      {/* Logo Section */}
      <div>
        <img className="w-auto h-[80px]" src={logo} alt="Logo" />
      </div>
  
      {/* Navigation Menu */}
      <div>
        <ul className="flex gap-8 font-lato text-slate-100 font-medium uppercase">
          <li className="cursor-pointer text-[#0ea5e9] font-bold lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md">
            <Link to='/'>Home</Link>
          </li>
          <li className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
        location.pathname === '/about' ? 'text-[#0ea5e9]' : ''
      }`}>
          <Link to='/about'>About</Link>
          </li>
          <li className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
        location.pathname === '/services' ? 'text-[#0ea5e9]' : ''
      }`}>
            <Link to="/services">Services</Link>
          </li>
          <Link className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
        location.pathname === '/showcase' ? 'text-[#0ea5e9]' : ''
      }`}>
            <Link to="/showcase">Showcase</Link>
          </Link>
          <li className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
        location.pathname === '/contact' ? 'text-[#0ea5e9]' : ''
      }`}>
            <Link to="/contact">Client Reviews</Link>
          </li>
          <li className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
        location.pathname === '/reviews' ? 'text-[#0ea5e9]' : ''
      }`}>
            <Link to="/reviews">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  );
};

export default Navbar;
