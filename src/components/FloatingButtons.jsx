import { BsWhatsapp } from "react-icons/bs";
import { TbSos } from "react-icons/tb";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  const phoneNumber = +918085758575;
  return (
    <>
      {/* Left Floating SOS Icon */}
      <div className="fixed left-6 bottom-8 z-50 flex flex-col items-center space-y-2">
        <Link to="/sos-emergency" aria-label="Go to SOS Emergency page">
          <button
            className="relative rounded-full p-2 bg-gradient-to-br from-red-500 to-red-700 text-white font-bold flex flex-col items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-400 "
            style={{ boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.5)" }}
          >
            <TbSos size={40} className="font-medium" aria-hidden="true" />{" "}
            <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-30"></span>
            <span
              className="absolute -inset-2 rounded-full border-2 border-red-500 animate-ping opacity-40"
              style={{ animationDuration: "3s" }}
            ></span>
            <span className="sr-only">SOS Emergency</span>{" "}
          </button>
        </Link>
      </div>

      {/* Right Floating WhatsApp Icon */}
      <div className="fixed right-4 bottom-8 z-50">
        <button
          className="bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition p-4"
          aria-label="Contact us on WhatsApp"
        >
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp size={24} aria-hidden="true" />
            <span className="sr-only">Contact us on WhatsApp</span>{" "}
          </a>
        </button>
      </div>
    </>
  );
};

export default FloatingButtons;
