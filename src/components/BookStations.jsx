import { useEffect, useState } from "react";
import { BsLightning } from "react-icons/bs";
import { FaMapMarkedAlt, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { IoOptionsOutline, IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import mapImages from "../assets/mapImages.webp";

const BookStations = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [LocationOptions] = useState([
    { value: "option1", label: "Hubli" },
    { value: "option2", label: "Dharwad" },
    { value: "option3", label: "Bangalore" },
    { value: "option4", label: "Mumbai" },
    { value: "option5", label: "Hydrabad" },
    { value: "option6", label: "Pune" },
  ]);

  const [timeOptions] = useState([
    { value: "10:00 AM - 11:00 AM", label: "10:00 AM - 11:00 AM" },
    { value: "11:00 AM - 12:00 AM", label: "11:00 AM - 12:00 AM" },
    { value: "12:00 AM - 01:00 AM", label: "12:00 AM - 01:00 AM" },
    { value: "01:00 AM - 02:00 AM", label: "01:00 AM - 02:00 AM" },
    { value: "02:00 AM - 03:00 AM", label: "02:00 AM - 03:00 AM" },
    { value: "03:00 AM - 04:00 AM", label: "03:00 AM - 04:00 AM" },
  ]);

  const handleSelectLocation = (e) => {
    setSelectedLocation(e.target.value);
  };
  const handleSelectTime = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div
      className="text-white pt-20 bg-gray-950 p-4 sm:p-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="book-stations-title"
    >
      <div>
        <div className="mb-12 flex justify-center items-center flex-col">
          <div className="text-green-400 text-sm font-semibold uppercase mb-4">
            <span className="bg-gray-800 px-4 py-2 rounded-full">
              EV CHARGING
            </span>
          </div>
          <h2
            id="book-stations-title"
            className="text-2xl sm:text-4xl font-bold mb-3 text-center"
          >
            Smart EV Charging,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-lime-500 bg-clip-text text-transparent">
              Anywhere.
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-center text-base font-semibold sm:text-base">
            Book charging slots in advance, check real-time availability, and
            power up your EV with our network of smart charging stations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Map Section */}
        <div
          className="bg-gray-900 rounded-lg overflow-hidden bg-cover flex flex-col justify-between h-80 sm:h-full"
          style={{ backgroundImage: `url(${mapImages})` }}
          aria-label="Charging Station Map"
        >
          <div className="p-4 flex justify-between items-center">
            <h3 className="font-medium text-2xl">Charging Station Map</h3>
            <div className="flex space-x-2">
              <button
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-xl"
                aria-label="View on map"
              >
                <FaMapMarkerAlt aria-hidden="true" />
              </button>
              <button
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-2xl"
                aria-label="Options"
              >
                <IoOptionsOutline aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="p-3 flex items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg border border-gray-800 border-opacity-50 shadow-lg z-20">
            <div className="flex-1">
              <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Search Location"
                  className="bg-transparent border-none outline-none text-white text-lg w-full"
                  aria-label="Search charging station location"
                />
              </div>
            </div>
            <button
              className="ml-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-xl"
              aria-label="Search"
            >
              <IoSearch aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Booking Section */}
        <div
          className="bg-gray-800 rounded-lg p-6"
          aria-labelledby="booking-form-title"
        >
          <h3 id="booking-form-title" className="font-medium mb-6">
            Book Your Charging Slot
          </h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="location"
                className="block text-sm text-white mb-1"
              >
                Select Location
              </label>
              <select
                value={selectedLocation}
                id="location"
                onChange={handleSelectLocation}
                className="block w-full py-2 px-4 text-sm text-white border border-gray-300 rounded-lg focus:border-blue-500 bg-gray-700"
                aria-label="Select charging location"
              >
                <option value="" className="text-white" disabled hidden>
                  Select an Option
                </option>
                {LocationOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="vehicle"
                className="block text-sm text-white mb-1"
              >
                Enter Vehicle
              </label>
              <div className="bg-gray-700 px-4 py-3 rounded-lg">
                <input
                  type="text"
                  id="vehicle"
                  placeholder="AB-123-XYZ"
                  className="bg-transparent w-full outline-none text-white"
                  aria-label="Enter your vehicle number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm text-white mb-1">
                Select Time Slot
              </label>
              <select
                value={selectedTime}
                onChange={handleSelectTime}
                id="time"
                className="block w-full py-2 px-4 text-sm text-white border border-gray-300 rounded-lg focus:border-blue-500 bg-gray-700"
                aria-label="Select charging time slot"
              >
                <option value="" disabled hidden>
                  Select an option
                </option>
                {timeOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg mt-4">
              Book Charging Slot
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        aria-label="Charging Station Features"
      >
        <div className="bg-gray-800 rounded-lg p-6 flex justify-center items-center flex-col">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-700 text-blue-400 mb-2">
            <BsLightning
              className="text-green-400 text-3xl"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">Fast Charging</h3>
          <p className="text-gray-400 text-center text-base">
            Get up to 80% charge in just 30 minutes with our fast charging
            stations.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 flex justify-center items-center flex-col">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-700 text-blue-400 mb-2">
            <FaMapMarkedAlt
              className="text-green-400 text-3xl"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">
            Various Locations
          </h3>
          <p className="text-gray-400 text-center text-base">
            Growing network of charging stations across major cities and
            highways.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 flex justify-center items-center flex-col">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-700 text-blue-400 mb-2">
            <FaMobileAlt
              className="text-green-400 text-3xl"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">Smart Booking</h3>
          <p className="text-gray-400 text-center text-base">
            Reserve your slot, get notifications, and manage payments from your
            phone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookStations;
