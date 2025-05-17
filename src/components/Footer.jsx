import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";

const Footer = () => {
  return (
    <footer
      className="bg-gray-950 text-gray-300 py-16 px-4 md:px-16 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo and description */}
          <div className="col-span-1" aria-labelledby="company-info">
            <div className="flex items-center mb-4">
              <Link to="/" aria-label="Go to Batteryfy homepage">
                <img
                  src={Logo}
                  alt="Batteryfy Logo"
                  className="w-auto h-14 -ml-3"
                />
              </Link>
            </div>
            <p id="company-info" className="text-sm leading-relaxed">
              Transforming the future of mobility through innovative electric
              solutions. Convert, charge, and power your way to a sustainable
              tomorrow.
            </p>
            {/* Social icons */}
            <div
              className="flex mt-6 space-x-3"
              aria-label="Social media links"
            >
              <p
                // href="https://www.facebook.com/batteryfy"
                // target="_blank"
                // rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full transition-colors hover:bg-blue-800"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-white"
                  aria-hidden="true"
                />
              </p>
              <p
                // href="https://twitter.com/batteryfy"
                // target="_blank"
                // rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-black transition-colors"
                aria-label="Follow us on Twitter"
              >
                <FaXTwitter
                  className="text-gray-400 hover:text-white"
                  aria-hidden="true"
                />
              </p>
              <p
                // href="https://www.instagram.com/batteryfy"
                // target="_blank"
                // rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-br  from-blue-500 via-pink-500  to-yellow-500 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram
                  className="text-gray-400 hover:text-white"
                  aria-hidden="true"
                />
              </p>
              <p
                // href="https://www.linkedin.com/company/batteryfy"
                // target="_blank"
                // rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full transition-colors hover:bg-blue-700"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedinIn
                  className="text-gray-400 hover:text-white"
                  aria-hidden="true"
                />
              </p>
              <p
                // href="https://www.youtube.com/@batteryfy"
                // target="_blank"
                // rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-700 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <FaYoutube
                  className="text-gray-400 hover:text-white"
                  aria-hidden="true"
                />
              </p>
            </div>
          </div>

          {/* Services column */}
          <div className="col-span-1" aria-labelledby="services-links">
            <h3
              id="services-links"
              className="text-white font-semibold text-lg mb-4"
            >
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/battery-conversion"
                  className="hover:text-blue-400 transition-colors"
                >
                  Retrofication
                </Link>
              </li>
              <li>
                <Link
                  to="/ev-charging-stations"
                  className="hover:text-blue-400 transition-colors"
                >
                  EV Charging
                </Link>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors">
                  Eco-Tech Products
                </span>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="col-span-1" aria-labelledby="company-links">
            <h3
              id="company-links"
              className="text-white font-semibold text-lg mb-4"
            >
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors">
                  Blog
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition-colors">
                  Careers
                </span>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div className="col-span-1" aria-labelledby="support-links">
            <h3
              id="support-links"
              className="text-white font-semibold text-lg mb-4"
            >
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 Batteryfy<span>&trade;</span>. All rights reserved.
          </div>

          <div
            className="flex space-x-5 text-sm text-gray-500"
            aria-label="Legal links"
          >
            <Link
              to="/terms-and-conditions"
              className="hover:text-gray-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy
            </Link>
            <span className="hover:text-gray-400 transition-colors">
              Cookies
            </span>
            <span className="hover:text-gray-400 transition-colors">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
