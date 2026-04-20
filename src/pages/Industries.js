
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auto1 from "../assets/images/auto1.png";
import auto2 from "../assets/images/auto2.png";
import auto3 from "../assets/images/auto3.png";
// AUTO ANCILLARIES
import autoan1 from "../assets/images/autoan1.jpg";
import autoan2 from "../assets/images/autoan2.jpg";
import autoan3 from "../assets/images/autoan3.jpg";

// CONSUMER DURABLES
import cons1 from "../assets/images/cons1.jpg";
import cons2 from "../assets/images/cons2.jpg";
import cons3 from "../assets/images/cons3.jpg";

// FOOD & BEVERAGE
import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";

// PHARMA
import pharm1 from "../assets/images/pharm1.jpg";
import pharm2 from "../assets/images/pharm2.jpg";
import pharm3 from "../assets/images/pharm3.jpg";

// METALS
import meta1 from "../assets/images/meta1.jpg";
import meta2 from "../assets/images/meta2.jpg";
import meta3 from "../assets/images/meta3.jpg";

// PROCESS
import proc1 from "../assets/images/proc1.jpg";
import proc2 from "../assets/images/proc2.jpg";
import proc3 from "../assets/images/proc3.jpg";

// INFRA
import infra1 from "../assets/images/infra1.jpg";
import infra2 from "../assets/images/infra2.jpg";
import infra3 from "../assets/images/infra3.jpg";


const Industries = () => {

  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

const autoImages = [auto1, auto2, auto3];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % autoImages.length);
  }, 2500);

  return () => clearInterval(interval);
}, [autoImages.length]);
  return (
    <>
      {/* HERO SECTION */}
      <section
  style={{
    background:
      "linear-gradient(180deg, #ffffff 0%, rgba(245,244,241,0.55) 100%)",
    padding: "100px 20px",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* BACKGROUND GLOW */}
  <div
    style={{
      position: "absolute",
      top: "-100px",
      right: "-100px",
      width: "400px",
      height: "400px",
      background:
        "radial-gradient(circle, rgba(219,153,65,0.15), transparent 70%)",
      borderRadius: "50%",
      zIndex: 0,
    }}
  />

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "50px",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 1,
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: "1 1 500px", position: "relative" }}>
      <div style={{ marginBottom: "20px" }}>
        <span
          style={{
            backgroundColor: "rgba(145, 111, 66, 0.15)",
            color: "var(--tv-red)",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "1px",
            padding: "6px 14px",
            borderRadius: "20px",
          }}
        >
          INDUSTRIES
        </span>
      </div>

      <h1
        style={{
          fontSize: "46px",
          fontWeight: "700",
          color: "var(--tv-dark)",
          marginBottom: "20px",
          lineHeight: "1.2",
        }}
      >
        Engineering Expertise Across{" "}
        <span style={{ color: "var(--tv-red)" }}>
          Critical Industries
        </span>
      </h1>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.78,
          color: "rgb(57, 68, 77)",
          maxWidth: "760px",
          marginBottom: "14px",
        }}
      >
        ThetaVega delivers industry-specific automation and digital solutions
        tailored to the unique challenges of each sector.
      </p>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.78,
          color: "rgb(57, 68, 77)",
          maxWidth: "760px",
          marginBottom: "14px",
        }}
      >
        Our strength lies in combining deep process understanding + advanced
        engineering + digital intelligence to create scalable, high-performance
        systems.
      </p>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.78,
          color: "rgb(57, 68, 77)",
          maxWidth: "760px",
          marginBottom: "14px",
        }}
      >
        From discrete manufacturing to process industries, we enable
        organizations to achieve efficiency, traceability, and operational
        excellence.
      </p>
    </div>
    {/* RIGHT IMAGE PLACEHOLDER */}
    <div
      style={{
        flex: "1 1 450px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "500px",
          borderRadius: "16px",
          background: "#E5E5DF", // placeholder color
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          fontSize: "14px",
          border: "2px dashed #ccc",
        }}
      >
         <img
    src="/images/industry.jpg"
    alt="Industry"
    style={{
      width: "100%",
      maxWidth: "500px",
      height: "320px",
      objectFit: "cover",
      borderRadius: "16px",
    }}
  />
      </div>
      </div>
  </div>
</section>
      {/* AUTOMOTIVE SECTION */}
      <div
  style={{
    textAlign: "center",
   marginBottom:"-30px",
  }}
