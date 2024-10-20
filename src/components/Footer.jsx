import logo from "../assets/images/Arif.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#131e37] text-[#94A3B8] py-10 mt-16 px-6 md:px-14">
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
       
        {/* Footer Logo and About Section */}
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <img src={logo} className="h-28 " alt="Logo" />

          {/* Social Media Section */}
          <div className="mt-4 text-center md:text-left">
            <h3 className="font-medium text-2xl text-[#94A3B8]">Follow Us</h3>
            <ul className="mt-4 flex justify-center md:justify-start text-[#94A3B8] text-3xl space-x-4">
              <li>
                <a href="#" className="hover:text-[#0ea5e9]">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0ea5e9]">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0ea5e9]">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0ea5e9]">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="w-full md:w-auto flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          <div>
            <h3 className="font-medium text-lg text-center md:text-left">Quick Links</h3>
            <ul className="mt-4 text-sm space-y-2 text-center md:text-left">
              <li><a href="#" className="hover:text-[#0ea5e9]">Home</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">About</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">Services</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg text-center md:text-left">Services</h3>
            <ul className="mt-4 text-sm space-y-2 text-center md:text-left">
              <li><a href="#" className="hover:text-[#0ea5e9]">Web Design</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">Web Development</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">SEO</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">Marketing</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-slate-600 pt-4 text-center">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
