import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Data Structure & Algorithm (Intermediate)",
      org: "TrainX",
      date: "Dec 2025",
      img: "/certs/TrainX_DSA.png?v=2",
      link: "/certs/TrainX_DSA.png?v=2",
      rotate: true,
    },
    {
      title: "MERN Stack Training (45 Days)",
      org: "Techpile Technology",
      date: "Aug 2025",
      img: "/certs/MERN.jpg",
      link: "/certs/MERN.jpg",
    },
    {
      title: "Web Development",
      org: "Intersala",
      date: "2024",
      img: "/certs/Web Development.jpg",
      link: "/certs/Web Development.jpg",
    },
    {
      title: "Programming in Python with AI",
      org: "Intersala",
      date: "2024",
      img: "/certs/WhatsApp Image 2025-11-11 at 00.23.48_72551b54.jpg",
      link: "/certs/WhatsApp Image 2025-11-11 at 00.23.48_72551b54.jpg",
    }
  ],
  other: [
    {
      title: "BlockChain",
      org: "Youtube Tutorials",
      date: "2025",
      img: "/certs/cert3.svg",
      link: "/certs/cert3.svg",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <div style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 10,
                  overflow: "hidden",
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#111"
                }}>
                  <img
                    src={c.img}
                    alt={c.title}
                    style={{
                      width: c.rotate ? "auto" : "100%",
                      height: c.rotate ? "200%" : "100%",
                      objectFit: "cover",
                      transform: c.rotate ? "rotate(-90deg)" : "none",
                    }}
                  />
                </div>
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8, rotate: selectedCert.rotate ? -90 : 0 }}
              animate={{ scale: 1, rotate: selectedCert.rotate ? -90 : 0 }}
              exit={{ scale: 0.8, rotate: selectedCert.rotate ? -90 : 0 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
