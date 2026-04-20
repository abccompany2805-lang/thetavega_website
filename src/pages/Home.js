import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/Capture.PNG";
import {
  FaProjectDiagram,
  FaMicrochip,
  FaIndustry,
  FaCogs,
  FaCube,
} from "react-icons/fa";

import {
  FaCarSide,
  FaBlender,
  FaUtensils,
  FaFlask,
} from "react-icons/fa";

import factoryAutomationIcon from "../assets/images/Factory Automation.png";
import machineBuildingIcon from "../assets/images/Machine Building.png";
import mesIcon from "../assets/images/MES amp; Digital Manufacturing.png";
import traceabilityIcon from "../assets/images/Traceability amp; Quality Systems.png";
import iotIcon from "../assets/images/Industrial IoT amp; Data Integration.png";
import panelControlIcon from "../assets/images/Panel amp; Control Systems.png";

const Home = () => {
  const styles = {
    page: {
      backgroundColor: "#ffffff",
      fontFamily: "Montserrat, sans-serif",
      overflowX: "hidden",
    },

    heroSection: {
      position: "relative",
      minHeight: "620px",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "#f8f9fa",
    },

heroBg: {
  position: "absolute",
  top: "0px",
  bottom: "20px",
  left: "150px",
  right: "30px",
  width: "calc(100% - 60px)",
  height: "calc(100% - 40px)",
  objectFit: "contain",
  objectPosition: "center",
  zIndex: 1,
  borderRadius: "24px",
  backgroundColor: "#ffffff",
},

    // overlay: {
    //   position: "absolute",
    //   inset: 0,
    //   background:
    //     "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.94) 32%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.15) 100%)",
    //   zIndex: 2,
    // },

    gradientBlur1: {
      position: "absolute",
      top: "8%",
      left: "-80px",
      width: "240px",
      height: "240px",
      borderRadius: "50%",
      background: "rgba(174, 44, 17, 0.10)",
      filter: "blur(50px)",
      zIndex: 2,
      animation: "floatY 7s ease-in-out infinite",
    },

    gradientBlur2: {
      position: "absolute",
      bottom: "4%",
      left: "22%",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      background: "rgba(219, 153, 65, 0.14)",
      filter: "blur(55px)",
      zIndex: 2,
      animation: "floatY 9s ease-in-out infinite",
    },

    contentWrap: {
      position: "relative",
      zIndex: 3,
      width: "100%",
    },

    tag: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 16px",
      borderRadius: "50px",
      background: "rgba(255,255,255,0.9)",
      border: "1px solid rgba(0,0,0,0.08)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#AE2C11",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      marginBottom: "1.35rem",
      backdropFilter: "blur(8px)",
    },

    tagDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#DB9941",
      boxShadow: "0 0 0 6px rgba(219, 153, 65, 0.16)",
    },

    headline: {
      fontSize: "clamp(1.8rem, 3.8vw, 3.5rem)",
      fontWeight: 800,
      lineHeight: 1.18,
      letterSpacing: "-0.6px",
      color: "#07111D",
      marginBottom: "1.2rem",
      maxWidth: "620px",
    },

    accent: {
      color: "#AE2C11",
      position: "relative",
      display: "inline-block",
    },

    subline: {
      fontSize: "clamp(0.95rem, 1.25vw, 1.08rem)",
      color: "#4d5b68",
      lineHeight: 1.95,
      maxWidth: "580px",
      marginBottom: "2.1rem",
      fontWeight: 500,
    },

    primaryBtn: {
      background: "linear-gradient(135deg, #AE2C11 0%, #DB9941 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "999px",
      padding: "12px 24px",
      fontWeight: 700,
      fontSize: "14px",
      textDecoration: "none",
      boxShadow: "0 14px 30px rgba(174, 44, 17, 0.22)",
      transition: "all 0.3s ease",
    },

    secondaryBtn: {
      background: "rgba(255,255,255,0.9)",
      color: "#07111D",
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: "999px",
      padding: "12px 24px",
      fontWeight: 700,
      fontSize: "14px",
      textDecoration: "none",
      boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
      transition: "all 0.3s ease",
    },

    statCard: {
      background: "rgba(255,255,255,0.88)",
      border: "1px solid rgba(0,0,0,0.07)",
      borderRadius: "20px",
      padding: "16px 18px",
      boxShadow: "0 14px 32px rgba(12, 18, 24, 0.06)",
      backdropFilter: "blur(8px)",
      height: "100%",
      transition: "all 0.3s ease",
    },

    statLabel: {
      fontSize: "11px",
      fontWeight: 700,
      color: "#7b8791",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "8px",
    },

    statText: {
      fontSize: "15px",
      fontWeight: 700,
      color: "#07111D",
      lineHeight: 1.5,
      marginBottom: 0,
    },
    statsSection: {
  padding: "80px 0 90px",
  background: "linear-gradient(180deg, #ffffff 0%, #E5E5DF 100%)",
},

