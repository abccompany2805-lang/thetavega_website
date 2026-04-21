import React from "react";
import { FaCogs, FaProjectDiagram, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();
   const sectionStyle = {
    padding: "60px 0", // increased spacing
  };

  const solutions = [
    {
      title: "Factory Automation & Control Systems",
      problem:
        "Modern manufacturing lines suffer from fragmented control systems and downtime inefficiencies.",
      approach:
        "Robust PLC, HMI, SCADA, and motion control solutions.",
      architecture: [
        "PLC: Mitsubishi / Siemens / Omron",
        "Protocols: OPC-UA, Profinet, EtherCAT",
        "SCADA monitoring",
        "MES / ERP integration",
      ],
      useCases: [
        "Assembly line automation",
        "Robotics integration",
        "Motion systems",
      ],
      outcome: ["↑ Productivity up to 30%", "↓ Downtime", "↑ Consistency"],
    },
    {
      title: "Machine Building (SPM & Assembly Lines)",
      problem:
        "Standard machines fail to meet custom production requirements.",
      approach:
        "Custom Special Purpose Machines tailored to production.",
      architecture: [
        "CAD + Simulation",
        "PLC + Servo + Vision",
        "Modular stations",
      ],
      useCases: ["Leak testing", "Laser marking", "Assembly systems"],
      outcome: ["↑ Precision", "↑ Throughput", "↓ Manual dependency"],
    },
    {
      title: "Panel Building & Electrical Systems",
      problem: "Poor panel design leads to failures and safety risks.",
      approach:
        "UL/IEC-compliant panels engineered for reliability.",
      architecture: [
        "EPLAN design",
        "IP55/IP65 protection",
        "Segregated wiring",
      ],
      useCases: ["PLC panels", "MCC panels", "Smart distribution"],
      outcome: ["↑ Reliability", "↑ Safety", "↓ Maintenance"],
    },
    {
      title: "MES & Digital Manufacturing (OperateX)",
      problem:
        "Lack of real-time visibility and decision-making.",
      approach:
        "OperateX MES platform for digital manufacturing.",
      architecture: [
        "IoT + PLC integration",
        "Microservices",
        "React dashboards",
      ],
      useCases: [
        "OEE monitoring",
        "Production tracking",
        "Predictive maintenance",
      ],
      outcome: ["↑ OEE 15–25%", "↑ Decision speed"],
    },
    {
      title: "Traceability & Quality Systems",
      problem: "Lack of traceability leads to quality failures.",
      approach:
        "End-to-end traceability systems across lifecycle.",
      architecture: [
        "Barcode / RFID",
        "Central database",
        "MES integration",
      ],
      useCases: ["Part tracking", "Poka-yoke", "Genealogy systems"],
      outcome: ["100% traceability", "↑ Quality", "↓ Rework"],
    },
    {
      title: "Vision Inspection Systems",
      problem:
        "Manual inspection causes inconsistency and errors.",
      approach:
        "AI-based automated inspection systems.",
      architecture: [
        "Cognex / Keyence",
        "Edge AI processing",
        "PLC integration",
      ],
      useCases: ["OCR/OCV", "Defect detection", "Inspection systems"],
      outcome: ["↑ Accuracy >99%", "↑ Speed", "↓ Human dependency"],
    },
    {
      title: "IIoT & Data Integration",
      problem:
        "Machines operate in silos without unified data.",
      approach:
        "Seamless machine connectivity and data integration.",
      architecture: [
        "OPC-UA, MQTT",
        "IoT gateways",
        "Cloud integration",
      ],
      useCases: [
        "Machine monitoring",
        "Energy tracking",
        "Multi-plant integration",
      ],
      outcome: ["↑ Visibility", "↑ Integration"],
    },
    {
      title: "Utility & Smart Infrastructure",
      problem: "Utilities are poorly monitored causing wastage.",
      approach:
        "Smart monitoring with analytics and optimization.",
      architecture: [
        "Sensors + PLC",
        "SCADA dashboards",
        "Cloud analytics",
      ],
      useCases: [
        "Energy management",
        "Water monitoring",
        "BMS integration",
      ],
      outcome: ["↓ Cost 10–25%", "↑ Sustainability"],
    },

  ];

  return (
    <div>

      {/* ================= STYLE ================= */}
      <style>{`

      /* HERO */
      .solution-hero {
        padding: 125px 0;
        background: linear-gradient(135deg,#f8fafc,#eef2f6);
        position: relative;
        overflow: hidden;
      }

      .solution-hero::after {
        content: "";
        position: absolute;
        right: -100px;
        top: -70px;
        width: 450px;
        height: 450px;
        background: radial-gradient(circle, rgba(174,44,17,0.15), transparent);
        filter: blur(60px);
      }

      .solution-hero h1 {
        font-weight: 800;
        font-size: 2.6rem;
        color: #07111D;
      }

      .solution-hero span {
        color: var(--tv-red);
      }

      .solution-hero p {
        margin-top: 15px;
        color: #555;
        max-width: 520px;
      }
        .solution-modern-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 24px;
          border-left: 4px solid var(--tv-red);
          box-shadow: 0 12px 30px rgba(7,17,29,0.05);
          transition: all 0.35s ease;
          height: 100%;
        }
        .solution-modern-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 55px rgba(7,17,29,0.15);
        }

        .solution-modern-card.alt {
          border-left: 4px solid var(--tv-gold);
        }

        .solution-modern-card.highlight {
          background: linear-gradient(135deg, #07111D 0%, #1b2f45 100%);
          color: #fff;
        }

        .solution-modern-card.highlight li {
          color: rgba(255,255,255,0.85);
        }

      /* CTA BUTTONS */
      .hero-btn {
        padding: 12px 22px;
        border-radius: 999px;
        font-weight: 600;
        border: none;
        transition: 0.3s;
      }

      .btn-primary {
        background: linear-gradient(135deg,var(--tv-red),var(--tv-gold));
        color: #fff;
      }

      .btn-secondary {
        background: #fff;
        border: 1px solid #ddd;
      }

      .hero-btn:hover {
        transform: translateY(-3px);
      }

      /* RIGHT VISUAL */
      .hero-visual {
        background: #fff;
        border-radius: 22px;
        padding: 20px;
        box-shadow: 0 25px 60px rgba(0,0,0,0.08);
      }

      .mini-card {
        background: #f6f8fb;
        padding: 12px;
        border-radius: 12px;
        margin-bottom: 10px;
        font-size: 0.85rem;
      }

      /* INTRO */
      .intro {
        margin-top: -120px;
        position: relative;
        z-index: 2;
      }

      .intro-card {
        background: #fff;
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        max-width: 700px;
        margin: auto;
      }

      /* CARDS */
      .solution-card {
        background: #fff;
        border-radius: 18px;
        padding: 22px;
        box-shadow: 0 12px 30px rgba(0,0,0,0.05);
        transition: 0.3s;
      }

      .solution-card:hover {
        transform: translateY(-6px);
      }

      .highlight {
        background: linear-gradient(135deg,#07111D,#1b2f45);
        color: #fff;
      }

     

      /* MOBILE */
      @media(max-width:768px){
        .solution-hero {
          text-align:center;
        }

        .solution-hero h1 {
          font-size: 1.9rem;
        }

        .hero-visual {
          margin-top:30px;
        }
      }

      /* Problem (red tone) */
.ps-card.problem {
  background: rgba(174, 44, 17, 0.06);
  border-left: 4px solid var(--tv-red);
}

.ps-card.problem h6 {
  color: var(--tv-red);
}

/* Solution (gold tone) */
.ps-card.solution {
  background: rgba(219, 153, 65, 0.08);
  border-left: 4px solid var(--tv-gold);
}

.ps-card.solution h6 {
  color: var(--tv-dark);
}

/* Hover effect */
.ps-card:hover {
  transform: translateY(-4px);
}

.intro-section {
  margin-top: -80px; /* pulls it into hero */
  padding-bottom: 40px;
  position: relative;
  z-index: 2;
}

.intro-card {
  background: #fff;
  padding: 35px;
  border-radius: 18px;
  box-shadow: 0 25px 60px rgba(7,17,29,0.12);
  max-width: 750px;
  margin: auto;
}

.intro-card p {
  margin: 0;
  color: var(--tv-slate);
  font-size: 1.05rem;
}
  section {
  margin-bottom: 40px;
}

.section-header {
  margin-bottom: 25px;
}

.section-header h2 {
  font-weight: 800;
  color: var(--tv-dark);
}

.section-line {
  width: 50px;
  height: 4px;
  background: var(--tv-gold);
  margin-top: 10px;
  border-radius: 10px;
}

/* ===== PROBLEM & SOLUTION CARD SHAPE UPGRADE ===== */

.ps-card {
  border-radius: 20px;
  padding: 22px 20px;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* LEFT CURVE EFFECT (like architecture card) */
.ps-card.problem {
  background: rgba(174, 44, 17, 0.06);
  border-left: 4px solid var(--tv-red);
  border-radius: 20px 20px 20px 40px; /* 👈 key change */
}

/* RIGHT CURVE EFFECT (like outcome card feel) */
.ps-card.solution {
  background: rgba(219, 153, 65, 0.08);
  border-left: 4px solid var(--tv-gold);
  border-radius: 20px 40px 20px 20px; /* 👈 key change */
}

/* HEADINGS */
.ps-card h6 {
  font-weight: 700;
  margin-bottom: 10px;
}

/* TEXT */
.ps-card p {
  margin: 0;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* HOVER */
.ps-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(7,17,29,0.12);
}
  /* ===== HERO VISUAL FLOAT ===== */
.hero-visual {
  background: #fff;
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.08);
  animation: floatCard 6s ease-in-out infinite;
}

/* smooth floating container */
@keyframes floatCard {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}


/* ===== MINI CARD BASE ===== */
.mini-card {
  background: #f6f8fb;
  padding: 14px 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.35s ease;

  opacity: 0;
  transform: translateY(25px);
  animation: fadeUp 0.6s ease forwards;
}

/* stagger animation */
.mini-card:nth-child(1) { animation-delay: 0.2s; }
.mini-card:nth-child(2) { animation-delay: 0.4s; }
.mini-card:nth-child(3) { animation-delay: 0.6s; }
.mini-card:nth-child(4) { animation-delay: 0.8s; }

/* hover interaction */
.mini-card:hover {
  transform: translateX(6px) scale(1.03);
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(7,17,29,0.12);
  color: #AE2C11;
}


/* ===== ENTRY ANIMATION ===== */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-tag {
display: inline-block; 
font-size: 20px; 
font-weight: 700; 
letter-spacing: 2px; 
text-transform: uppercase; 
color: rgb(174, 44, 17); 
margin-bottom: 8px; 
text-align: center; 
width: 100%;
 margin-top: 30px;     /* ⬆️ increase space ABOVE */
  margin-bottom: 2px;
  

 


      `}</style>

      {/* ================= HERO ================= */}
      <section className="solution-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <h1>
                Engineering Solutions for <span>Smart Manufacturing</span>
              </h1>

              <p>
                We design intelligent systems that connect machines,
                data, and operations into a unified digital factory.
              </p>

              <div className="d-flex gap-3 mt-4">
                
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="mini-card">Automation Systems</div>
                <div className="mini-card">MES & Digital Factory</div>
                <div className="mini-card">IIoT Integration</div>
                <div className="mini-card">Smart Infrastructure</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="intro">
        <div className="container">
          <div className="intro-card">
            From factory automation to digital manufacturing platforms, our solutions are built on scalable architectures, global standards, and real-world execution expertise.
We don’t just supply systems — we engineer complete ecosystems for productivity, traceability, and intelligent decision-making.

          </div>
        </div>
      </section>

       <div className="text-center"
        style={{   marginTop: "40px", marginBottom: "0px"}} >
    <span className="section-tag">
      Smart Manufacturing Solutions
    </span>
  </div>

    

      {/* ================= SOLUTIONS ================= */}
      {solutions.map((sol, index) => (
        
        <section
          key={index}
          style={{
            ...sectionStyle,
            background:
              index % 2 === 0
                ? "var(--tv-white)"
                : "var(--tv-light)",
          }}
        >
          
          <div className="container fade-in">
       

            

            <div className="section-header">
               <h2>{sol.title}</h2>
                  <div className="section-line"></div>
            </div>

            <div className="row mt-4 g-4">

  {/* Problem */}
  <div className="col-md-6">
    <div className="ps-card problem">
      <h6>⚠ Problem</h6>
      <p>{sol.problem}</p>
    </div>
  </div>

  {/* Solution */}
  <div className="col-md-6">
    <div className="ps-card solution">
      <h6>✔ Solution</h6>
      <p>{sol.approach}</p>
    </div>
  </div>

</div>

            <div className="row mt-5 g-4">

              <div className="col-md-4">
                <div className="solution-modern-card">
                  <div className="solution-modern-icon">
                    <FaCogs />
                    
                  </div>
                  <h6>Architecture</h6>
                  <ul>
                    {sol.architecture.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="solution-modern-card alt">
                  <div className="solution-modern-icon">
                    <FaProjectDiagram />
                  </div>
                  <h6>Use Cases</h6>
                  <ul>
                    {sol.useCases.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="solution-modern-card highlight">
                  <div className="solution-modern-icon">
                    <FaChartLine />
                  </div>
                  <h6>Outcome</h6>
                  <ul>
                    {sol.outcome.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>
      ))}

      {/* ================= CTA ================= */}
      <section style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #07111D 0%, #13263B 100%)",
        color: "#fff",
        textAlign: "center",
      }}>
        <div className="container fade-in">
          <h2>Let’s Engineer Your Next Transformation</h2>
          <p style={{ maxWidth: "600px", margin: "20px auto" }}>
            Build or upgrade your factory with scalable solutions.
          </p>

          <button 
          onClick={() => navigate("/contact")}
          style={{
            background: "linear-gradient(135deg,var(--tv-red),var(--tv-gold))",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
       
        transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 15px 35px var(--tv-red)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px var(--tv-red)";
      }}>
            Talk to Our Engineers
          </button>
        </div>
      </section>


    </div>
  );
};

export default Solutions;