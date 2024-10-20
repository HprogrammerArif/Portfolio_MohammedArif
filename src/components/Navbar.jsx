import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/Arif.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#0f172a] w-full z-50 max-w-[1450px] mx-auto md:px-14 fixed top-0 shadow-sm container">
      <div className="flex justify-between items-center py-6">
        {/* Logo Section */}
        <div className="ml-3 md:ml-0">
          <img className="w-auto h-[80px]" src={logo} alt="Logo" />
        </div>

        {/* Navigation Menu for large screens */}
        <div className="hidden lg:flex lg:justify-end lg:items-center lg:gap-8 font-lato text-slate-100 font-medium uppercase w-full">
          <ul className="flex gap-8">
            <li
              className={`cursor-pointer text-[#0ea5e9] font-bold lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
                location.pathname === "/" ? "text-[#0ea5e9]" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
                location.pathname === "/about" ? "text-[#0ea5e9]" : ""
              }`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
                location.pathname === "/services" ? "text-[#0ea5e9]" : ""
              }`}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
                location.pathname === "/showcase" ? "text-[#0ea5e9]" : ""
              }`}
            >
              <Link to="/showcase">Showcase</Link>
            </li>
            <li
              className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
                location.pathname === "/reviews" ? "text-[#0ea5e9]" : ""
              }`}
            >
              <Link to="/reviews">Client Reviews</Link>
            </li>
            <li
              className={`cursor-pointer lg:inline-block border-b border-slate-600 lg:border-none text-sm md:text-md ${
                location.pathname === "/contact" ? "text-[#0ea5e9]" : ""
              }`}
            >
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Icon for small screens */}
        <div className="lg:hidden mx-3">
          <button
            className="text-slate-100 text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Navigation Menu for small screens */}
      <div
        className={`lg:hidden font-lato text-slate-100 font-medium uppercase bg-[#0f172a] w-full transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center py-4">
          <li
            className={`cursor-pointer text-sm md:text-md ${
              location.pathname === "/" ? "text-[#0ea5e9]" : ""
            }`}
          >
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              location.pathname === "/about" ? "text-[#0ea5e9]" : ""
            }`}
          >
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              location.pathname === "/services" ? "text-[#0ea5e9]" : ""
            }`}
          >
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              location.pathname === "/showcase" ? "text-[#0ea5e9]" : ""
            }`}
          >
            <Link to="/showcase" onClick={() => setIsOpen(false)}>
              Showcase
            </Link>
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              location.pathname === "/reviews" ? "text-[#0ea5e9]" : ""
            }`}
          >
            <Link to="/reviews" onClick={() => setIsOpen(false)}>
              Client Reviews
            </Link>
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              location.pathname === "/contact" ? "text-[#0ea5e9]" : ""
            }`}
          >
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
