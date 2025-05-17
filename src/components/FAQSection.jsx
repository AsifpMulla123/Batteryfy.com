import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const faqs = [
  {
    question: "What is Batteryfy and what does it do?",
    answer:
      "Batteryfy is an electric vehicle ecosystem brand offering services across three verticals: EV retrofitting, charging station booking, and sustainable battery-powered product sales.",
  },
  {
    question:
      "What types of vehicles can be retrofitted to electric using Batteryfy?",
    answer:
      "We retrofit a wide range of vehicles, including petrol and diesel cars, trucks, bikes, autos, and even construction and heavy-duty vehicles.",
  },
  {
    question: "How can I book a charging slot for my electric vehicle?",
    answer:
      "You can easily book EV charging slots using our online platform, available on the Batteryfy website and app. Just select a nearby station, time slot, and confirm your booking.",
  },
  {
    question: "Where are Batteryfy charging stations available?",
    answer:
      "Our EV charging stations are spread across multiple cities and are expanding rapidly. You can check availability on our platform.",
  },
  {
    question: "What kinds of products are available in the Batteryfy store?",
    answer:
      "We sell a curated selection of battery-powered lifestyle products such as e-scooters, power banks, solar lights, and other sustainable gadgets.",
  },
  {
    question: "Is retrofitting affordable and safe?",
    answer:
      "Yes, Batteryfy ensures that all retrofitted vehicles meet safety and environmental standards. We also offer flexible pricing options.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section
      className="min-h-screen bg-gray-950 text-white py-12 px-6 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="faq-section-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-section-title"
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-400"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-green-500/30 transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-white"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-green-400" aria-hidden="true" />
                ) : (
                  <FaChevronDown
                    className="text-green-400"
                    aria-hidden="true"
                  />
                )}
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="mt-4 text-gray-300 leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
