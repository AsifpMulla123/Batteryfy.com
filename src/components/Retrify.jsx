import { useEffect, useState } from "react";
import { AiFillTool } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { IoSearch, IoSpeedometerSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Retrify = () => {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    pincode: "",
    vehicleType: "",
    makeModel: "",
    fuelType: "Petrol",
    notes: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="pt-10 text-white p-4 bg-gray-950 sm:p-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="retrofitting-section-title"
    >
      <div>
        <div
          className="mb-12 flex justify-center items-center flex-col"
          aria-labelledby="retrofitting-intro"
        >
          <div className="text-blue-400 text-sm font-semibold uppercase mb-4">
            <span className="bg-gray-900 px-4 py-2 rounded-full">
              RETROFICATION
            </span>
          </div>
          <h2
            id="retrofitting-section-title"
            className="text-2xl sm:text-4xl font-bold mb-3 text-center"
          >
            Don't Buy New. <span className="text-green-400">Reinvent</span> What
            You Have.
          </h2>
          <p className="text-gray-400 max-w-3xl text-center  text-base font-semibold sm:text-lg">
            Convert your bicycle,two-wheeler,car, or even heavy vehicles into a
            certified electric drive,cost-efficient,low-maintainance,and built
            for a cleaner tomorrow.
          </p>
        </div>
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-950 p-4 sm:p-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 rounded-md">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 space-y-6"
            aria-labelledby="retrofitting-registration-title"
          >
            <div className="text-center">
              <h1
                id="retrofitting-registration-title"
                className="text-3xl font-bold text-white"
              >
                Retrofitting Registration
              </h1>
              <p className="text-sm text-gray-300 mt-1">
                Let’s Electrify Your Ride ⚡
              </p>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              aria-label="Personal information"
            >
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-white mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="input"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="mobile" className="text-white mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  pattern="[0-9]{10}"
                  required
                  className="input"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
                className="input"
              />
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              aria-label="Location information"
            >
              <div className="flex flex-col">
                <label htmlFor="city" className="text-white mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Pune"
                  required
                  className="input"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pincode" className="text-white mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                  pattern="[0-9]{6}"
                  required
                  className="input"
                />
              </div>
            </div>
            <div aria-label="Vehicle information">
              <h3 className="text-lg font-semibold text-white mb-2">
                Vehicle Information
              </h3>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="vehicleType" className="text-white mb-1">
                    Vehicle Type
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={form.vehicleType}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="" className="text-black">
                      Select Vehicle Type
                    </option>
                    <option value="Bike" className="text-black">
                      Bike
                    </option>
                    <option value="Auto" className="text-black">
                      Auto
                    </option>
                    <option value="Car" className="text-black">
                      Car
                    </option>
                    <option value="Truck" className="text-black">
                      Truck
                    </option>
                    <option value="Other" className="text-black">
                      Other
                    </option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="makeModel" className="text-white mb-1">
                    Make & Model
                  </label>
                  <input
                    type="text"
                    id="makeModel"
                    name="makeModel"
                    placeholder="e.g. Hero Splendor 2015"
                    value={form.makeModel}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="fuelType" className="text-white mb-1">
                    Fuel Type
                  </label>
                  <select
                    id="fuelType"
                    name="fuelType"
                    value={form.fuelType}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="" className="text-black">
                      Select Fuel Type
                    </option>
                    <option value="Petrol" className="text-black">
                      Petrol
                    </option>
                    <option value="Diesel" className="text-black">
                      Diesel
                    </option>
                    <option value="LPG" className="text-black">
                      LPG
                    </option>
                    <option value="CNG" className="text-black">
                      CNG
                    </option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="notes" className="text-white mb-1">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Any custom request or vehicle condition..."
                    value={form.notes}
                    onChange={handleChange}
                    className="input h-24 resize-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 accent-[#26C72D]"
                required
              />
              <label htmlFor="agree" className="text-sm text-gray-300">
                I agree to the Terms & Conditions and Privacy Policy.
              </label>
            </div>
            <button
              type="submit"
              disabled={!form.agree}
              className="w-full mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50"
            >
              Request My Conversion
            </button>
          </form>
        </div>

        <div
          className="mb-16 max-w-6xl mx-auto text-white pt-14 px-6"
          aria-labelledby="retrofitting-process-title"
        >
          <h3
            id="retrofitting-process-title"
            className="text-center text-3xl font-bold mb-8"
          >
            Our Retrofitting Process
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            aria-label="Retrofitting process steps"
          >
            <div
              className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
              aria-labelledby="process-step-1-title"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h4 id="process-step-1-title" className="text-2xl font-bold mb-2">
                Assessment
              </h4>
              <p className="text-gray-400 text-base mb-4 flex-grow">
                Our experts evaluate your vehicle's specifications to suggest
                the ideal electric conversion package.
              </p>
              <div className="mt-auto">
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
                  aria-label="Learn more about the assessment process"
                >
                  <IoSearch size={20} aria-hidden="true" />{" "}
                </button>
              </div>
            </div>
            {/* Process Step 2 */}
            <div
              className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
              aria-labelledby="process-step-2-title"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h4 id="process-step-2-title" className="text-2xl font-bold mb-2">
                Conversion
              </h4>
              <p className="text-gray-400 text-base mb-4 flex-grow">
                We remove the combustion engine and install a high-performance
                electric motor and battery system.
              </p>
              <div className="mt-auto">
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
                  aria-label="Learn more about the conversion process"
                >
                  <AiFillTool size={20} aria-hidden="true" />{" "}
                </button>
              </div>
            </div>
            {/* Process Step 3 */}
            <div
              className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
              aria-labelledby="process-step-3-title"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h4 id="process-step-3-title" className="text-2xl font-bold mb-2">
                Testing
              </h4>
              <p className="text-gray-400 text-base mb-4 flex-grow">
                Rigorous quality checks and road tests ensure optimal
                performance and safety.
              </p>
              <div className="mt-auto">
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
                  aria-label="Learn more about the testing process"
                >
                  <IoSpeedometerSharp size={20} aria-hidden="true" />{" "}
                </button>
              </div>
            </div>
            {/* Process Step 4 */}
            <div
              className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
              aria-labelledby="process-step-4-title"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h4 id="process-step-4-title" className="text-2xl font-bold mb-2">
                Delivery
              </h4>
              <p className="text-gray-400 text-base mb-4 flex-grow">
                Get your upgraded vehicle, complete with documentation and
                warranty certification.
              </p>
              <div className="mt-auto">
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
                  aria-label="Learn more about the delivery process"
                >
                  <FaTruckFast size={20} aria-hidden="true" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retrify;
