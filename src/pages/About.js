import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import image from "../assets/images/image.png";

const LeadershipCard = ({ leader, index }) => {
  const [split, setSplit] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      setSplit(false); // reset every time

      const run = async () => {
        await new Promise((res) => setTimeout(res, 600));  // appear
        await new Promise((res) => setTimeout(res, 1000)); // pause
        setSplit(true); // animate
      };

      run();
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -40 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        borderRadius: "20px",
        padding: "0px",
       
        background: "#fff",
        border: "3px solid transparent",
        backgroundImage: `
          linear-gradient(#fff, #fff),
          linear-gradient(135deg, #DB9941, #AE2C11)
        `,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        minHeight: "260px",
        height: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: split ? "flex-start" : "center",
          textAlign: split ? "left" : "center",
          gap: "1px",
        }}
      >
        {/* IMAGE */}
        <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{
    opacity: split ? 1 : 0,
    x: split ? 0 : 80,
  }}
  transition={{ duration: 0.9}}
  style={{
    flex: "0 0 40%",
    height: "100%",
    display: split ? "block" : "none",
    overflow: "hidden",
     borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  }}
>
  <img
    src={leader.image}
    alt={leader.name}
    style={{
      width: "110%",
      height: "110%",
      objectFit: "cover"   // 🔥 IMPORTANT
     
    }}
  />
</motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: split ? 20 : 0, // 👉 REAL movement
          }}
          transition={{ duration: 0.9}}
          style={{
            flex: split ? "0 0 60%" : "100%",
            display: "flex",
            padding: "4px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: split ? "flex-start" : "center",
                paddingRight: split ? "42px" : "4px", 
          }}
        >
          {/* NAME */}
          <h4
            style={{
              marginBottom: "6px",
              fontSize: split ? "19px" : "23px",
              lineHeight: "1.25",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {leader.name}
          </h4>

          {/* DESIGNATION */}
          <div
            style={{
              color: "#AE2C11",
              fontWeight: 700,
              marginBottom: "8px",
              fontSize: split ? "14px" : "16px",
            }}
          >
            {leader.designation}
          </div>

          {/* BIO */}
          <p
            style={{
              marginBottom: 0,
              fontSize: split ? "14px" : "16 px",
              lineHeight: "1.5",
              paddingRight: split ? "12px" : "0px", 
            }}
          >
            {leader.bio}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};










const About = () => {

const leadershipData = [
  {
    name: "Tejas Bakliwal",
    designation: "CEO, Managing Director",
    bio: "Leads ThetaVega with an entrepreneurial vision focused on automation, digital manufacturing, and scalable industrial technology platforms.",
    image: image,
  },
  {
    name: "Tejaswini Bakliwal",
    designation: "Director",
    bio: "Drives strategic direction, organizational growth, and business alignment across engineering, customer delivery, and transformation initiatives.",
    image:  image,
  },
  {
    name: "CA. Sumali Patni",
    designation: "CFO",
    bio: "Oversees financial strategy, compliance, governance, and business planning to support sustainable and disciplined growth.",
    image:  image,
  },
  {
    name: "Saurabh Pahade",
    designation: "COO",
    bio: "Leads operational execution with a strong focus on delivery excellence, industrial project management, and client success.",
    image:  image,
  },
  {
    name: "Shayam Gaikwad",
    designation: "CTO",
    bio: "Drives technology architecture, platform innovation, and engineering strategy across automation, software, IIoT, and smart factory systems.",
    image:  image,
  },
];

const thetaCards = {
  theta: [
    {
      title: "Transformation",
      text: "Theta represents progression and change. For ThetaVega, it reflects our role in transforming traditional manufacturing into connected, automated, and digitally enabled operations.",
    },
    {
      title: "Continuous Improvement",
      text: "Theta also signifies movement and refinement. It aligns with our commitment to ongoing improvement across automation, digitalization, and industrial process optimization.",
    },
    {
      title: "Innovation",
      text: "Theta symbolizes new beginnings and forward motion. It reflects ThetaVega’s focus on introducing modern technologies, intelligent systems, and future-ready industrial practices.",
    },
  ],
  vega: [
    {
      title: "Vision",
      text: "Vega represents clarity, direction, and aspiration. It reflects our vision of helping industries move toward intelligent, data-driven, and high-performance manufacturing.",
    },
    {
      title: "Precision & Accuracy",
      text: "Vega also stands for reliability and exactness. It reflects the engineering precision behind our automation systems, digital platforms, and execution methodology.",
    },
    {
      title: "Navigational Guidance",
      text: "Like a guiding star, Vega represents direction. It reflects our role in helping manufacturers navigate industrial complexity with confidence, structure, and technological clarity.",
    },
  ],
};

const whoWeAreItems = [
  "Factory Automation & PLC/SCADA Systems",
  "Machine Building (SPM, Assembly, Leak Test Systems)",
  "Manufacturing Execution Systems (OperateX MES)",
  "Industrial IoT & Smart Factory Solutions",
  "Vision Systems & Quality Automation",
  "Utility Monitoring & Energy Management",
];

const missionItems = [
  "Deliver high-performance, scalable, and reliable solutions",
  "Enable industries to achieve data-driven decision-making",
  "Build platforms that integrate seamlessly across shopfloor to enterprise",
  "Maintain the highest standards of quality, compliance, and engineering excellence",
];

const focusItems = [
  "Driving innovation in Industry 4.0 & IIoT",
  "Building scalable platforms like OperateX",
  "Expanding global presence across automation and digital manufacturing",
  "Maintaining strong execution discipline across complex industrial projects",
];

const philosophyItems = [
  "ISA-95 & ISA-88 aligned architecture",
  "Modular and scalable system design",
  "Seamless OT–IT integration",
  "Data-centric engineering for analytics and AI readiness",
  "Reliability, safety, and maintainability as core principles",
];

const globalItems = [
  "Solutions designed as per international standards",
  "Scalable architectures suitable for multi-plant deployments",
  "Capability to integrate with global systems like ERP, MES, and cloud platforms",
  "Strong focus on documentation, compliance, and audit readiness",
];

const certificationItems = [
  "ISO 9001 – Quality Management Systems",
  "ISO 27001 – Information Security Management",
  "IEC 62443 Standards – Electrical & Automation Compliance",
  "ISA-95 / ISA-88 – Industrial Automation Architecture",
  "UL / CE Compliance – Panel & system-level safety standards",
  "FDA (21 CFR Part 11) – For regulated industries where applicable",
];

  const styles = {
    page: {
      backgroundColor: "#ffffff",
      color: "#07111D",
      fontFamily: "Montserrat, sans-serif",
      overflowX: "hidden",
    },

    section: {
      position: "relative",
      padding: "82px 0",
      backgroundColor: "#ffffff",
      overflow: "hidden",
      borderBottom: "1px solid rgba(7,17,29,0.05)",
    },

    heroSection: {
      position: "relative",
      padding: "96px 0 72px",
      background:
        "linear-gradient(180deg, #ffffff 0%, rgba(245,244,241,0.55) 100%)",
      overflow: "hidden",
      borderBottom: "1px solid rgba(7,17,29,0.05)",
    },

    glowTopRight: {
      position: "absolute",
      top: "-120px",
      right: "-120px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "rgba(219, 153, 65, 0.10)",
      filter: "blur(55px)",
      zIndex: 0,
      animation: "floatSoft 8s ease-in-out infinite",
    },

    glowBottomLeft: {
      position: "absolute",
      bottom: "-120px",
      left: "-120px",
      width: "280px",
      height: "280px",
      borderRadius: "50%",
      background: "rgba(174, 44, 17, 0.08)",
      filter: "blur(55px)",
      zIndex: 0,
      animation: "floatSoft 10s ease-in-out infinite",
    },

    sectionGlowLeft: {
      position: "absolute",
      top: "15%",
      left: "-90px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background: "rgba(7,17,29,0.04)",
      filter: "blur(38px)",
      zIndex: 0,
    },

    sectionGlowRight: {
      position: "absolute",
      bottom: "-70px",
      right: "-70px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background: "rgba(219,153,65,0.08)",
      filter: "blur(38px)",
      zIndex: 0,
    },

    heroTag: {
      display: "inline-block",
      padding: "7px 14px",
      borderRadius: "999px",
      background: "rgba(174, 44, 17, 0.08)",
      color: "#AE2C11",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      marginBottom: "16px",
      border: "1px solid rgba(174, 44, 17, 0.10)",
    },

    sectionTag: {
      display: "inline-block",
      padding: "7px 14px",
      borderRadius: "999px",
      background: "rgba(219,153,65,0.10)",
      color: "#AE2C11",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      marginBottom: "14px",
      border: "1px solid rgba(219,153,65,0.14)",
    },

    heroTitle: {
      fontSize: "clamp(2rem, 3.3vw, 3.25rem)",
      fontWeight: 800,
      lineHeight: 1.08,
      color: "#07111D",
      marginBottom: "16px",
      maxWidth: "760px",
    },

    heroAccent: {
      color: "#AE2C11",
    },

    leadText: {
      fontSize: "1rem",
      lineHeight: 1.78,
      color: "#39444D",
      maxWidth: "760px",
      marginBottom: "14px",
    },

    heroPanel: {
      background: "rgba(255,255,255,0.8)",
      border: "1px solid rgba(57,68,77,0.08)",
      borderRadius: "28px",
      padding: "26px",
      boxShadow: "0 18px 42px rgba(7,17,29,0.06)",
      backdropFilter: "blur(10px)",
    },

    heroStatGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "14px",
    },

    heroStatCard: {
      borderRadius: "18px",
      padding: "16px",
      background: "#ffffff",
      border: "1px solid rgba(57,68,77,0.08)",
      boxShadow: "0 10px 24px rgba(7,17,29,0.04)",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    },

    heroStatTitle: {
      fontSize: "0.88rem",
      fontWeight: 700,
      color: "#07111D",
      marginBottom: "6px",
    },

    heroStatText: {
      fontSize: "0.84rem",
      lineHeight: 1.65,
      color: "#5C6670",
      marginBottom: 0,
    },

    sectionTitle: {
      fontSize: "clamp(1.55rem, 2.2vw, 2.3rem)",
      fontWeight: 800,
      color: "#07111D",
      marginBottom: "12px",
      lineHeight: 1.15,
    },

    sectionIntro: {
      fontSize: "0.98rem",
      lineHeight: 1.76,
      color: "#39444D",
      maxWidth: "820px",
      marginBottom: 0,
    },

    cleanCard: {
      height: "100%",
      background: "rgba(255,255,255,0.94)",
      border: "1px solid rgba(57,68,77,0.08)",
      borderRadius: "24px",
      padding: "24px",
      boxShadow: "0 14px 30px rgba(7,17,29,0.05)",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    },

    cardTitle: {
      fontSize: "1rem",
      fontWeight: 800,
      color: "#07111D",
      marginBottom: "10px",
    },

    cardText: {
      fontSize: "0.92rem",
      lineHeight: 1.72,
      color: "#39444D",
      marginBottom: 0,
    },

    listWrap: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },

    listDot: {
      minWidth: "10px",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#DB9941",
      marginTop: "7px",
      boxShadow: "0 0 0 6px rgba(219,153,65,0.08)",
    },

    listText: {
      fontSize: "0.94rem",
      lineHeight: 1.68,
      color: "#39444D",
      marginBottom: 0,
    },

    splitPanel: {
      height: "100%",
      borderRadius: "28px",
      overflow: "hidden",
      border: "1px solid rgba(57,68,77,0.08)",
      boxShadow: "0 16px 36px rgba(7,17,29,0.06)",
      background: "#ffffff",
    },

    splitPanelHeader: {
      padding: "18px 22px",
      borderBottom: "1px solid rgba(57,68,77,0.08)",
      background: "linear-gradient(180deg, #fff 0%, #f7f5f1 100%)",
    },

    splitPanelTitle: {
      margin: 0,
      fontSize: "1.08rem",
      fontWeight: 800,
      color: "#AE2C11",
      textAlign: "center",
    },

    splitPanelBody: {
      padding: "22px",
    },

    thetaHeroBox: {
      textAlign: "center",
      marginBottom: "30px",
    },

    thetaMainTitle: {
      fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
      fontWeight: 800,
      color: "#F17617",
      marginBottom: "8px",
      lineHeight: 1.1,
    },

    thetaSubTitle: {
      fontSize: "0.92rem",
      color: "#5C6670",
      marginBottom: 0,
      fontWeight: 500,
    },

    thetaGroupTitle: {
      fontSize: "1.7rem",
      fontWeight: 800,
      color: "#F17617",
      textAlign: "center",
      marginBottom: "22px",
    },

    meaningCard: {
      height: "100%",
      background: "#ffffff",
      border: "1px solid rgba(57,68,77,0.10)",
      borderRadius: "18px",
      padding: "20px",
      boxShadow: "0 8px 22px rgba(7,17,29,0.06)",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    },

    meaningCardTitle: {
      fontSize: "1rem",
      fontWeight: 800,
      color: "#4A52B2",
      marginBottom: "10px",
      textAlign: "center",
    },

    meaningCardText: {
      fontSize: "0.86rem",
      lineHeight: 1.72,
      color: "#4A4F57",
      textAlign: "left",
      marginBottom: 0,
    },

    divider: {
      width: "100%",
      height: "1px",
      background: "linear-gradient(90deg, transparent 0%, rgba(7,17,29,0.10) 50%, transparent 100%)",
      margin: "34px 0",
    },

    leadershipCard: {
      height: "100%",
      background: "#ffffff",
      border: "1px solid rgba(57,68,77,0.08)",
      borderRadius: "24px",
      padding: "24px",
      boxShadow: "0 14px 30px rgba(7,17,29,0.05)",
      textAlign: "center",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    },

    profileFrame: {
      width: "112px",
      height: "112px",
      borderRadius: "50%",
      margin: "0 auto 16px",
      padding: "4px",
      background: "linear-gradient(135deg, #DB9941 0%, #AE2C11 100%)",
      boxShadow: "0 12px 24px rgba(7,17,29,0.08)",
    },

    profileImage: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      background: "#F3F0EA",
      display: "block",
    },

    profileFallback: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "linear-gradient(180deg, #F3F0EA 0%, #E8E2D8 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#07111D",
      fontWeight: 800,
      fontSize: "1.6rem",
    },

    leadershipName: {
      fontSize: "1.02rem",
      fontWeight: 800,
      color: "#07111D",
      marginBottom: "6px",
    },

    leadershipDesignation: {
      fontSize: "0.84rem",
      fontWeight: 700,
      color: "#AE2C11",
      textTransform: "uppercase",
      letterSpacing: "0.7px",
      marginBottom: "12px",
    },

    leadershipBio: {
      fontSize: "0.9rem",
      lineHeight: 1.68,
      color: "#39444D",
      marginBottom: 0,
    },

    twoToneCard: {
      height: "100%",
      borderRadius: "26px",
      padding: "26px",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,244,241,0.92) 100%)",
      border: "1px solid rgba(57,68,77,0.08)",
      boxShadow: "0 14px 30px rgba(7,17,29,0.05)",
    },

    darkCard: {
      height: "100%",
      borderRadius: "26px",
      padding: "26px",
      background: "linear-gradient(180deg, #07111D 0%, #13263B 100%)",
      border: "1px solid rgba(255,255,255,0.05)",
      boxShadow: "0 18px 34px rgba(7,17,29,0.10)",
    },

    darkCardTitle: {
      fontSize: "1.2rem",
      fontWeight: 800,
      color: "#ffffff",
      marginBottom: "12px",
    },

    darkText: {
      fontSize: "0.93rem",
      lineHeight: 1.72,
      color: "rgba(255,255,255,0.82)",
      marginBottom: 0,
    },

    certCard: {
      height: "100%",
      borderRadius: "18px",
      background: "#ffffff",
      border: "1px solid rgba(57,68,77,0.08)",
      padding: "18px",
      boxShadow: "0 8px 22px rgba(7,17,29,0.04)",
    },

    certTitle: {
      fontSize: "0.93rem",
      fontWeight: 800,
      color: "#07111D",
      lineHeight: 1.5,
      marginBottom: 0,
    },
     closingBox: {
  width: "100%",
  padding: "100px 20px",

  background: "linear-gradient(180deg, #07111D 0%, #13263B 100%)",

  border: "none",
  borderRadius: "0",
  margin: "0",
  boxShadow: "none",

  textAlign: "center",
},
    

    closingTop: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      color: "#AE2C11",
      marginBottom: "10px",
    },

    closingTitle: {
      fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)",
      fontWeight: 800,
      color: "var(--tv-light)",
      lineHeight: 1.16,
      marginBottom: "14px",
    },

    closingText: {
      fontSize: "0.95rem",
      lineHeight: 1.76,
      color: "var(--tv-white)",
      maxWidth: "760px",
      margin: "0 auto 14px",
    },

    closingStrong: {
      fontSize: "1.08rem",
      fontWeight: 800,
      color: "#AE2C11",
      marginBottom: 0,
    },
  };

  const renderList = (items, textStyle = styles.listText) => (
    <div style={styles.listWrap}>
      {items.map((item, index) => (
        <div style={styles.listItem} key={index}>
          <div style={styles.listDot}></div>
          <p style={textStyle}>{item}</p>
        </div>
      ))}
    </div>
  );
  return (
    <div style={styles.page}>
      <style>
        {`
          @keyframes floatSoft {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }

          .tv-hover-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px #07111D);
          }

          .tv-stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 28px rgba(7,17,29,0.08);
          }

          @media (max-width: 991px) {
            .tv-hero-panel {
              margin-top: 8px;
            }
          }

          @media (max-width: 767px) {
            .tv-section {
              padding: 64px 0 !important;
            }

            .tv-hero {
              padding: 82px 0 60px !important;
            }

            .tv-closing-box {
              padding: 30px 18px !important;
              border-radius: 24px !important;
            }

            .tv-theta-group-title {
              font-size: 1.38rem !important;
            }
          }
        `}
      </style>

      <section style={styles.heroSection} className="tv-section tv-hero">
        <div style={styles.glowTopRight}></div>
        <div style={styles.glowBottomLeft}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div style={styles.heroTag}>About ThetaVega</div>

              <h1 style={styles.heroTitle}>
                Engineering Intelligence for{" "}
                <span style={styles.heroAccent}>Modern Manufacturing</span>
              </h1>

              <p style={styles.leadText}>
                ThetaVega Tech Private Limited is a technology-driven
                organization focused on delivering advanced automation,
                digitalization, and smart manufacturing solutions.
              </p>

              <p style={styles.leadText}>
                We combine deep industrial engineering expertise with modern
                software technologies to build scalable, future-ready systems
                for global manufacturing enterprises.
              </p>

              <p style={{ ...styles.leadText, marginBottom: 0 }}>
                ThetaVega stands for precision, performance, and partnership —
                enabling manufacturers to operate with greater visibility,
                control, traceability, and operational intelligence.
              </p>
            </div>

            <div className="col-lg-5">
              <div style={styles.heroPanel} className="tv-hero-panel">
                <div style={styles.heroStatGrid}>
                  <div style={styles.heroStatCard} className="tv-stat-card">
                    <div style={styles.heroStatTitle}>Automation</div>
                    <p style={styles.heroStatText}>
                      PLC, SCADA, machine integration, controls, and industrial
                      execution systems.
                    </p>
                  </div>

                  <div style={styles.heroStatCard} className="tv-stat-card">
                    <div style={styles.heroStatTitle}>Digitalization</div>
                    <p style={styles.heroStatText}>
                      MES, IIoT, dashboards, traceability, analytics, and plant
                      data systems.
                    </p>
                  </div>

                  <div style={styles.heroStatCard} className="tv-stat-card">
                    <div style={styles.heroStatTitle}>Machine Building</div>
                    <p style={styles.heroStatText}>
                      Assembly systems, SPMs, leak test systems, and process
                      automation solutions.
                    </p>
                  </div>

                  <div style={styles.heroStatCard} className="tv-stat-card">
                    <div style={styles.heroStatTitle}>Industrial Intelligence</div>
                    <p style={styles.heroStatText}>
                      Connected operations, decision support, optimization, and
                      future-ready factory platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} className="tv-section">
        <div style={styles.sectionGlowLeft}></div>
        <div style={styles.sectionGlowRight}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={styles.thetaHeroBox}>
            <div style={styles.sectionTag}>ThetaVega Word Meaning</div>
            <h2 style={styles.thetaMainTitle}>Unveiling the Essence</h2>
            <p style={styles.thetaSubTitle}>
              The profound significance behind the name ThetaVega
            </p>
          </div>

          <h3 style={styles.thetaGroupTitle} className="tv-theta-group-title">
            Theta (θ):
          </h3>

          <div className="row g-4">
            {thetaCards.theta.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <div style={styles.meaningCard} className="tv-hover-card">
                  <div style={styles.meaningCardTitle}>{item.title}:</div>
                  <p style={styles.meaningCardText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.divider}></div>

          <h3 style={styles.thetaGroupTitle} className="tv-theta-group-title">
            Vega (V):
          </h3>

          <div className="row g-4">
            {thetaCards.vega.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <div style={styles.meaningCard} className="tv-hover-card">
                  <div style={styles.meaningCardTitle}>{item.title}:</div>
                  <p style={styles.meaningCardText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section} className="tv-section">
        <div style={styles.sectionGlowLeft}></div>
        <div style={styles.sectionGlowRight}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <div style={styles.twoToneCard} className="tv-hover-card">
                <div style={styles.sectionTag}>Who We Are</div>
                <h2 style={styles.sectionTitle}>
                  A multidisciplinary team building connected, intelligent, and
                  data-driven factories
                </h2>
                <p style={{ ...styles.sectionIntro, marginBottom: "20px" }}>
                  We are a multidisciplinary team of automation engineers,
                  software developers, and system integrators committed to
                  transforming manufacturing environments into scalable,
                  connected, and high-performance operations.
                </p>
                {renderList(whoWeAreItems)}
              </div>
            </div>

            <div className="col-lg-6">
              <div style={styles.darkCard} className="tv-hover-card">
                <h3 style={styles.darkCardTitle}>How We Work</h3>
                <p style={styles.darkText}>
                  We work closely with OEMs, Tier-1, and Tier-2 manufacturers,
                  delivering solutions that directly impact productivity,
                  traceability, compliance, and operational efficiency.
                </p>
                <div
                  style={{
                    marginTop: "18px",
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <p style={styles.darkText}>
                    Our strength lies in combining industrial engineering depth
                    with software-driven execution — allowing clients to achieve
                    both process reliability and digital transformation through
                    one integrated partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} className="tv-section">
        <div style={styles.sectionGlowLeft}></div>
        <div style={styles.sectionGlowRight}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row g-4">
            <div className="col-lg-6">
              <div style={styles.cleanCard} className="tv-hover-card">
                <div style={styles.sectionTag}>Vision</div>
                <h3 style={styles.sectionTitle}>
                  To establish ThetaVega as a globally trusted industrial
                  technology brand
                </h3>
                <p style={styles.cardText}>
                  Enabling the transformation of manufacturing through
                  intelligent automation, digital innovation, and engineering
                  excellence.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={styles.cleanCard} className="tv-hover-card">
                <div style={styles.sectionTag}>Mission</div>
                <h3 style={styles.sectionTitle}>
                  Delivering scalable systems for the factories of the future
                </h3>
                {renderList(missionItems)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} className="tv-section">
        <div style={styles.sectionGlowLeft}></div>
        <div style={styles.sectionGlowRight}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "34px", textAlign: "center" }}>
            <div style={styles.sectionTag}>Leadership</div>
            <h2 style={styles.sectionTitle}>
              Leadership with entrepreneurial vision and hands-on engineering depth
            </h2>
            <p style={{ ...styles.sectionIntro, margin: "0 auto" }}>
              ThetaVega is led by a team focused on industrial innovation,
              execution discipline, scalable platforms, and long-term
              manufacturing transformation.
            </p>
          </div>

                   <div className="row g-4">
  {leadershipData.map((leader, index) => (
    <div className="col-lg-4 col-md-6" key={index}>
      <LeadershipCard leader={leader} index={index} />
    </div>
  ))}
</div>
          

          <div style={{ marginTop: "28px" }}>
            <div style={styles.cleanCard}>
              <div style={styles.cardTitle}>Leadership Focus Areas</div>
              {renderList(focusItems)}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} className="tv-section">
        <div style={styles.sectionGlowLeft}></div>
        <div style={styles.sectionGlowRight}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row g-4">
            <div className="col-lg-6">
              <div style={styles.splitPanel} className="tv-hover-card">
                <div style={styles.splitPanelHeader}>
                  <h3 style={styles.splitPanelTitle}>Engineering Philosophy</h3>
                </div>
                <div style={styles.splitPanelBody}>
                  <p style={{ ...styles.cardText, marginBottom: "18px" }}>
                    At ThetaVega, engineering is not just execution — it is
                    structured, standards-driven, and future-oriented.
                  </p>
                  {renderList(philosophyItems)}
                  <p style={{ ...styles.cardText, marginTop: "18px" }}>
                    We design systems that are not only functional, but also
                    sustainable, upgradeable, maintainable, and globally
                    compatible.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={styles.splitPanel} className="tv-hover-card">
                <div style={styles.splitPanelHeader}>
                  <h3 style={styles.splitPanelTitle}>Global Approach</h3>
                </div>
                <div style={styles.splitPanelBody}>
                  <p style={{ ...styles.cardText, marginBottom: "18px" }}>
                    ThetaVega follows a global delivery mindset with localized
                    execution strength and industrial rigor.
                  </p>
                  {renderList(globalItems)}
                  <p style={{ ...styles.cardText, marginTop: "18px" }}>
                    We aim to serve clients across geographies with consistent
                    quality, scalable design practices, and engineering
                    precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} className="tv-section">
        <div style={styles.sectionGlowLeft}></div>
        <div style={styles.sectionGlowRight}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <div style={styles.sectionTag}>Certifications & Standards</div>
            <h2 style={styles.sectionTitle}>
              Aligned with global quality, safety, architecture, and compliance benchmarks
            </h2>
            <p style={{ ...styles.sectionIntro, margin: "0 auto" }}>
              Our solutions and processes are designed to meet the regulatory,
              safety, cybersecurity, and engineering expectations of modern
              industrial environments.
            </p>
          </div>

          <div className="row g-3">
            {certificationItems.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div style={styles.certCard} className="tv-hover-card">
                  <p style={styles.certTitle}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section
  style={{
    ...styles.section,
    padding: "0",
    background: "transparent",
  }}
  className="tv-section"
>
  <div style={styles.glowTopRight}></div>
  <div style={styles.glowBottomLeft}></div>

  {/* 🔥 FULL WIDTH CTA (NO CONTAINER) */}
  <div
    style={{
      ...styles.closingBox,
      width: "100%",
      marginTop: "40px",   // ✅ space ABOVE CTA
    marginBottom: "40px",
      borderRadius: "0",
      padding: "100px 0", // reduced spacing
    }}
    className="tv-closing-box"
  >
    <div style={styles.closingTop}>
      Building Trust Through Engineering Excellence
    </div>

    <h2 style={styles.closingTitle}>
      Precision. Performance. Partnership.
    </h2>

    <p style={styles.closingText}>
      ThetaVega does not just deliver projects — we deliver long-term
      industrial transformation through structured engineering,
      intelligent automation, digital systems, and execution discipline.
    </p>

    <p style={styles.closingText}>
      With a strong industrial foundation and a future-focused approach,
      we are building solutions that help manufacturers grow with
      confidence, clarity, and capability.
    </p>

    <p style={styles.closingStrong}>
      Engineering Tomorrow, Today.
    </p>
  </div>
</section>
    </div>
  );
};

export default About;