statsTop: {
  textAlign: "center",
  marginBottom: "50px",
},

statsEyebrow: {
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#AE2C11",
  marginBottom: "12px",
},

statsHeading: {
  fontSize: "clamp(1.7rem, 2.8vw, 2.6rem)",
  fontWeight: 800,
  color: "#07111D",
  marginBottom: "12px",
},

statsSubtext: {
  fontSize: "1rem",
  color: "#39444D",
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: 1.8,
},

statsCard: {
  background: "#ffffff",
  borderRadius: "22px",
  padding: "28px 22px",
  height: "100%",
  border: "1px solid rgba(57, 68, 77, 0.10)",
  boxShadow: "0 14px 34px rgba(7, 17, 29, 0.06)",
  transition: "all 0.35s ease",
  position: "relative",
  overflow: "hidden",
},

statsCardGlow: {
  position: "absolute",
  top: "-30px",
  right: "-30px",
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  background: "rgba(219, 153, 65, 0.10)",
  filter: "blur(8px)",
},

statsIconWrap: {
  width: "62px",
  height: "62px",
  borderRadius: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, rgba(174,44,17,0.10) 0%, rgba(219,153,65,0.16) 100%)",
  color: "#AE2C11",
  fontSize: "24px",
  marginBottom: "18px",
},

statsNumber: {
  fontSize: "1.9rem",
  fontWeight: 800,
  color: "#07111D",
  marginBottom: "8px",
  lineHeight: 1.2,
},

