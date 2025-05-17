import { FaArrowRight, FaCheck, FaStore } from "react-icons/fa";
import { MdEvStation } from "react-icons/md";
import { TbBatteryAutomotiveFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import BatteryProduct from "../assets/BatteryProducts.webp";
import Retrofit from "../assets/Retrofit.webp";
import ChargingStation from "../assets/chargingStation.webp";

const Batteryfy = () => {
  return (
    <div
      className="bg-gray-950 text-white px-8 pb-8 min-h-screen flex flex-col items-center pt-6 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="batteryfy-section-title"
    >
      <div className="max-w-5xl w-full text-center pb-16">
        <h1
          id="batteryfy-section-title"
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          What is Batteryfy?
        </h1>
        <p className="text-lg text-center">
          Our revolutionary platform offers three integrated solutions to power
          the future of sustainable mobility.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full">
        {/* Retrofit Vehicles */}
        <div className="bg-white bg-opacity-5 rounded-lg p-6 flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-4">
            <div className="bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center">
              <TbBatteryAutomotiveFilled
                className="text-blue-500 text-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Retrofit Vehicles</h2>
          <div className="rounded-lg overflow-hidden">
            <img
              src={Retrofit}
              alt="Retrofit Vehicle"
              className="w-full h-3/4 object-cover rounded"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6 -mt-10">
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>Any vehicle: Bike to Trucks</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>Cost-effective & certified</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>Eco-smart savings</span>
            </div>
          </div>
          <div className="mt-auto">
            <Link
              to="/battery-conversion"
              className="text-blue-400 flex items-center gap-1 hover:underline"
            >
              Learn more <FaArrowRight className="text-sm" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* EV Charging Stations */}
        <div className="bg-white bg-opacity-5 rounded-lg p-6 flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-4">
            <div className="bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center">
              <MdEvStation
                className="text-green-500 text-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">EV Charging Stations</h2>
          <div className="rounded-lg overflow-hidden">
            <img
              src={ChargingStation}
              alt="EV Charging Station"
              className="w-full h-3/4 object-cover rounded"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6 -mt-10">
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>Real-time booking</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>Fast-charging</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>24/7 access</span>
            </div>
          </div>
          <div className="mt-auto">
            <Link
              to="/ev-charging-stations"
              className="text-blue-400 flex items-center gap-1 hover:underline"
            >
              Learn more <FaArrowRight className="text-sm" aria-hidden="true" />{" "}
            </Link>
          </div>
        </div>

        {/* Battery Product Store */}
        <div className="bg-white bg-opacity-5 rounded-lg p-6 flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-4">
            <div className="bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center">
              <FaStore
                className="text-purple-500 text-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Battery Product Store</h2>
          <div className="rounded-lg overflow-hidden">
            <img
              src={BatteryProduct}
              alt="Battery Products"
              className="w-full h-3/4 object-cover rounded"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6  -mt-10">
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>Verified eco-gadgets</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>Warranty included</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-teal-400 text-sm" aria-hidden="true" />
              <span>Portable & powerful</span>
            </div>
          </div>
          <div className="mt-auto">
            <a
              href="#products"
              className="text-blue-400 flex items-center gap-1 hover:underline"
            >
              Learn more <FaArrowRight className="text-sm" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batteryfy;
