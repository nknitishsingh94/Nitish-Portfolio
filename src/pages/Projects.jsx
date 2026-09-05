import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

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
  if (project.ss && !genericImages.includes(project.ss)) {
    return project.ss;
  }
  if (project.live && project.live !== '#' && project.live.startsWith('http')) {
    return `https://v1.screenshot.11ty.dev/${encodeURIComponent(project.live)}/large/`;
  }
  return '/portfolio.jpg';
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const p = PROJECTS[currentIndex];

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <motion.h2
          className="text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            background: 'linear-gradient(90deg, var(--accent), #fff)', 
            WebkitBackgroundClip: 'text', 
            color: 'transparent',
            display: 'inline-block'
          }}
        >
          Featured Projects
        </motion.h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)' }}>
          A collection of my major works — blending modern UI design with robust functionality.
        </p>
      </div>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '1000px', 
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 10px'
      }}>
        
        {/* Navigation Buttons */}
        <button onClick={prevProject} style={{
          position: 'absolute', left: '-20px', zIndex: 10,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', padding: '15px', color: '#fff', cursor: 'pointer',
          backdropFilter: 'blur(10px)', boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          transition: 'all 0.3s'
        }}
        onMouseOver={e => e.currentTarget.style.background = 'var(--accent)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          <ChevronLeft size={28} />
        </button>

        <button onClick={nextProject} style={{
          position: 'absolute', right: '-20px', zIndex: 10,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', padding: '15px', color: '#fff', cursor: 'pointer',
          backdropFilter: 'blur(10px)', boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          transition: 'all 0.3s'
        }}
        onMouseOver={e => e.currentTarget.style.background = 'var(--accent)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          <ChevronRight size={28} />
        </button>

        {/* Slider Card */}
        <div style={{ width: '100%', overflow: 'hidden', borderRadius: 24, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(145deg, rgba(30,35,45,0.9), rgba(15,20,25,1))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}
            >
              {/* Image Section */}
              <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <img
                  src={getScreenshotUrl(p)}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,20,25,1) 0%, rgba(15,20,25,0) 40%)',
                }}></div>
              </div>

              {/* Content Section */}
              <div style={{ padding: '30px 40px', marginTop: '-60px', position: 'relative', zIndex: 2 }}>
                <h3 style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 700, 
                  color: '#fff', 
                  marginBottom: '1rem',
                  textShadow: '0 0 20px rgba(255,255,255,0.2)'
                }}>
                  {p.title}
                </h3>
                <p style={{ 
                  fontSize: '1.15rem', 
                  color: 'rgba(255,255,255,0.8)', 
                  marginBottom: '1.5rem', 
                  lineHeight: 1.7,
                  maxWidth: '800px'
                }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(50, 215, 75, 0.15)',
                        border: '1px solid rgba(50, 215, 75, 0.3)',
                        padding: '6px 16px',
                        borderRadius: 30,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--accent)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
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
                      gap: '8px',
                      flex: 1,
                      maxWidth: '200px',
                      background: 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      padding: '12px 0',
                      borderRadius: 14,
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      border: '1px solid rgba(255,255,255,0.2)',
                      textDecoration: 'none',
                      transition: 'background 0.3s'
                    }}
                  >
                    <Github size={20} /> Source Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(50, 215, 75, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      flex: 1,
                      maxWidth: '200px',
                      background: 'var(--accent)',
                      color: '#000',
                      padding: '12px 0',
                      borderRadius: 14,
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 5px 20px rgba(50, 215, 75, 0.3)',
                      transition: 'box-shadow 0.3s'
                    }}
                  >
                    <ExternalLink size={20} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Dots Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
        {PROJECTS.map((_, idx) => (
          <div 
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            style={{ 
              width: currentIndex === idx ? '30px' : '10px', 
              height: '10px', 
              borderRadius: '5px',
              background: currentIndex === idx ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }} 
          />
        ))}
      </div>
    </motion.section>
  )
}
