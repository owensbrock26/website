// TrimFit.js
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../App.css";
import Home from "./Home"; // import Home component
import Privacy from "./Privacy";
import Terms from "./Terms";
import Contact from "./Contact";
import "./TrimFit.css";

function TrimFit() {
  return (
    <div className="TrimFit">
      <nav className="sub-navbar">
        <NavLink to="/trimfit/Home" end activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/trimfit/privacy" activeClassName="active-link">
          Privacy Policy
        </NavLink>
        <NavLink to="/trimfit/terms" activeClassName="active-link">
          Terms of Service
        </NavLink>
        <NavLink to="/trimfit/contact" activeClassName="active-link">
          Contact
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use the Home component */}
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default TrimFit;
