import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🏠 PropertyX (Real-estate Project)',
    desc: 'A premium MERN-stack real estate marketplace featuring property listings, advanced search filters, user profiles, and agent contact options.',
    ss: '/ISL.png',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://property-x-seven.vercel.app/',
    code: 'https://github.com/nknitishsingh94/PropertyX'
  },
  {
    title: '⚡ Smart100X Automation',
    desc: 'A feature-rich workflow and process automation website designed to streamline tasks, manage schedules, and optimize business processes.',
    ss: '/automation.jpg',
    tech: ['React', 'Node.js', 'Express.js', 'Supabase', 'REST APIs', 'Talwind CSS'],
    live: 'https://dm-automation-roan.vercel.app',
    code: 'https://github.com/nknitishsingh94/DM-Automation'
  },
  {
    title: '💬 ZenXChat AI',
    desc: 'An intelligent conversational AI chatbot powered by Gemini API, featuring natural chat experiences and interactive document querying (PDF interaction).',
    ss: '/Docuchat.png',
    tech: ['Gemini API', 'JavaScript', 'React', 'HTML', 'CSS'],
    live: 'https://zen-xchat.vercel.app',
    code: 'https://github.com/nknitishsingh94/ZenXchat'
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Framer Motion', 'CSS'],
    live: 'https://nitish-portfolio-azure.vercel.app/',
    code: 'https://github.com/nknitishsingh94/Nitish-Portfolio'
  },
  {
    title: '☕ BrewHaven Cafe',
    desc: 'A beautifully designed, fully responsive restaurant and specialty cafe website with an interactive menu, reservation booking, and custom customer reviews.',
    ss: '/cafe.jpg',
    tech: ['React', 'Framer Motion', 'CSS'],
    live: 'https://cafe-and-cake-bakery.vercel.app',
    code: 'https://github.com/nknitishsingh94/Cafe-and-Cake-Bakery'
  },
  {
    title: '✨ NfGlance (Mehndi Artist Portfolio)',
    desc: 'A vibrant portfolio showcase website for a professional Nf artist, showcasing design galleries across multiple categories (Bridal, Festive) and integrated booking requests.',
    ss: '/mehndi.jpg',
    tech: ['React', 'Framer Motion', 'CSS'],
    live: 'https://mehandi-website-pi.vercel.app',
    code: 'https://github.com/nknitishsingh94/Mehandi-Website'
  }
]

const getScreenshotUrl = (project) => {
  const genericImages = ['/portfolio.jpg', '/automation.jpg', '/cafe.jpg', '/mehndi.jpg'];
  // Use custom uploaded images if they exist
  if (project.ss && !genericImages.includes(project.ss)) {
    return project.ss;
  }
  // Otherwise, automatically fetch a HIGH QUALITY screenshot of THEIR live website
  if (project.live && project.live !== '#' && project.live.startsWith('http')) {
    return `https://v1.screenshot.11ty.dev/${encodeURIComponent(project.live)}/large/`;
  }
  return '/portfolio.jpg';
};

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ 
        background: 'rgba(255,255,255,0.02)', 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 24, 
        padding: '40px 30px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
      }}>
        <motion.h2
          className="text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ 
            background: 'linear-gradient(90deg, var(--accent), #fff)', 
            WebkitBackgroundClip: 'text', 
            color: 'transparent' 
          }}
        >
          Featured Projects
        </motion.h2>
        <p className="mb-10" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)' }}>
          A collection of my major works — blending modern UI design with robust functionality.
        </p>

        <div className="projects-grid" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '150px', 
          marginTop: '60px',
          paddingBottom: '20vh' 
        }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true, margin: '-50px' }}
              style={{
                position: 'sticky',
                top: `calc(12vh + ${idx * 25}px)`,
                background: 'linear-gradient(145deg, rgba(30,35,45,0.8), rgba(15,20,25,0.95))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 24,
                padding: 30,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 -15px 40px rgba(0,0,0,0.5), 0 20px 40px rgba(0,255,255,0.05)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <motion.div 
                className="ss-container" 
                style={{ 
                  borderRadius: 14, 
                  overflow: 'hidden', 
                  position: 'relative',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
                  marginBottom: '1.2rem'
                }}
              >
                <motion.img
                  src={getScreenshotUrl(p)}
                  alt={p.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    height: '40vh',
                    minHeight: '280px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: 14,
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
                  borderRadius: 14,
                  pointerEvents: 'none'
                }}></div>
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 700, 
                  color: '#fff', 
                  marginBottom: '0.8rem',
                  marginTop: '0.5rem',
                  letterSpacing: '0.02em',
                  textShadow: '0 0 20px rgba(255,255,255,0.2)'
                }}>
                  {p.title}
                </h3>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'rgba(255,255,255,0.7)', 
                  marginBottom: '1.5rem', 
                  lineHeight: 1.7,
                  flex: 1
                }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(50, 215, 75, 0.1)',
                        border: '1px solid rgba(50, 215, 75, 0.2)',
                        padding: '6px 14px',
                        borderRadius: 30,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'var(--accent)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      flex: 1,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      padding: '10px 0',
                      borderRadius: 12,
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      border: '1px solid rgba(255,255,255,0.1)',
                      textDecoration: 'none',
                      transition: 'background 0.3s'
                    }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(50, 215, 75, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      flex: 1,
                      background: 'var(--accent)',
                      color: '#000',
                      padding: '10px 0',
                      borderRadius: 12,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      boxShadow: '0 4px 15px rgba(50, 215, 75, 0.2)',
                      transition: 'box-shadow 0.3s'
                    }}
                  >
                    <ExternalLink size={16} /> Live App
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
