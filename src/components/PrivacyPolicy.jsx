import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PrivacyPolicy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="min-h-screen bg-gray-950 text-white px-6 py-12 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="privacy-policy-title"
    >
      <div className="max-w-5xl mx-auto">
        <h1
          id="privacy-policy-title"
          className="text-4xl font-bold text-[#26C72D] mb-6"
        >
          Privacy Policy
        </h1>
        <p className="mb-4 text-gray-300">
          At{" "}
          <span className="text-white font-semibold">
            Batteryfy<span>&trade;</span>
          </span>
          , we are committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and safeguard your information when you
          use our website and services.
        </p>

        <h2
          className="text-2xl font-semibold text-[#26C72D] mt-8 mb-2"
          id="section-1"
        >
          1. Information We Collect
        </h2>
        <p className="text-gray-300 mb-4">
          We collect personal details such as name, phone number, email, vehicle
          type and preferences when you use our booking forms, shop, or register
          for services.
        </p>

        <h2
          className="text-2xl font-semibold text-[#26C72D] mt-8 mb-2"
          id="section-2"
        >
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-300 mb-4">
          <li>To process bookings for EV conversions and charging slots</li>
          <li>To fulfill orders from our battery product store</li>
          <li>To provide customer support and service updates</li>
          <li>To improve our services based on user feedback and analytics</li>
        </ul>

        <h2
          className="text-2xl font-semibold text-[#26C72D] mt-8 mb-2"
          id="section-3"
        >
          3. Data Sharing
        </h2>
        <p className="text-gray-300 mb-4">
          We do not share your data with third parties except for trusted
          partners essential to delivering our services (e.g., payment gateways,
          delivery partners). We never sell your personal data.
        </p>

        <h2
          className="text-2xl font-semibold text-[#26C72D] mt-8 mb-2"
          id="section-4"
        >
          4. Security
        </h2>
        <p className="text-gray-300 mb-4">
          Batteryfy implements robust security measures to protect your data,
          including encrypted storage, secure access controls, and regular
          system audits.
        </p>

        <h2
          className="text-2xl font-semibold text-[#26C72D] mt-8 mb-2"
          id="section-5"
        >
          5. Cookies
        </h2>
        <p className="text-gray-300 mb-4">
          We use cookies to enhance your experience, analyze site traffic, and
          personalize content. You can manage cookie preferences through your
          browser settings.
        </p>

        <h2
          className="text-2xl font-semibold text-[#26C72D] mt-8 mb-2"
          id="section-6"
        >
          6. Your Rights
        </h2>
        <p className="text-gray-300 mb-4">
          You have the right to access, update, or delete your personal data.
          Contact us at <span className="underline">support@batteryfy.com</span>
          to make a request.
        </p>

        <h2
          className="text-2xl font-semibold text-[#26C72D] mt-8 mb-2"
          id="section-7"
        >
          7. Updates to This Policy
        </h2>
        <p className="text-gray-300 mb-4">
          We may update our Privacy Policy periodically. We will notify you of
          changes via our website or email.
        </p>

        <p className="text-gray-400 mt-10">Last updated: May 2025</p>
      </div>
    </div>
  );
}