statsLabel: {
  fontSize: "0.98rem",
  color: "#39444D",
  fontWeight: 600,
  lineHeight: 1.6,
  marginBottom: 0,
},

  };

  return (
    <div style={styles.page}>
      <style>
        {`
          @keyframes floatY {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-16px); }
            100% { transform: translateY(0px); }
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .home-hero-content {
            animation: fadeUp 1s ease;
          }

          .hero-btn-primary:hover {
            color: #fff !important;
            transform: translateY(-2px);
            box-shadow: 0 18px 36px rgba(174, 44, 17, 0.28) !important;
          }

          .hero-btn-secondary:hover {
            color: #AE2C11 !important;
            background: #ffffff !important;
            transform: translateY(-2px);
          }

          .hero-stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 36px rgba(12, 18, 24, 0.1) !important;
          }

          @media (max-width: 991px) {
            .home-hero-section {
              min-height: 520px !important;
            }

            .home-hero-overlay {
              background: linear-gradient(
                180deg,
                rgba(255,255,255,0.96) 0%,
                rgba(255,255,255,0.9) 45%,
                rgba(255,255,255,0.55) 75%,
                rgba(255,255,255,0.2) 100%
              ) !important;
            }
          }

          @media (max-width: 767px) {
            .home-hero-section {
              min-height: 470px !important;
            }
          }
            .stats-feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(7, 17, 29, 0.10) !important;
}
 /* ================= STATS MOBILE GRID FIX ================= */
/* ================= FINAL MOBILE FIX ================= */
@media (max-width: 576px) {

  /* GRID: 2 per row */
  .stats-section .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .stats-section .row > div {
    flex: 0 0 47% !important;
    max-width: 47% !important;
  }

  /* LAST CARD SAME SIZE (NOT BIG) */
  .stats-section .row > div:last-child {
    flex: 0 0 47% !important;
    max-width: 47% !important;
  }

  /* CARD HEIGHT REDUCTION */
  .stats-feature-card {
    padding: 14px 12px !important;
    border-radius: 16px;
  }

  /* ICON SIZE */
  .stats-feature-card div[style*="width: 58px"] {
    width: 42px !important;
    height: 42px !important;
    margin-bottom: 10px !important;
  }

  /* NUMBER SIZE */
  .stats-feature-card div[style*="font-size: 1.9rem"] {
    font-size: 1.3rem !important;
    margin-bottom: 4px !important;
  }

  /* TEXT SIZE */
  .stats-feature-card p {
    font-size: 0.8rem !important;
    margin-bottom: 0 !important;
  }
}@media (max-width: 576px) {
  .stats-section {
    padding-bottom: 40px !important;
  }
}


/* Tablet: 3 cards per row */
@media (min-width: 577px) and (max-width: 992px) {
  .stats-section .row > div {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
} 
        `}
        
      </style>

      <section style={styles.heroSection} className="home-hero-section">
        <img
  src={heroImage}
  alt="OperateX Hero"
  style={styles.heroBg}
  className="home-hero-bg"
/>
        <div style={styles.overlay} className="home-hero-overlay" />
        <div style={styles.gradientBlur1} />
        <div style={styles.gradientBlur2} />

        <div style={styles.contentWrap}>
          <div className="container">
            <div className="row align-items-center" style={{ minHeight: "590px" }}>
              <div className="col-lg-7 col-md-10">
                <div className="home-hero-content">
                  <div style={styles.tag}>
                    <span style={styles.tagDot}></span>
                    Industrial Automation • MES • Intelligence
                  </div>

                  <h1 style={styles.headline}>
                    Engineering the <span style={styles.accent}>Connected Factory</span>
                  </h1>

                  <p style={styles.subline}>
                    Automation, Machine Building, MES & Industrial Intelligence
                  </p>

                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <Link
                      to="/contact"
                      style={styles.primaryBtn}
                      className="hero-btn-primary"
                    >
                      Talk to Us
                    </Link>

                    <Link
                      to="/solutions"
                      style={styles.secondaryBtn}
                      className="hero-btn-secondary"
                    >
                      Explore Solutions
                    </Link>
                  </div>

                  {/* <div className="row g-3 mt-2">
                    <div className="col-md-4 col-sm-6">
                      <div style={styles.statCard} className="hero-stat-card">
                        <div style={styles.statLabel}>Automation</div>
                        <p style={styles.statText}>Control systems built for scale</p>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                      <div style={styles.statCard} className="hero-stat-card">
                        <div style={styles.statLabel}>Digital Factory</div>
                        <p style={styles.statText}>MES, traceability & visibility</p>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                      <div style={styles.statCard} className="hero-stat-card">
                        <div style={styles.statLabel}>Intelligence</div>
                        <p style={styles.statText}>Data-driven industrial decisions</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-5 d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.statsSection} className="stats-section">
  <div className="container">
    <div style={styles.statsTop}>
      <div
  style={{
    display: "inline-block",
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#AE2C11",
    marginBottom: "8px",
    textAlign: "center",
    width: "100%",
  }}
>
  Our Footprint
</div>

<h2
  style={{
    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
    lineHeight: 1.8,
    color: "#07111D",
    marginBottom: 0,
    fontWeight: 700,
    maxWidth: "900px",
    marginInline: "auto",
    textAlign: "center",
  }}
>
  Built across projects, devices and industries
</h2>
      <p style={styles.statsSubtext}>
        We deliver connected industrial solutions that combine automation,
        machine intelligence, digital manufacturing and scalable deployment.
      </p>
    </div>

    <div className="row g-4 stats-row" >
      <div className="col-lg col-md-4 col-sm-6">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <FaProjectDiagram />
          </div>
          <div style={styles.statsNumber}>400+</div>
          <p style={styles.statsLabel}>Projects</p>
        </div>
      </div>

      <div className="col-lg col-md-4 col-sm-6">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <FaMicrochip />
          </div>
          <div style={styles.statsNumber}>7,500+</div>
          <p style={styles.statsLabel}>Connected Devices</p>
        </div>
      </div>

      <div className="col-lg col-md-4 col-sm-6">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <FaIndustry />
          </div>
          <div style={styles.statsNumber}>10+</div>
          <p style={styles.statsLabel}>Industries</p>
        </div>
      </div>

      <div className="col-lg col-md-6 col-sm-6">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <FaCogs />
          </div>
          <div style={styles.statsNumber}>30+</div>
          <p style={styles.statsLabel}>Technologies</p>
        </div>
      </div>

      <div className="col-lg col-md-6 col-sm-12">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <FaCube />
          </div>
          <div style={styles.statsNumber}>6</div>
          <p style={styles.statsLabel}>Core Products</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  style={{
    padding: "90px 0",
    backgroundColor: "#ffffff",
  }}
>
  <div className="container">
   <div className="row mb-5 justify-content-center text-center">
  <div className="col-lg-9">
    <div
      style={{
        display: "inline-block",
        fontSize: "20px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#AE2C11",
        marginBottom: "8px",
      }}
    >
      What We Do
    </div>

    <p
      style={{
        fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
        lineHeight: 1.8,
        color: "#07111D",
        marginBottom: 0,
        fontWeight: 700,
        maxWidth: "900px",
        marginInline: "auto",
      }}
    >
      Integrated solutions across automation, machine engineering, and digital manufacturing.
    </p>
  </div>
</div>

    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            height: "100%",
            padding: "26px 24px",
            backgroundColor: "transparent",
            borderLeft: "3px solid #AE2C11",
            borderBottom: "3px solid #AE2C11",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <img
              src={factoryAutomationIcon}
              alt="Factory Automation"
              style={{
                width: "42px",
                height: "42px",
                objectFit: "contain",
              }}
            />

            <h4
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                color: "#07111D",
                marginBottom: 0,
              }}
            >
              Factory Automation
            </h4>
          </div>

          <p
            style={{
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "#39444D",
              marginBottom: 0,
            }}
          >
            Design and deployment of PLC-based automation, robotics integration,
            and machine-level control systems.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            height: "100%",
            padding: "26px 24px",
            backgroundColor: "transparent",
            borderLeft: "3px solid #DB9941",
            borderBottom: "3px solid #DB9941",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <img
              src={machineBuildingIcon}
              alt="Machine Building"
              style={{
                width: "42px",
                height: "42px",
                objectFit: "contain",
              }}
            />

            <h4
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                color: "#07111D",
                marginBottom: 0,
              }}
            >
              Machine Building
            </h4>
          </div>

          <p
            style={{
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "#39444D",
              marginBottom: 0,
            }}
          >
            Custom special-purpose machines and assembly lines engineered
            for high-volume production.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            height: "100%",
            padding: "26px 24px",
            backgroundColor: "transparent",
            borderLeft: "3px solid #AE2C11",
            borderBottom: "3px solid #AE2C11",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <img
              src={mesIcon}
              alt="MES & Digital Manufacturing"
              style={{
                width: "42px",
                height: "42px",
                objectFit: "contain",
              }}
            />

            <h4
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                color: "#07111D",
                marginBottom: 0,
              }}
            >
              MES & Digital Manufacturing
            </h4>
          </div>

          <p
            style={{
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "#39444D",
              marginBottom: 0,
            }}
          >
            OperateX platform for production monitoring, traceability,
            and real-time decision-making.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            height: "100%",
            padding: "26px 24px",
            backgroundColor: "transparent",
            borderLeft: "3px solid #DB9941",
            borderBottom: "3px solid #DB9941",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <img
              src={traceabilityIcon}
              alt="Traceability & Quality Systems"
              style={{
                width: "42px",
                height: "42px",
                objectFit: "contain",
              }}
            />

            <h4
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                color: "#07111D",
                marginBottom: 0,
              }}
            >
              Traceability & Quality Systems
            </h4>
          </div>

          <p
            style={{
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "#39444D",
              marginBottom: 0,
            }}
          >
            End-to-end traceability, poka-yoke systems, and quality
            assurance solutions.
          </p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            height: "100%",
            padding: "26px 24px",
            backgroundColor: "transparent",
            borderLeft: "3px solid #AE2C11",
            borderBottom: "3px solid #AE2C11",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <img
              src={iotIcon}
              alt="Industrial IoT & Data Integration"
              style={{
                width: "42px",
                height: "42px",
                objectFit: "contain",
              }}
            />

            <h4
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                color: "#07111D",
                marginBottom: 0,
              }}
            >
              Industrial IoT & Data Integration
            </h4>
          </div>

          <p
            style={{
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "#39444D",
              marginBottom: 0,
            }}
          >
            Seamless integration of machines, sensors, and enterprise
            systems using industrial protocols.
          </p>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            height: "100%",
            padding: "26px 24px",
            backgroundColor: "transparent",
            borderLeft: "3px solid #DB9941",
            borderBottom: "3px solid #DB9941",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <img
              src={panelControlIcon}
              alt="Panel & Control Systems"
              style={{
                width: "42px",
                height: "42px",
                objectFit: "contain",
              }}
            />

            <h4
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                color: "#07111D",
                marginBottom: 0,
              }}
            >
              Panel & Control Systems
            </h4>
          </div>

          <p
            style={{
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "#39444D",
              marginBottom: 0,
            }}
          >
            Standards-compliant electrical panels for reliable and safe
            industrial operations.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ================= OPERATEX HIGHLIGHT ================= */}
<section
  style={{
    padding: "68px 0",
    background: "linear-gradient(180deg, #07111D 0%, #0d1b2a 100%)",
    color: "#ffffff",
  }}
>
  <div className="container">
    <div className="row align-items-center g-4">
      <div className="col-lg-6">
        <div
          style={{
            display: "inline-block",
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#DB9941",
            marginBottom: "14px",
          }}
        >
          OperateX Highlight
        </div>

        <h2
          style={{
            fontSize: "clamp(1.7rem, 2.6vw, 2.45rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "10px",
            color: "#ffffff",
          }}
        >
          OperateX – Manufacturing Intelligence Platform
        </h2>

        <div
          style={{
            fontSize: "1rem",
            color: "#DB9941",
            fontWeight: 700,
            marginBottom: "14px",
          }}
        >
          From shop-floor data to enterprise decisions.
        </div>

        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.82)",
            marginBottom: "22px",
            maxWidth: "580px",
          }}
        >
          OperateX is ThetaVega’s proprietary Manufacturing Execution System
          (MES) designed to connect machines, operators, and enterprise systems
          into a unified digital factory.
        </p>

        <div className="row g-2 mb-3">
          {[
            "Real-time production monitoring & Andon",
            "Traceability & genealogy tracking",
            "Quality analytics (SPC, Cp, Cpk)",
            "OEE & performance insights",
            "Production planning & scheduling",
            "Maintenance & predictive analytics",
          ].map((item, index) => (
            <div className="col-md-6" key={index}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "10px 0",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    minWidth: "8px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#DB9941",
                    marginTop: "8px",
                  }}
                />
                <div
                  style={{
                    fontSize: "0.93rem",
                    lineHeight: 1.65,
                    color: "#ffffff",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "14px 16px",
            borderLeft: "3px solid #DB9941",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "0 14px 14px 0",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.75,
            marginBottom: "20px",
            fontSize: "0.95rem",
          }}
        >
          <strong style={{ color: "#ffffff" }}>Built on a scalable OT–IT architecture</strong>{" "}
          integrating PLCs, CNCs, sensors, and enterprise systems.
        </div>

        <a
          href="/solutions"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 22px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #AE2C11 0%, #DB9941 100%)",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "14px",
            boxShadow: "0 12px 24px rgba(0,0,0,0.20)",
          }}
        >
          Explore OperateX <span style={{ fontSize: "16px" }}>→</span>
        </a>
      </div>

      <div className="col-lg-6">
        <div
          style={{
            borderRadius: "24px",
            padding: "22px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="row g-3">
            {[
              { title: "Monitor", text: "Live machine, line and production visibility" },
              { title: "Trace", text: "Part, batch and genealogy traceability" },
              { title: "Analyze", text: "Quality, OEE and process performance insights" },
              { title: "Plan", text: "Schedules, targets and production coordination" },
            ].map((item, index) => (
              <div className="col-sm-6" key={index}>
                <div
                  style={{
                    padding: "16px 14px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#DB9941",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: "0.94rem",
                      lineHeight: 1.6,
                      fontWeight: 600,
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "16px",
              borderRadius: "16px",
              padding: "16px",
              background: "rgba(219,153,65,0.08)",
              border: "1px solid rgba(219,153,65,0.16)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#DB9941",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Unified Digital Factory
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              A connected manufacturing stack spanning machines, operators,
              quality systems, planning and enterprise integration.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= INDUSTRIES WE SERVE ================= */}

<section
  style={{
    padding: "90px 0",
    backgroundColor: "#ffffff",
  }}
>
  
  <div className="container">
    
    <div className="row mb-5 justify-content-center text-center">
      <div className="col-lg-9">
        <div
          style={{
            display: "inline-block",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#AE2C11",
            marginBottom: "8px",
          }}
        >
          Industries We Serve
        </div>

        <p
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
            lineHeight: 1.8,
            color: "#07111D",
            marginBottom: "10px",
            fontWeight: 700,
            maxWidth: "950px",
            marginInline: "auto",
          }}
        >
          Automation and digital manufacturing solutions tailored to industry-specific needs
        </p>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "#39444D",
            fontWeight: 500,
          }}
        >
          Designed for production-critical environments across discrete and process manufacturing.
        </p>
      </div>
    </div>

    <div className="row g-3 justify-content-center">
      {[
        {
          title: "Automotive & EV",
          icon: <FaCarSide />,
          iconBg: "#07111D",
          bg: "linear-gradient(180deg, #ffffff 0%, #F5F1EB 100%)",
          iconColor: "#ffffff",
        },
        {
          title: "Auto Ancillaries",
          icon: <FaCogs />,
          iconBg: "#AE2C11",
          bg: "#ffffff",
          iconColor: "#ffffff",
        },
        {
          title: "Consumer Durables",
          icon: <FaBlender />,
          iconBg: "#DB9941",
          bg: "linear-gradient(180deg, #ffffff 0%, #F8F5EE 100%)",
          iconColor: "#07111D",
        },
        {
          title: "Food & Beverage",
          icon: <FaUtensils />,
          iconBg: "#07111D",
          bg: "#ffffff",
          iconColor: "#ffffff",
        },
        {
          title: "Pharmaceuticals & Life Sciences",
          icon: <FaFlask />,
          iconBg: "#AE2C11",
          bg: "linear-gradient(180deg, #ffffff 0%, #F5F1EB 100%)",
          iconColor: "#ffffff",
        },
        {
          title: "Metals & Process Industries",
          icon: <FaIndustry />,
          iconBg: "#DB9941",
          bg: "#ffffff",
          iconColor: "#07111D",
        },
      ].map((item, index) => (
        <div className="col-lg-4 col-md-6" key={index}>
          <div
            style={{
              padding: "22px 24px",
              borderRadius: "20px",
              border: "1px solid rgba(57,68,77,0.10)",
              background: item.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              minHeight: "88px",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#07111D",
                lineHeight: 1.5,
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                minWidth: "46px",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                background: item.iconBg,
                color: item.iconColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                boxShadow: "0 10px 20px rgba(7,17,29,0.10)",
              }}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= WHY THETAVEGA ================= */}
<section
  style={{
    padding: "95px 0",
    background: "linear-gradient(180deg, #E5E5DF 0%, #ffffff 100%)",
  }}
>
  <div className="container">
    <div className="row g-5 align-items-start">
      <div className="col-lg-4">
        <div
          style={{
            position: "sticky",
            top: "90px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: "#AE2C11",
              marginBottom: "14px",
            }}
          >
            Why ThetaVega
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 2.8vw, 2.7rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#07111D",
              marginBottom: "16px",
            }}
          >
            Built for real manufacturing environments
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#39444D",
              marginBottom: 0,
            }}
          >
            We combine plant-floor engineering with digital manufacturing
            expertise to deliver systems that are practical, scalable and
            production-ready.
          </p>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="row g-3">
          {[
            {
              icon: "https://cdn.lordicon.com/rpviwvwn.json",
              title: "OT + IT Convergence",
              text: "Deep integration of shop-floor automation with manufacturing IT and enterprise systems.",
            },
            {
              icon: "https://cdn.lordicon.com/fwkrbvja.json",
              title: "Engineering-Driven Approach",
              text: "Designed and executed by engineers with real plant-floor experience.",
            },
            {
              icon: "https://cdn.lordicon.com/msoeawqm.json",
              title: "End-to-End Capability",
              text: "From machine design to MES deployment and plant-wide integration.",
            },
            {
              icon: "https://cdn.lordicon.com/iltqorsz.json",
              title: "Production-Ready Solutions",
              text: "Systems engineered for reliability, scalability, and long-term operation.",
            },
            {
              icon: "https://cdn.lordicon.com/wloilxuq.json",
              title: "Data-Driven Manufacturing",
              text: "Enabling real-time insights, analytics, and decision-making.",
            },
            {
             icon: "https://cdn.lordicon.com/erxuunyq.json",
              title: "Scalable & Future-Ready",
              text: "Built to support Industry 4.0, digital transformation, and global manufacturing standards.",
            },
          ].map((item, index) => (
            <div className="col-md-6" key={index}>
              <div
                style={{
                  height: "100%",
                  borderRadius: "22px",
                  padding: "24px 22px",
                  background: "#ffffff",
                  border: "1px solid rgba(57,68,77,0.09)",
                  boxShadow: "0 12px 28px rgba(7,17,29,0.05)",
                }}
              >
                <lord-icon
                src={item.icon}
                trigger="loop"
                 colors="primary:#07111D,secondary:#AE2C11"
                 style={{
                  width: "55px",
                   height: "55px",
                    marginBottom: "16px"
                         }}
                    ></lord-icon>  

                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#07111D",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: "0.97rem",
                    lineHeight: 1.8,
                    color: "#39444D",
                    marginBottom: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= INTERNATIONAL STANDARDS ================= */}
<section
  style={{
    padding: "90px 0",
    backgroundColor: "#07111D",
    color: "#ffffff",
  }}
>
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-5">
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "#DB9941",
            marginBottom: "14px",
          }}
        >
          Built on International Standards
        </div>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 2.9vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Engineered for safety, reliability and compliance
        </h2>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "rgba(255,255,255,0.82)",
            marginBottom: "22px",
          }}
        >
          Our solutions are designed and engineered in alignment with global
          standards to ensure safety, reliability, and compliance.
        </p>

        <div
          style={{
            padding: "18px 20px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#DB9941",
            fontWeight: 600,
            lineHeight: 1.8,
          }}
        >
          Ensuring globally compliant, audit-ready manufacturing systems.
        </div>
      </div>

      <div className="col-lg-7">
        <div className="row g-3">
          {[
            "ISO 9001 – Quality Management",
            "ISO 27001 – Information Security",
            "ISA-95 / ISA-88 – Industrial Architecture",
            "IEC 62443 – Cybersecurity",
            "CE / UL – Equipment Compliance",
            "RoHS – Environmental Compliance",
          ].map((item, index) => (
            <div className="col-md-6" key={index}>
              <div
                style={{
                  height: "100%",
                  padding: "18px 18px",
                  borderRadius: "18px",
                  background:
                    index % 2 === 0
                      ? "rgba(219,153,65,0.10)"
                      : "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    minWidth: "12px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#DB9941",
                  }}
                />
                <div
                  style={{
                    fontSize: "0.96rem",
                    lineHeight: 1.7,
                    color: "#ffffff",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= CASE STUDIES PREVIEW ================= */}
<section
  style={{
    padding: "95px 0",
    backgroundColor: "#ffffff",
  }}
>
  <div className="container">
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-5">
      <div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "#AE2C11",
            marginBottom: "12px",
          }}
        >
          Case Studies Preview
        </div>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 2.9vw, 2.6rem)",
            fontWeight: 800,
            color: "#07111D",
            marginBottom: "10px",
          }}
        >
          Proven in Production Environments
        </h2>
      </div>

      <a
        href="/case-studies"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          color: "#AE2C11",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "15px",
        }}
      >
        View All Case Studies <span>→</span>
      </a>
    </div>

    <div className="row g-4">
      {[
        {
          title: "Engine Assembly Traceability System",
          text: "Complete SKU indexing, DC tool integration, and real-time production tracking.",
        },
        {
          title: "EV Battery Assembly Automation",
          text: "Cell sorting, welding validation, and process traceability systems.",
        },
        {
          title: "Machine Monitoring & OEE System",
          text: "Real-time machine connectivity with analytics dashboards and reporting.",
        },
      ].map((item, index) => (
        <div className="col-lg-4" key={index}>
          <div
            style={{
              height: "100%",
              borderRadius: "24px",
              padding: "28px 24px",
              background:
                index === 1
                  ? "linear-gradient(180deg, #07111D 0%, #13263b 100%)"
                  : "linear-gradient(180deg, #ffffff 0%, #E5E5DF 100%)",
              border:
                index === 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(57,68,77,0.08)",
              boxShadow:
                index === 1
                  ? "0 16px 34px rgba(7,17,29,0.16)"
                  : "0 14px 28px rgba(7,17,29,0.05)",
            }}
          >
            <div
              style={{
                color: "#DB9941",
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "14px",
              }}
            >
              🔶 Case Study {index + 1}
            </div>

            <h4
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                color: index === 1 ? "#ffffff" : "#07111D",
                marginBottom: "12px",
                lineHeight: 1.4,
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                fontSize: "0.97rem",
                lineHeight: 1.85,
                color: index === 1 ? "rgba(255,255,255,0.82)" : "#39444D",
                marginBottom: 0,
              }}
            >
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;