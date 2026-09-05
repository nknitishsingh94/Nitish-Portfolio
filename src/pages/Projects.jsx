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
  if (project.ss && !genericImages.includes(project.ss)) {
    return project.ss;
  }
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
      style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            color: '#fff',
            display: 'inline-block',
            letterSpacing: '1px'
          }}
        >
          Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
        </motion.h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
          Explore a collection of my latest work, showcasing expertise in modern web development and AI integration.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '30px', 
      }}>
        {PROJECTS.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, margin: '-50px' }}
            style={{
              background: 'rgba(20, 20, 25, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '20px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 255, 200, 0.3)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 255, 200, 0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            }}
          >
            {/* Image Container */}
            <div style={{ 
              borderRadius: '12px', 
              overflow: 'hidden', 
              position: 'relative',
              marginBottom: '20px'
            }}>
              <img
                src={getScreenshotUrl(p)}
                alt={p.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,20,25,0.9) 0%, rgba(15,20,25,0) 50%)',
                pointerEvents: 'none'
              }}></div>
            </div>

            {/* Content */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 600, 
                color: '#fff', 
                marginBottom: '10px',
                letterSpacing: '0.5px'
              }}>
                {p.title}
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: 'rgba(255,255,255,0.6)', 
                marginBottom: '20px', 
                lineHeight: 1.5,
                flex: 1
              }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.8)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    flex: 1,
                    background: 'transparent',
                    color: '#fff',
                    padding: '10px 0',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    border: '1px solid rgba(255,255,255,0.15)',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    flex: 1,
                    background: 'var(--accent)',
                    color: '#000',
                    padding: '10px 0',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.opacity = '0.9' }}
                  onMouseOut={(e) => { e.currentTarget.style.opacity = '1' }}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