>
  <p
  style={{
    display: "inline-block",
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "rgb(174, 44, 17)",
    marginBottom: "-90px", 
       
    textAlign: "center",
    
  }}
>
  Solutions Built for Industry We Serve
</p>
</div>

      {/* ================= INDUSTRIES CONTENT ================= */}

{[
  {
    title: "Automotive & EV",
    cards: [
      {
        img: [auto1, auto2, auto3],
        heading: "Industry Challenges",
        points: [
          "High-volume production with strict takt time",
          "Complex multi-stage assembly processes",
          "Requirement of 100% traceability",
          "Zero-defect manufacturing expectations",
          "Integration with OEM ERP systems",
        ],
      },
      {
       
        heading: "ThetaVega Solutions",
        points: [
          "End-to-end assembly line automation",
          "Engine & EV battery traceability systems",
          "Smart torqueing & process confirmation",
          "OperateX MES for production intelligence",
          "Robotic and vision-integrated systems",
        ],
      },
      {
       
        heading: "Typical Systems Deployed",
        points: [
          "Engine assembly traceability lines",
          "EV cell sorting & welding systems",
          "Leak testing & EOL testing systems",
          "Tool data acquisition systems",
        ],
      },
      {
        heading: "Case References",
        points: [
         " Hero MotoCorp – Engine assembly traceability ",
           "Bajaj Auto – Smart indexing & process control ",
            "Ather Energy – EV cell line automation ",


        ],


      },
    ],
  },

  {
    title: "Auto Ancillaries",
    cards: [
      {
        img: [autoan1, autoan2, autoan3],
        heading: "Industry Challenges",
        points: [
          "High mix, low volume production",
          "Quality consistency across batches",
          "Machine-level data visibility",
          "Manual inspection limitations",
        ],
      },
      {
       
        heading: "ThetaVega Solutions",
        points: [
          "CNC machine monitoring systems",
          "SPC & quality analytics",
          "Vision-based inspection systems",
          "Smart assembly & testing stations",
        ],
      },
      {
       
        heading: "Typical Systems Deployed",
        points: [
          "Machine monitoring dashboards (OEE)",
          "Gauge data integration systems",
          "Inspection automation systems",
          "Production tracking solutions",
        ],
      },
      {
        heading: "Case References",
        points: [
         "GNA Enterprises – Wheel sorting & inspection ",
        "Tier-1 suppliers – CNC monitoring & analytics ",



        ],


      },
    ],
  },

  {
    title: "Consumer Durables",
    cards: [
      {
        img: [cons1, cons2, cons3],
        heading: "Industry Challenges",
        points: [
          "Fast-changing product variants",
          "Assembly accuracy requirements",
          "Cost pressure with high volumes",
          "Manual dependency in assembly",
        ],
      },
      {
        
        heading: "ThetaVega Solutions",
        points: [
          "Flexible assembly line automation",
          "Vision inspection for quality control",
          "Digital production tracking",
          "Operator-guided smart stations",
        ],
      },
      {
       
        heading: "Typical Systems Deployed",
        points: [
          "Assembly workstations with SOP display",
          "Barcode-based tracking systems",
          "Vision inspection stations",
          "Production dashboards",
        ],
      },
      {
        heading: "Case References",
        points: [
         "Appliance manufacturers – Assembly automation ",
        " Electronics OEMs – Inspection & traceability ",
         ],
        },


    ],
  },

  {
  title: "Food & Beverage",
  cards: [
    {
      img: [food1,food2, food3],
      heading: "Industry Challenges",
      points: [
        "Hygiene and regulatory compliance",
        "Batch traceability requirements",
        "Packaging speed & accuracy",
        "Energy & utility optimization",
      ],
    },
    {
      
      heading: "ThetaVega Solutions",
      points: [
        "Batch tracking & traceability systems",
        "Packaging line automation",
        "Utility monitoring (energy, water, air)",
        "SCADA-based plant monitoring",
      ],
    },
    {
     
      heading: "Typical Systems Deployed",
      points: [
        "Batch processing control systems",
        "Packaging automation lines",
        "Utility dashboards",
        "Quality monitoring systems",
      ],
    },

    {
        heading: "Case References",
        points: [
         "FMCG plants – Packaging automation  ",
        " Food processing units – Utility monitoring  ",
         ],
        },

  ],
},

{
  title: "Pharma & Life Sciences",
  cards: [
    {
      img: [pharm1,pharm2 ,pharm3],

      heading: "Industry Challenges",
      points: [
        "Strict regulatory compliance (FDA, GMP)",
        "Data integrity & audit trails",
        "Serialization & traceability",
        "Cleanroom automation requirements",
      ],
    },
    {
      
      heading: "ThetaVega Solutions",
      points: [
        "CFR 21 Part 11 compliant systems",
        "Batch traceability & serialization",
        "SCADA & BMS integration",
        "Digital audit & reporting systems",
      ],
    },
    {
     
      heading: "Typical Systems Deployed",
      points: [
        "Pharma SCADA systems",
        "Serialization tracking systems",
        "Cleanroom monitoring systems",
        "Quality data logging solutions",
      ],
    },
    
    {
        heading: "Case References",
        points: [
         "Pharma companies – Compliance systems ",
        "  Healthcare manufacturing – Monitoring solutions ",
         ],
        },
  ],
},

{
  title: "Metals & Mining",
  cards: [
    {
      img: [meta1, meta2,meta3],
      heading: "Industry Challenges",
      points: [
        "Harsh operating environments",
        "Heavy machinery integration",
        "Energy-intensive processes",
        "Lack of real-time monitoring",
      ],
    },
    {
     
      heading: "ThetaVega Solutions",
      points: [
        "Heavy-duty automation systems",
        "Energy monitoring & optimization",
        "SCADA-based plant control",
        "Predictive maintenance systems",
      ],
    },
    {
    
      heading: "Typical Systems Deployed",
      points: [
        "Furnace control systems",
        "Conveyor automation systems",
        "Energy monitoring dashboards",
        "Equipment health monitoring",
      ],
    },
    {
        heading: "Case References",
        points: [
         "Steel plants – Process automation ",
        "  Mining units – Conveyor monitoring ",
         ],
        },
  ],
},

{
  title: "Process Industries",
  cards: [
    {
      img: [proc1, proc2,proc3],
      heading: "Industry Challenges",
      points: [
        "Continuous process control",
        "Safety-critical operations",
        "Complex instrumentation",
        "Real-time monitoring needs",
      ],
    },
    {
      
      heading: "ThetaVega Solutions",
      points: [
        "PLC/SCADA-based process control",
        "Instrumentation integration",
        "Alarm & safety systems",
        "Centralized control rooms",
      ],
    },
    {
      
      heading: "Typical Systems Deployed",
      points: [
        "Distributed control systems (DCS-like)",
        "SCADA monitoring systems",
        "Alarm management systems",
        "Process analytics dashboards",
      ],
    },
     {
        heading: "Case References",
        points: [
         "Chemical plants – SCADA systems ",
        "  Oil & gas – Monitoring solutions  ",
         ],
        },
  ],
},

{
  title: "Infrastructure & Utilities",
  cards: [
    {
      img: [infra1, infra2,infra3],
      heading: "Industry Challenges",
      points: [
        "Energy efficiency & cost control",
        "Distributed asset monitoring",
        "Remote management requirements",
        "Sustainability goals",
      ],
    },
    {
      
      heading: "ThetaVega Solutions",
      points: [
        "Solar SCADA & remote monitoring",
        "Building Management Systems (BMS)",
        "Energy analytics dashboards",
        "Smart utility control systems",
      ],
    },
    {
      
      heading: "Typical Systems Deployed",
      points: [
        "Solar plant monitoring systems",
        "Utility dashboards (power, water, air)",
        "BMS automation systems",
        "Remote IoT monitoring platforms",
      ],
    },
     {
        heading: "Case References",
        points: [
         "Industrial solar plants – SCADA systems ",
        "   Commercial infrastructure – BMS solutions  ",
         ],
        },
  ],
},

 ].map((industry, i) => (
  <div
    key={i}
    style={{
      padding: "50px 20px",
      background: i % 2 === 0 ? "#ffffff" : "#E5E5DF",
    }}
  >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* TITLE */}
      {/* TITLE */}
<div
  style={{
    textAlign: "center",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      display: "inline-block",
      position: "relative",
    }}
  >
    <h2
      style={{
        fontSize: "30px",
        fontWeight: "700",
        marginTop: "10px",
        marginBottom: "0", // 🔥 important (remove extra gap)
        color: "var(--tv-dark)",
      }}
    >
      {industry.title}
    </h2>

    <span
      style={{
        position: "absolute",
        left: "0", // ✅ starts from FIRST LETTER
        bottom: "-10px",
        width: "60px",
        height: "4px",
        background: "linear-gradient(90deg, #AE2C11, #DB9941)",
        borderRadius: "2px",
      }}
    />
  </div>
</div>
      

      {/* SPLIT LAYOUT */}
      <div
        style={{
          display: "flex",
          flexDirection: i % 2 === 0 ? "row" : "row-reverse",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* IMAGE */}
        <div style={{ flex: "1 1 450px" }}>
          <div
            style={{
              width: "100%",
              height: "380px",
              borderRadius: "18px",
              overflow: "hidden",
              position: "relative",
            }}
          >
          {Array.isArray(industry.cards[0].img) ? industry.cards[0].img.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                style={{
                  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: index === currentImage ? 1 : 0,
  transform: index === currentImage ? "scale(1.08)" : "scale(1)",
  transition: "opacity 1s ease-in-out, transform 6s ease",
                 
                }}
              />
            ))
             :(
      <img
        src={industry.cards[0].img}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    )
}
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ flex: "1 1 500px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {industry.cards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  padding: "18px",
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                  borderLeft: "3px solid #DB9941",
                  transition: "all 0.35s ease", // 🔥 important
                  cursor: "pointer",
                  
                }}
                onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
    e.currentTarget.style.boxShadow =
      "0 18px 35px rgba(0,0,0,0.12)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow =
      "0 8px 20px rgba(0,0,0,0.05)";
  }}
              >
                <h4
                  style={{
                    color: "#AE2C11",
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {card.heading}
                </h4>

                <ul style={{ padding: 0, margin: 0 }}>
                  {card.points.map((p, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginBottom: "6px",
                        fontSize: "13px",
                        color: "#555",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          background: "#AE2C11",
                          borderRadius: "50%",
                          marginTop: "6px",
                        }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
))}   {/* ✅ MAP CLOSED PROPERLY */}
{/* ================= CTA ================= */}
   
   
     <div
  style={{
    textAlign: "center",
    padding: "100px 0",
    color: "#fff",
    background: "linear-gradient(180deg, #07111D 0%, #13263B 100%)",
    marginTop: "40px",   // ✅ space ABOVE CTA
    marginBottom: "40px" // ✅ space BELOW CTA
  }}

> <p
    style={{
      color: "var(--tv-gold)",
      fontWeight: "600",
      fontSize: "14px",
      letterSpacing: "1px",
      marginBottom: "12px",
    }}
  >
    CUSTOMIZED • SCALABLE • INDUSTRY-READY SOLUTIONS
  </p>
  {/* MAIN TITLE */}
  <h2
    style={{
      fontSize: "36px",
      fontWeight: "800",
      color: "var(--tv-white)",
      marginBottom: "15px",
    }}
  >
    Built for Your Industry. Engineered for Performance.
  </h2>

  {/* SHORT HIGHLIGHT LINE (IMPORTANT) */}
 

  {/* DESCRIPTION */}
  <p
    style={{
      fontSize: "16px",
      color: "var(--tv-white)",
      maxWidth: "650px",
      margin: "0 auto 35px",
      lineHeight: "1.6",
    }}
  >
    No matter your sector,ThetaVega delivers <strong style={{ color: "var(--tv-light)" }}>customized solutions aligned with your operational realities.</strong> 
  </p>

  {/* BUTTONS */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
    }}
  >
    {/* PRIMARY BUTTON */}
    <button
      onClick={() => navigate("/solutions")}
      style={{
        background: "linear-gradient(135deg,var(--tv-red),var(--tv-gold))",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "30px",
        border: "none",
        fontWeight: "500",
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
      }}
    >
      Explore Industry Solutions →
    </button>

    {/* SECONDARY BUTTON */}
    <button
     onClick={() => navigate("/contact")}

      style={{
        background: "#fff",
        color:"var(--tv-red)",
        padding: "14px 28px",
        borderRadius: "30px",
        border: "2px solid var(--tv-gold)",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--tv-red)";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "var(--tv-red)";
      }}
    >
      Talk to Our Domain Experts
    </button>
  </div>
</div>
    </>
    
  );
};

export default Industries;