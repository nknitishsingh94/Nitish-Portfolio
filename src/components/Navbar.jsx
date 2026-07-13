import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Resume", to: "/resume" },
  { label: "About me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.8rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* --- Left Logo + Name --- */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/ns-logo.png" alt="NS Logo" style={{ width: 40, height: 40, borderRadius: "50%" }} />
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: 0, fontSize: 14 }}>Nitish Singh</h1>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              Full Stack Developer - MERN
            </div>
          </div>
        </div>

        {/* --- Center Navigation Links (Desktop) --- */}
        <div
          className="desktop-nav-links"
          style={{
            display: "none",
            justifyContent: "flex-end", // Align to the right
            gap: "2rem", // Slightly increased gap for better spacing
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              style={{
                position: "relative",
                fontSize: "0.95rem",
                textDecoration: "none",
                color: "white",
                fontWeight: 500,
              }}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <motion.span
                    animate={{
                      color: isActive ? "var(--accent)" : "white",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "70%",
                        height: "2px",
                        marginTop: "4px",
                        borderRadius: "1px",
                        backgroundColor: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* --- Hamburger Menu Icon (Mobile) --- */}
        <div className="mobile-menu-icon" style={{ display: "none" }}>
          <button
            onClick={toggleMenu}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Navigation Menu (Sidebar Drawer) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "260px",
              height: "100vh",
              background: "rgba(15, 17, 20, 0.95)",
              backdropFilter: "blur(15px)",
              padding: "6rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1.8rem",
              zIndex: 999,
              borderLeft: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "-10px 0 30px rgba(0,0,0,0.8)",
            }}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                onClick={closeMenu}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "var(--accent)" : "#ccc",
                  fontSize: "1.2rem",
                  fontWeight: isActive ? "bold" : "500",
                  width: "100%",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  paddingBottom: "0.5rem"
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @media (min-width: 901px) {
            .desktop-nav-links {
              display: flex !important;
            }
            .mobile-menu-icon {
              display: none !important;
            }
          }
          @media (max-width: 900px) {
            .desktop-nav-links {
              display: none !important;
            }
            .mobile-menu-icon {
              display: block !important;
            }
            .nav {
              padding: 0.8rem 1rem !important;
            }
          }
        `}
      </style>
    </>
  );
}
