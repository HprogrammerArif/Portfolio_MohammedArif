import logo from "../assets/images/Arif.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#131e37] text-[#94A3B8] py-10 mt-16 px-6 md:px-14">
      <div className="max-w-[1450px] mx-auto flex justify-between ">
       
        {/* Footer Logo and About Section */}
        <div className="mb-6 md:mb-0">
          <img src={logo} className="h-28 "></img>
           {/* Social Media Section */}
        <div className="text-center mt-4">
          <h3 className="font-medium text-2xl text-[#94A3B8]">Follow Us</h3>
          <ul className="mt-4 flex text-[#94A3B8] text-3xl space-x-4 text-center justify-center items-center">
            <li>
              <a href="#" className="hover:text-[#0ea5e9]">
                <i className="fab fa-facebook"><FaFacebook></FaFacebook></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0ea5e9]">
                <i className="fab fa-twitter"></i> <FaTwitter/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0ea5e9]">
                <i className="fab fa-instagram"></i> <FaInstagram/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0ea5e9]">
                <i className="fab fa-linkedin"></i> <FaLinkedin/>
              </a>
            </li>
          </ul>
        </div>
        </div>

       <div className="min-w-[600px]">
         {/* Footer Links Section */}
         <div className="flex justify-between  gap-10 md:gap-20">
          <div>
            <h3 className="font-medium text-lg">Quick Links</h3>
            <ul className="mt-4 text-sm space-y-2">
              <li><a href="#" className="hover:text-[#0ea5e9]">Home</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">About</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">Services</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg">Services</h3>
            <ul className="mt-4 text-sm space-y-2">
              <li><a href="#" className="hover:text-[#0ea5e9]">Web Design</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">Web Development</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">SEO</a></li>
              <li><a href="#" className="hover:text-[#0ea5e9]">Marketing</a></li>
            </ul>
          </div>
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
