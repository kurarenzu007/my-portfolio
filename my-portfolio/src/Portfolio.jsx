import React, { useState, useEffect, useRef } from 'react';
import { Code2, Server, Database, PenTool, Mail, Github, Linkedin, ExternalLink, ArrowRight, Sparkles, Download } from 'lucide-react';
import imgProfile from './assets/clarence_f.jpg'
const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observers = [];
    const elements = document.querySelectorAll('.fade-in-section');
    
    elements.forEach((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [el.id]: true }));
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const projects = [
    {
      title: "Animal Adoption Platform(Frontend)",
      role: "Personal Project",
      tech: ["React", "Vite", "Bootstrap"],
      desc: "A compassionate, responsive web platform designed to connect shelter animals with forever homes. Features a modern, mobile-first UI with engaging storytelling elements and smooth animations.",
      gradient: "linear-gradient(to right, #10b981, #0ea5e9)", 
      link: "https://kurarenzu007.github.io/AnimalAdoption/"
    },
    {
      title: "Auto Parts Inventory System",
      role: "Thesis Project",
      tech: ["React", "Node.js", "MySQL"],
      desc: "Full-stack inventory management platform with real-time stock tracking, automated alerts, and comprehensive transaction history. Implemented secure authentication and role-based access control.",
      gradient: "linear-gradient(to right, #3b82f6, #06b6d4)",
      link: "https://tjc-autosupply.vercel.app/"
    },
    {
      title: "Clinic Appointment System",
      role: "Academic Project",
      tech: ["React", "Node", "Express", "MySQL"],
      desc: "Streamlined patient scheduling platform that digitized manual processes, reducing appointment conflicts by 80% and improving clinic workflow efficiency.",
      gradient: "linear-gradient(to right, #a855f7, #ec4899)",
      link: "https://github.com/kurarenzu007/clinic-appointment"
    }
  ];

  const skills = [
    { 
      name: "Web & Programming", 
      icon: <Code2 size={24} />, 
      items: ["JavaScript", "Java", "PHP", "HTML/CSS"],
      color: "linear-gradient(to bottom right, #60a5fa, #22d3ee)"
    },
    { 
      name: "Frameworks", 
      icon: <Server size={24} />, 
      items: ["React", "Node.js"],
      color: "linear-gradient(to bottom right, #c084fc, #f472b6)"
    },
    { 
      name: "Databases", 
      icon: <Database size={24} />, 
      items: ["MySQL"],
      color: "linear-gradient(to bottom right, #4ade80, #10b981)"
    },
    { 
      name: "Design & Other", 
      icon: <PenTool size={24} />, 
      items: ["Figma", "Adobe Photoshop", "Technical Documentation"],
      color: "linear-gradient(to bottom right, #fb923c, #ef4444)"
    },
    { 
      name: "Vibe Coding", 
      icon: <Sparkles size={24} />, 
      items: ["Flow State Programming", "Intuitive Debugging", "Clean Architecture", "Rhythmic Refactoring"],
      color: "linear-gradient(to bottom right, #8b5cf6, #ec4899)"
    }
  ];

  const nextSkill = () => {
    setCurrentSkillIndex((prev) => {
      const next = prev + 4;
      return next >= skills.length ? 0 : next;
    });
  };

  const prevSkill = () => {
    setCurrentSkillIndex((prev) => {
      const previous = prev - 4;
      return previous < 0 ? Math.max(0, skills.length - 4) : previous;
    });
  };

  const goToSkill = (index) => {
    setCurrentSkillIndex(index);
  };

  const displayedSkills = skills.slice(currentSkillIndex, currentSkillIndex + 4);
  const totalPages = Math.ceil(skills.length / 4);
  const currentPage = Math.floor(currentSkillIndex / 4);

  return (
    <div className={`portfolio ${isDark ? 'dark' : 'light'}`}>
      {/* Animated Background Gradient Orbs */}
      <div className="bg-orbs">
        <div 
          className="orb orb-1"
          style={{
            background: isDark ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' : 'linear-gradient(to right, #60a5fa, #a78bfa)',
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />
        <div 
          className="orb orb-2"
          style={{
            background: isDark ? 'linear-gradient(to left, #ec4899, #f59e0b)' : 'linear-gradient(to left, #f472b6, #fbbf24)',
            right: `${mousePosition.x / 30}px`,
            bottom: `${mousePosition.y / 30}px`,
          }}
        />
      </div>

      {/* Theme Toggle */}
      <button onClick={() => setIsDark(!isDark)} className="theme-toggle">
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Image Side */}
            <div className="hero-image-container">
              <div className="profile-wrapper">
                <div className="profile-glow"></div>
                <div className="profile-border">
                  <img 
                    src={imgProfile} 
                    alt="Clarence F. Felicilda" 
                    className="profile-image" 
                  />
                </div>
                <div className="availability-badge">
                  <Sparkles size={20} />
                  Available
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="hero-content">
              <div className="hero-intro">
                <div className="intro-label">
                  <span className="intro-line"></span>
                  HELLO, I'M
                </div>
                <h1 className="hero-title">
                  Clarence F.
                  <br />
                  <span className="gradient-text">Felicilda</span>
                </h1>
              </div>
              
              <p className="hero-subtitle">
                4th Year BSIT Student | Cavite State University
              </p>
              
              <p className="hero-description">
                Aspiring full-stack developer passionate about crafting elegant solutions to complex problems. 
                I transform ideas into efficient, scalable software that makes a difference.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  Explore Work
                  <ArrowRight size={20} className="btn-icon" />
                </a>
                <a href="mailto:clarence.felicilda007@gmail.com" className="btn btn-secondary">
                  <Mail size={20} />
                  Get In Touch
                </a>
                <a href="./TechnicalResume.pdf" download="Clarence_Felicilda_Resume.pdf" target="_blank" className="btn btn-resume">
                  <Download size={20} />
                  Download Resume
                </a>
              </div>

              <div className="social-links">
                <a href="https://github.com/kurarenzu007" className="social-link" target="_blank" rel="noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/clarence-felicilda-13667728a" target="_blank" rel="noreferrer" className="social-link">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-border">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header fade-in-section" id="skills-header">
            <h2 className="section-title">Technical Arsenal</h2>
            <p className="section-subtitle">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="skills-carousel">
            <div className="carousel-container">
              <button onClick={prevSkill} className="carousel-btn carousel-btn-prev" disabled={currentSkillIndex === 0}>
                <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
              </button>
              
              <div className="carousel-track">
                <div className="skills-grid-carousel">
                  {displayedSkills.map((skill, i) => (
                    <div
                      key={`${currentSkillIndex}-${i}`}
                      className="skill-card"
                      style={{ 
                        animation: 'fadeInScale 0.5s ease-out forwards',
                        animationDelay: `${i * 100}ms`
                      }}
                    >
                      <div className="skill-icon" style={{ background: skill.color }}>
                        {skill.icon}
                      </div>
                      <h3 className="skill-name">{skill.name}</h3>
                      <ul className="skill-items">
                        {skill.items.map((item, j) => (
                          <li key={j} className="skill-item">
                            <span className="skill-bullet" style={{ background: skill.color }}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <button onClick={nextSkill} className="carousel-btn carousel-btn-next" disabled={currentSkillIndex + 4 >= skills.length}>
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="carousel-dots">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToSkill(i * 4)}
                  className={`carousel-dot ${currentPage === i ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header fade-in-section" id="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing real-world applications and academic achievements
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`project-card fade-in-section ${isVisible['projects-header'] ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 200}ms` }}
                id={`project-${i}`}
              >
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-wrapper">
                    <div className="project-header" style={{ background: project.gradient }}></div>
                    
                    <div className="project-content">
                      <div className="project-title-row">
                        <div>
                          <h3 className="project-title">{project.title}</h3>
                          <span className="project-role" style={{ 
                            background: project.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>
                            {project.role}
                          </span>
                        </div>
                        <ExternalLink size={20} className="project-link-icon" />
                      </div>

                      <p className="project-description">{project.desc}</p>

                      <div className="project-tech">
                        {project.tech.map((tech, j) => (
                          <span key={j} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-hover-overlay" style={{ background: project.gradient }}></div>
                  </a>
                ) : (
                  <>
                    <div className="project-header" style={{ background: project.gradient }}></div>
                    
                    <div className="project-content">
                      <div className="project-title-row">
                        <div>
                          <h3 className="project-title">{project.title}</h3>
                          <span className="project-role" style={{ 
                            background: project.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>
                            {project.role}
                          </span>
                        </div>
                      </div>

                      <p className="project-description">{project.desc}</p>

                      <div className="project-tech">
                        {project.tech.map((tech, j) => (
                          <span key={j} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-hover-overlay" style={{ background: project.gradient }}></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2026 Clarence F. Felicilda. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;