import { useEffect } from "react";
import { FaBolt, FaChargingStation, FaRecycle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

const AboutUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section
      className="bg-gray-950 text-white px-6 py-16 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="about-us-title"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 id="about-us-title" className="text-4xl font-bold mb-2">
            About
            <span className="-ml-2">
              <img
                src={Logo}
                alt="Batteryfy Logo"
                className="inline w-auto h-16"
              />
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Powering a Greener Tomorrow – One Vehicle at a Time
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-gray-300">
              Batteryfy is a visionary brand revolutionizing India’s electric
              vehicle ecosystem. Our mission is to electrify transportation,
              reduce emissions, and make sustainable technology accessible for
              all.
            </p>
            <p className="text-gray-300">
              With innovation at our core, we transform conventional vehicles,
              provide seamless charging solutions, and empower communities with
              battery-powered lifestyle products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-md hover:scale-105 transition-all">
              <FaRecycle
                className="text-[#26C72D] text-3xl mb-3"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-white mb-1">
                EV Retrofitting
              </h3>
              <p className="text-sm text-gray-300">
                We convert petrol/diesel vehicles (cars, bikes, trucks, autos &
                more) to electric.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-md hover:scale-105 transition-all">
              <FaChargingStation
                className="text-[#26C72D] text-3xl mb-3"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-white mb-1">
                Charging Stations
              </h3>
              <p className="text-sm text-gray-300">
                Book EV charging slots across cities with our smart station
                platform.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-md hover:scale-105 transition-all col-span-2 sm:col-span-1">
              <FaBolt
                className="text-[#26C72D] text-3xl mb-3"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-white mb-1">
                Battery Products
              </h3>
              <p className="text-sm text-gray-300">
                Shop eco-friendly, battery-operated lifestyle and utility
                products.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-semibold mb-2 text-[#26C72D]">
            Our Vision
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We envision a cleaner, greener India by electrifying the nation’s
            transport system, offering futuristic energy solutions, and
            encouraging sustainable lifestyles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
