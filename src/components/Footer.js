import React from "react";

const Footer = () => {
  return (
    <footer className="tv-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <h5 className="tv-footer-title">Partners</h5>
            <ul className="tv-footer-links">
              <li><a href="/">Technology Partners</a></li>
              <li><a href="/">Channel / SI Partnerships</a></li>
              <li><a href="/">Vendor Onboarding</a></li>
              <li><a href="/">Procurement Policy</a></li>
            </ul>
            <p className="tv-footer-note">
              Builds credibility, trust, and long-term scaling opportunities.
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="tv-footer-title">Careers</h5>
            <ul className="tv-footer-links">
              <li><a href="/">Life at ThetaVega</a></li>
              <li><a href="/">Open Positions</a></li>
              <li><a href="/">Why Join</a></li>
              <li><a href="/">Growth & Learning</a></li>
              <li><a href="/">Photos / Culture / Projects</a></li>
            </ul>
            <p className="tv-footer-note">
              More than hiring — show team culture, work, and growth.
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="tv-footer-title">Academy</h5>
            <ul className="tv-footer-links">
              <li><a href="/">Industrial Training Programs</a></li>
              <li><a href="/">PLC / SCADA / MES Courses</a></li>
              <li><a href="/">Industry Collaboration</a></li>
              <li><a href="/">Internship Programs</a></li>
              <li><a href="/">Lab Setup for Colleges</a></li>
            </ul>
            <p className="tv-footer-note">
              Creates talent pipeline, brand recall, and ecosystem expansion.
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="tv-footer-title">Company</h5>
            <ul className="tv-footer-links">
              <li><a href="/">Legal Information</a></li>
              <li><a href="/">Policies</a></li>
              <li><a href="/">Certifications</a></li>
              <li><a href="/">ESG / Sustainability</a></li>
              <li><a href="/">Investor Information</a></li>
            </ul>
            <p className="tv-footer-note">
              Your corporate layer for trust, governance, and professional presence.
            </p>
          </div>
        </div>

        <div className="tv-footer-bottom">
          © {new Date().getFullYear()} ThetaVega. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;