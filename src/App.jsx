import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const Retrify = lazy(() => import("./components/Retrify"));
const BookStations = lazy(() => import("./components/BookStations"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const SOSEmergencySystem = lazy(() =>
  import("./components/SOSEmergencySystem")
);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/battery-conversion" element={<Retrify />} />
          <Route path="/ev-charging-stations" element={<BookStations />} />
          <Route path="/faqs" element={<FAQSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sos-emergency" element={<SOSEmergencySystem />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
