import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Nitish Singh
            </h3>
            <p style={{ marginTop: 8, fontSize: 15, color: "#ccc" }}>
              4th Year B.Tech — Computer Science and Engineering | R.R Group of Institutions
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Lucknow, Uttar Pradesh
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ nknitishsingh92@gmail.com | 📞 (+91) 8795919866
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 380,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>About Me / Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Enthusiastic and detail-oriented MERN Stack Developer with hands-on experience in building responsive and dynamic web applications. Skilled in React.js, Node.js, Express.js, and MongoDB, with a strong focus on API integration, and backend logic. Passionate about full-stack development, problem solving and AI.
            </p>
          </motion.div>
        </motion.div>

        {/* Achievements / Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🏅 Achievements & Certifications
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li>
              ✨ <strong>Completed MERN</strong> — TECHPILE Technology Pvt. Ltd
            </li>
            <li style={{ marginTop: 8 }}>
              🐍 <strong>Completed Python Workshop</strong> — Internshala{" "}
              <a
                href="https://trainings.internshala.com/s/v/3449397/8caff99b"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00b4ff", textDecoration: "none", marginLeft: 6 }}
              >
                [View Credential ↗]
              </a>
            </li>
            <li style={{ marginTop: 8 }}>
              💡 <strong>Solved 100+ problems on LeetCode</strong>{" "}
              <a
                href="https://leetcode.com/u/nitishsingh78004/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00b4ff", textDecoration: "none", marginLeft: 6 }}
              >
                [LeetCode Profile ↗]
              </a>
            </li>
            <li style={{ marginTop: 8 }}>
              ⭐ <strong>4-Star Coder in Python</strong> — HackerRank{" "}
              <a
                href="https://www.hackerrank.com/profile/nknitishsingh92"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00b4ff", textDecoration: "none", marginLeft: 6 }}
              >
                [HackerRank Profile ↗]
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Experience & Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 30,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Experience & Internships
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Full Stack Developer Intern</strong> — The Getnow Company (Remote) <br />
              <span style={{ color: "#aaa" }}>March 2024 – Present</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Blockchain Development Trainee</strong> — Chroma Campus, Delhi <br />
              <span style={{ color: "#aaa" }}>Ongoing</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>MERN Stack Development Intern (45 Days)</strong> — Techpile <br />
              <span style={{ color: "#aaa" }}>Completed</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Web Development Intern</strong> — Internshala <br />
              <span style={{ color: "#aaa" }}>Completed</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Python Intern</strong> — Internshala <br />
              <span style={{ color: "#aaa" }}>Completed</span>
            </li>
          </ul>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 30,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech | R.Rgroup of institutions, Lucknow</strong> (2022–2026) <br />
              <span style={{ color: "#ccc" }}>Field of Study: Computer Science and Engineering</span> <br />
              <span style={{ color: "#00b4ff" }}>Current CGPA: 7.4 CGPA</span>
            </li>
            <li style={{ marginTop: 10 }}>
              <strong>12th | J. Inter College (U.P Board)</strong> (2020–2022) <br />
              <span style={{ color: "#aaa" }}>Aggregate: 74%</span>
            </li>
            <li style={{ marginTop: 10 }}>
              <strong>10th | J. Inter College (U.P Board)</strong> (2018–2020) <br />
              <span style={{ color: "#aaa" }}>Aggregate: 78%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🚀 Key Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li>
              ⚡ <strong>Smart100X (Automation and Scheduling Website):</strong> Designed to help businesses automate customer engagement, increase lead conversions, reduce manual effort, and manage all customer interactions from a centralized platform.{" "}
              <span style={{ color: "#00b4ff", fontSize: 13 }}>(Technology: MERN + Supabase)</span>{" "}
              <a href="https://dm-automation-alpha.vercel.app" target="_blank" rel="noreferrer" style={{ color: "#00b4ff", textDecoration: "none" }}>[Live Demo ↗]</a>
            </li>
            <li style={{ marginTop: 12 }}>
              🏠 <strong>Real-Estate Website (PropertyX):</strong> Developed a secure and efficient Real-Estate using MERN, utilizing randomization techniques to create suitable and practical use cases in real life.{" "}
              <span style={{ color: "#00b4ff", fontSize: 13 }}>(Technology: MERN)</span>{" "}
              <a href="https://property-x-seven.vercel.app" target="_blank" rel="noreferrer" style={{ color: "#00b4ff", textDecoration: "none" }}>[Live Demo ↗]</a>
            </li>
            <li style={{ marginTop: 12 }}>
              💜 <strong>Vibely chat and calling Website:</strong> Built to help connect privately and chat with each other in private with real-time audio/video calls.{" "}
              <span style={{ color: "#00b4ff", fontSize: 13 }}>(Technology: TypeScript, Next.js, WebRTC)</span>{" "}
              <a href="https://vibely-sigma-roan.vercel.app" target="_blank" rel="noreferrer" style={{ color: "#00b4ff", textDecoration: "none" }}>[Live Demo ↗]</a>
            </li>
            <li style={{ marginTop: 12 }}>
              ⚖️ <strong>Legel-AI Website:</strong> Provides informational legal assistance, contract analysis, and automated legal drafting with Gemini API.{" "}
              <span style={{ color: "#00b4ff", fontSize: 13 }}>(Technology: React.js, CSS, JavaScript, Gemini API)</span>{" "}
              <a href="https://legel-ai.vercel.app" target="_blank" rel="noreferrer" style={{ color: "#00b4ff", textDecoration: "none" }}>[Live Demo ↗]</a>
            </li>
            <li style={{ marginTop: 12 }}>
              📊 <strong>Report-Matching Website:</strong> Developed a tool to compare master reports with multiple smaller reports using Caller IDs, extension numbers, and date-wise records.{" "}
              <span style={{ color: "#00b4ff", fontSize: 13 }}>(Technology: React.js, CSS, JavaScript, Gemini API)</span>{" "}
              <a href="https://report-matching-luke.vercel.app" target="_blank" rel="noreferrer" style={{ color: "#00b4ff", textDecoration: "none" }}>[Live Demo ↗]</a>
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>

          <div style={{ marginBottom: 16 }}>
            <p style={{ color: "#aaa", fontSize: 14, marginBottom: 8 }}><strong>Hard Skills:</strong></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "TypeScript",
                "MERN Stack",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Supabase (SQL)",
                "Blockchain (Basic)",
                "Solidity",
                "Python",
                "Git & GitHub",
                "DSA",
                "OOP",
                "DBMS",
                "Communication Skills",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#ccc",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: "#aaa", fontSize: 14, marginBottom: 8 }}><strong>Soft Skills:</strong></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "Problem Solving",
                "Collaboration",
                "Adaptability",
                "Time Management",
                "Leadership",
                "Critical Thinking",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#ccc",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coding & Social Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 25,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/nitishsingh78004/" },
            { name: "⭐ HackerRank", link: "https://www.hackerrank.com/profile/nknitishsingh92" },
            { name: "💻 GitHub", link: "https://github.com/Nitish78004" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/nitishsingh27/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/Nitish Resume (1).pdf"
            title="Nitish Singh Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/Nitish Resume (1).pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
