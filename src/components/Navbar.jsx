import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";

export default function Navbar() {
  return (
    <nav
      className={`w-full py-4 
          sticky top-0 left-0 shadow-md bg-gray-800 text-white
        z-50 transition-all duration-300 sm:px-10 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-10 w-auto">
            <Link to="/" aria-label="Go to Batteryfy homepage">
              <img
                src={Logo}
                alt="Batteryfy Logo"
                className="max-h-14 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <a
              href="tel: 080 8575 8575"
              className="text-white hover:text-[#2e96ff] flex justify-center items-center gap-2"
              aria-label="Call us at 080 8575 8575"
            >
              <RiCustomerService2Fill
                className="text-green-500"
                size={24}
                aria-hidden="true"
              />
              <span>080 8575 8575</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
