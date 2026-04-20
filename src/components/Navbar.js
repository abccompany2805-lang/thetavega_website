import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; // update path if needed

const Navbar = () => {
  const styles = {
  navbar: {
  position: "sticky",
  top: 0,
  zIndex: 1030,
  backgroundColor: "#ffffff",
  backgroundImage: `
    linear-gradient(
      to top,
      rgba(7, 17, 29, 0.07) 0%,
      rgba(174, 44, 17, 0.045) 18%,
      rgba(219, 153, 65, 0.035) 32%,
      rgba(255, 255, 255, 0) 70%
    )
  `,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 16px",
  backgroundPosition: "bottom left",
  boxShadow: "0 1px 0 rgba(7, 17, 29, 0.03)",
},
    brandWrap: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
    },
    logo: {
      height: "38px",
      width: "38px",
      objectFit: "contain",
      display: "block",
    },
    brandText: {
      fontWeight: 800,
      letterSpacing: "0.5px",
      color: "#07111D",
      margin: 0,
      lineHeight: 1,
      fontSize: "1.35rem",
    },
    brandAccent: {
      color: "#AE2C11",
    },
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top tv-navbar py-3"
      style={styles.navbar}
    >
      <div className="container">
        <Link to="/" style={styles.brandWrap}>
          <img src={logo} alt="ThetaVega Logo" style={styles.logo} />
          <div style={styles.brandText}>
            THETA<span style={styles.brandAccent}>VEGA</span>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link tv-nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link tv-nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/solutions" className="nav-link tv-nav-link">
                Solutions
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/product" className="nav-link tv-nav-link">
                Product
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/industries" className="nav-link tv-nav-link">
                Industries
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/insights" className="nav-link tv-nav-link">
                Insights
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link tv-nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;