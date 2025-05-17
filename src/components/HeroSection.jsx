import { Link } from "react-router-dom";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";

const HeroSection = () => {
  const cardData = [
    {
      title: "BiCycles",
      description: "Convert manual bicycles to electric",
      imageUrl: image1,
      points: ["Batteryfy manual bicycles", "Charge bicycles"],
    },
    {
      title: "2 Wheelers",
      description: "Retrofit petrol two-wheelers to EV",
      imageUrl: image2,
      points: ["Batteryfy manual 2 Wheelers", "Charge 2 Wheelers"],
    },
    {
      title: "3-Wheelers",
      description: "Aftermarket EV retrofitting for cars",
      imageUrl: image3,
      points: ["Batteryfy manual 3 Wheelers", "Charge 3 Wheelers"],
    },
    {
      title: "4 Wheelers",
      description: "Convert trucks and heavy vehicles",
      imageUrl: image4,
      points: ["Batteryfy manual 4 Wheelers", "Charge 4 Wheelers"],
    },
    {
      title: "6 Wheelers",
      description: "Aftermarket EV retrofitting for cars",
      imageUrl: image5,
      points: ["Batteryfy manual 6 Wheelers", "Charge 6 Wheelers"],
    },
    {
      title: "Heavy Duty Vehicles",
      description: "Convert trucks and heavy vehicles",
      imageUrl: image6,
      points: [
        "Batteryfy manual Heavy Duty Vehicles",
        "Charge Heavy Duty Vehicles",
      ],
    },
  ];
  return (
    <section
      className="min-h-screen bg-gray-950 p-4 sm:p-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center" aria-labelledby="hero-headline">
          <h1
            id="hero-headline"
            className="text-3xl sm:text-4xl font-bold text-white capitalize pt-2"
          >
            <span>Batteryfy the planet, </span>
            <span className="text-white">save the climate.</span>
          </h1>
          <p className="capitalize text-2xl bg-gradient-to-r from-blue-400 to-lime-500 bg-clip-text text-transparent p-4">
            India's Largest Batteryfying network.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Vehicle conversion options"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-blue-400 max-w-md w-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="flex justify-center items-center">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-auto object-cover max-h-[200px] rounded-t-xl"
                  // loading="lazy"
                />
              </div>
              <div
                className="p-6 space-y-4"
                aria-labelledby={`card-title-${index}`}
              >
                <h3
                  id={`card-title-${index}`}
                  className="text-xl font-semibold text-white text-center capitalize"
                >
                  {card.title}
                </h3>
                {card.points.length > 0 && (
                  <ul className="list-disc space-y-2 flex justify-center items-center flex-col text-center">
                    {card.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-white font-light">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex justify-center gap-6 w-full">
                  <Link
                    to="/battery-conversion"
                    aria-label={`Learn more about battery conversion for ${card.title}`}
                  >
                    <button className="relative border-2 border-blue-500 hover:text-blue-400 text-white px-6 py-2 rounded-full font-semibold overflow-hidden text-sm">
                      <span className="absolute inset-0 m-[2px] rounded-full bg-transparent"></span>
                      <span className="relative z-10">Batteryfy</span>
                    </button>
                  </Link>
                  <Link
                    to="/ev-charging-stations"
                    aria-label={`Find charging stations for ${card.title}`}
                  >
                    <button className="relative border-2 border-[#26C72D] hover:text-green-400 text-white px-6 py-2 rounded-full font-semibold overflow-hidden text-sm">
                      <span className="absolute inset-0 m-[2px] rounded-full bg-transparent"></span>
                      <span className="relative z-10">Charge</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
