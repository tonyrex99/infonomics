import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import SaaSProductLandingPage from "pages/SaaSProductLandingPage.js";

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";
//import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "pages/AboutUs";
import { Home } from "pages/SaaSProductLandingPage.js";
import BlogIndex from "pages/BlogIndex";
import ContactUs from "pages/ContactUs";
import Career from "pages/Career";
import Service from "pages/Service";
import Team from "pages/Team";
import PrivacyPolicy from "pages/PrivacyPolicy";
import TermsOfService from "pages/TermsOfService";
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/components/:type/:subtype/:name"
            element={<ComponentRenderer />}
          />
          <Route
            path="/components/:type/:name"
            element={<ComponentRenderer />}
          />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/current" element={<SaaSProductLandingPage />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="blog" element={<BlogIndex />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="career" element={<Career />} />
            <Route path="service" element={<Service />} />
            <Route path="team" element={<Team />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
