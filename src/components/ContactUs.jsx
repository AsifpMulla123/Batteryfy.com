import { useEffect } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaFacebook,
  FaGlobe,
  FaInfoCircle,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const companyName = "Batteryfy";
  const address =
    "D-Block, SHINDE COMPLEX, Neeligin Rd, New Cotton Market, Deshpande Nagar, Hubballi, Karnataka 580029";
  const email = "info@batteryfy.com";
  const phone = "+91 080 8575 8575";
  const workingHours = "Mon-Sat: 10:00 AM - 7:00 PM";
  const establishedYear = "2025";
  const website = "https://www.batteryfy.com";
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/batteryfy",
    facebook: "https://www.facebook.com/batteryfy",
    twitter: "https://twitter.com/batteryfy",
  };

  const userTerms = [
    "Electric Vehicle Retrofitting",
    "EV Charging Solutions",
    "Battery-Powered Products",
    "Sustainable Mobility",
    "Eco-Friendly Solutions",
    "Green Energy",
    "Renewable Resources",
    "EV Infrastructure",
    "Clean Transportation",
    "Indian Automotive Market",
  ];

  return (
    <div className="bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl">
      <section
        className="py-8 md:py-24 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-us-heading"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2
              id="contact-us-heading"
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              Contact Us
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get in touch with {companyName} to learn more about our innovative
              solutions for the electric vehicle ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
            {/* Contact Information Card */}
            <div
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
              aria-labelledby="contact-info-heading"
            >
              <h3
                id="contact-info-heading"
                className="text-2xl font-semibold text-green-300 mb-4 flex items-center"
              >
                <FaInfoCircle className="mr-2 w-6 h-6" aria-hidden="true" />{" "}
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-200">
                  <FiMapPin className=" mt-1" size={35} aria-hidden="true" />{" "}
                  <div>
                    <p className="font-medium">Address:</p>
                    <p>{address}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <IoIosMail className="w-5 h-5" aria-hidden="true" />{" "}
                  <div>
                    <p className="font-medium">Email:</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <FaPhoneAlt className="w-5 h-5" aria-hidden="true" />{" "}
                  <div>
                    <p className="font-medium">Phone:</p>
                    <a
                      href={`tel:${phone}`}
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <FaClock className="w-5 h-5" aria-hidden="true" />{" "}
                  <div>
                    <p className="font-medium">Working Hours:</p>
                    <p>{workingHours}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <FaGlobe className="w-5 h-5" aria-hidden="true" />{" "}
                  <div>
                    <p className="font-medium">Website:</p>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      {website}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-gray-200">
                  Connect with us on social media:
                </p>
                <div className="flex gap-4 mt-2">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" aria-hidden="true" />{" "}
                  </a>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-600 transition-colors"
                    aria-label="Connect with us on Facebook"
                  >
                    <FaFacebook className="w-6 h-6" aria-hidden="true" />{" "}
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="Follow us on Twitter"
                  >
                    <FaXTwitter className="w-6 h-6" aria-hidden="true" />{" "}
                  </a>
                </div>
              </div>
            </div>

            {/* Company Highlights Card */}
            <div
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 col-span-1 md:col-span-2 lg:col-span-1"
              aria-labelledby="company-highlights-heading"
            >
              <h3
                id="company-highlights-heading"
                className="text-2xl font-semibold text-green-300 mb-4 flex items-center"
              >
                <FaCheckCircle className="mr-2 w-6 h-6" aria-hidden="true" />{" "}
                Company Highlights
              </h3>
              <ul className="space-y-2 text-gray-200 list-disc list-inside">
                <li>
                  {companyName} is a visionary brand leading the EV ecosystem in
                  India.
                </li>
                <li>
                  Established in {establishedYear}, focusing on sustainable
                  mobility solutions.
                </li>
                <li>
                  Three primary verticals:
                  <ul className="list-disc list-inside ml-5">
                    <li>Retrofitting old vehicles into EVs</li>
                    <li>EV Charging Stations with online booking</li>
                    <li>Battery-Operated Product Store</li>
                  </ul>
                </li>
                <li>
                  Committed to providing eco-friendly and green energy
                  solutions.
                </li>
                <li>
                  Aiming to revolutionize the Indian automotive market with EV
                  technology.
                </li>
              </ul>
            </div>
            <div
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 col-span-1 md:col-span-2 lg:col-span-1"
              aria-labelledby="inquiry-form-heading"
            >
              <h3
                id="inquiry-form-heading"
                className="text-2xl font-semibold text-green-300 mb-4"
              >
                We'd Love to Hear From You!
              </h3>
              <p className="text-gray-200 mb-6">
                Please fill out the form below or reach out to us via the
                contact information provided.
              </p>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="mt-1 p-2 w-full rounded-md bg-black/20 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    aria-label="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="mt-1 p-2 w-full rounded-md bg-black/20 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    aria-label="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className="mt-1 p-2 w-full rounded-md bg-black/20 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[100px]"
                    aria-label="Your Message"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-green-500/90 hover:bg-green-500 text-white py-3 rounded-md transition-colors"
                  onClick={() =>
                    alert("Thank you for your message! (This is a demo)")
                  }
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* User Terms Section */}
          <div
            className="mt-16 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
            aria-labelledby="user-terms-heading"
          >
            <h3
              id="user-terms-heading"
              className="text-2xl font-semibold text-green-300 mb-6"
            >
              Key Focus Areas for Users (India)
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-200">
              {userTerms.map((term, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle
                    className="w-4 h-4 text-green-400"
                    aria-hidden="true"
                  />
                  {term}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-300">
              {companyName} is dedicated to serving the Indian market by
              providing advanced and sustainable EV solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
