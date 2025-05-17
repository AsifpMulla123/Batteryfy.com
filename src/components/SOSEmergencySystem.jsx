import { useEffect, useState } from "react";
import {
  FaCheck,
  FaChevronDown,
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaShieldAlt,
  FaTimes,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function SOSEmergencySystem() {
  const [showForm, setShowForm] = useState(false);
  const [location, setLocation] = useState(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [sosSent, setSosSent] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location && !mapLoaded) {
      setMapLoaded(true);
    }
  }, [location]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleSendSOS = () => {
    if (location && name.trim() && mobile.trim() && serviceType) {
      setSosSent(true);
      setTimeout(() => {
        setSosSent(false);
        setShowForm(false);
        setName("");
        setMobile("");
        setServiceType("");
        setLocation(null);
        setMapLoaded(false);
      }, 5000);
    }
  };

  const serviceOptions = [
    { value: "charging", label: "On-site Charging" },
    { value: "towing", label: "Vehicle Towing" },
    { value: "accident", label: "Accident Assistance" },
    { value: "battery", label: "Battery Swapping" },
    { value: "other", label: "Other Emergency" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      {!showForm ? (
        <div className="relative">
          <button
            onClick={() => setShowForm(true)}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="relative rounded-full w-28 h-28 bg-gradient-to-br from-red-500 to-red-700 text-white font-bold flex flex-col items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-400 border-4 border-white"
            style={{ boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.5)" }}
          >
            <span className="text-xl mt-1 tracking-wider text-center font-bold">
              SOS
            </span>
            <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-30"></span>
            <span
              className="absolute -inset-2 rounded-full border-2 border-red-500 animate-ping opacity-40"
              style={{ animationDuration: "3s" }}
            ></span>
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center relative text-white">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 hover:text-red-200 focus:outline-none"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <div className="flex justify-center mb-4">
              <div className="bg-white p-3 rounded-full">
                <FaExclamationCircle className="text-red-600 w-10 h-10" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Request Roadside Assistance</h2>
            <p className="text-red-100 mt-2">
              Please share your location and details so we can send help right
              away.
            </p>
          </div>

          {/* Form */}
          <div className="px-6 py-6 bg-gradient-to-b from-white to-gray-50">
            <button
              onClick={getCurrentLocation}
              disabled={location}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 mb-5 shadow-md hover:shadow-lg disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FaMapMarkerAlt />
              <span>Get My Current Location</span>
            </button>

            {location && (
              <div className="bg-green-50 border border-green-200 text-green-800 py-3 px-4 rounded-lg mb-5 flex items-center">
                <div className="bg-green-500 p-1 rounded-full mr-3">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Location Acquired</p>
                  <p className="text-sm">
                    Lat: {location.latitude}, Lng: {location.longitude}
                  </p>
                </div>
              </div>
            )}

            {location && (
              <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-200 h-48 w-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white p-2 rounded-full inline-block shadow-md mb-2">
                      <FaMapMarkerAlt className="text-red-600 w-8 h-8" />
                    </div>
                    <p className="text-gray-800 font-medium">
                      Your Current Location
                    </p>
                    <p className="text-gray-600 text-sm">
                      Lat: {location.latitude}, Lng: {location.longitude}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Name Input */}
            <div className="space-y-4 md:space-y-5">
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                  <FaUser className="text-gray-500" />
                  <span>Your Name</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Jane Doe"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaUser />
                  </div>
                </div>
              </div>

              {/* Mobile Input */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                  <FaPhone className="text-gray-500" />
                  <span>Mobile Number</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="e.g., +91 12345 67890"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaPhone />
                  </div>
                </div>
              </div>

              {/* Service Type Dropdown */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                  <FaTools className="text-gray-500" />
                  <span>Type of Service Needed</span>
                </label>
                <div className="relative">
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 appearance-none focus:outline-none"
                  >
                    <option value="">Select service type</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaTools />
                  </div>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <FaChevronDown />
                  </div>
                </div>
              </div>
            </div>

            {/* SOS Button */}
            <div className="mt-6 md:mt-8">
              <button
                onClick={handleSendSOS}
                disabled={
                  !location || !name.trim() || !mobile.trim() || !serviceType
                }
                className={`w-full py-4 px-6 rounded-lg flex items-center justify-center gap-2 text-lg font-bold shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 ${
                  !location || !name.trim() || !mobile.trim() || !serviceType
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transform hover:scale-105 hover:shadow-lg"
                }`}
              >
                <FaShieldAlt />
                {sosSent ? "REQUEST SENT!" : "SEND SOS NOW"}
              </button>

              {!sosSent && (
                <p className="text-gray-600 text-center text-sm mt-4">
                  Help will be dispatched to your current geographical
                  coordinates.
                </p>
              )}

              {sosSent && (
                <div className="bg-green-50 border border-green-200 text-green-800 py-4 px-5 rounded-lg mt-5 text-center shadow-md">
                  <div className="flex justify-center mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <FaCheck className="text-green-600" />
                    </div>
                  </div>
                  <p className="font-bold text-lg">Emergency alert sent!</p>
                  <p>
                    Our service team has been notified and help is on the way.
                  </p>
                  <p className="text-sm mt-2 text-green-700">
                    You will receive a confirmation on your mobile shortly.
                  </p>
                </div>
              )}

              {error && (
                <p className="text-red-600 text-center mt-4">{error}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
