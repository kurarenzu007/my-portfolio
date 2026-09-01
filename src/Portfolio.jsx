import React, { useState, useEffect, useRef } from 'react';
import { Code2, Server, Database, PenTool, Mail, Github, Linkedin, ExternalLink, ArrowRight, Sparkles, Download, Menu, X } from 'lucide-react';
import imgProfile from './assets/clarence_f.jpg';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isVisible, setIsVisible] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const skills = [
    { label: 'JavaScript', category: 'lang' },
    { label: 'Java', category: 'lang' },
    { label: 'PHP', category: 'lang' },
    { label: 'HTML/CSS', category: 'lang' },
    { label: 'React', category: 'framework' },
    { label: 'Node.js', category: 'framework' },
    { label: 'Express', category: 'framework' },
    { label: 'Vite', category: 'framework' },
    { label: 'Bootstrap', category: 'framework' },
    { label: 'MySQL', category: 'db' },
    { label: 'Figma', category: 'tool' },
    { label: 'Adobe Photoshop', category: 'tool' },
    { label: 'Git', category: 'tool' },
    { label: 'Technical Documentation', category: 'tool' },
  ];

  const skillCategories = [
    { key: 'lang', label: 'Languages', icon: <Code2 size={18} />, color: 'linear-gradient(135deg, #60a5fa, #22d3ee)' },
    { key: 'framework', label: 'Frameworks & Libraries', icon: <Server size={18} />, color: 'linear-gradient(135deg, #c084fc, #f472b6)' },
    { key: 'db', label: 'Databases', icon: <Database size={18} />, color: 'linear-gradient(135deg, #4ade80, #10b981)' },
    { key: 'tool', label: 'Tools & Other', icon: <PenTool size={18} />, color: 'linear-gradient(135deg, #fb923c, #ef4444)' },
  ];

  const projects = [
    {
      title: 'Student Clearance Management System',
      role: 'OJT Project',
      tech: ['React 19', 'Vite', 'Supabase', 'PostgreSQL', 'Recharts'],
      desc: 'Full-stack clearance platform for STI that digitizes the entire student clearance workflow — no paper, no queues. Multi-role schema (students, teachers, admins) with Supabase RLS enforcing per-role data access. Features real-time approvals, bulk actions, PDF certificate export, live analytics dashboard with charts, and a clearance period lock toggle persisted via system_settings. Deployed to production on Vercel.',
      gradient: 'linear-gradient(to right, #003DA5, #FFD100)',
      link: 'https://sti-clearance.vercel.app/',
      github: 'https://github.com/kurarenzu007/clearance-management',
    },
    {
      title: 'Animal Adoption Platform',
      role: 'Personal Project',
      tech: ['React', 'Vite', 'Bootstrap'],
      desc: 'A responsive web platform connecting shelter animals with potential adopters. Architected a mobile-first UI with dynamic filtering, animal profile pages, and smooth page transitions. Deployed live on GitHub Pages.',
      gradient: 'linear-gradient(to right, #10b981, #0ea5e9)',
      link: 'https://kurarenzu007.github.io/AnimalAdoption/',
      github: null,
    },
    {
      title: 'Auto Parts Inventory System',
      role: 'Thesis Project',
      tech: ['React', 'Node.js', 'MySQL'],
      desc: 'Full-stack inventory management system with a multi-role database schema supporting admin and staff access. Built a REST API with Express handling stock tracking, low-stock alerts, and transaction history. Secured with JWT authentication and deployed to production at tjcsims.com.',
      gradient: 'linear-gradient(to right, #3b82f6, #06b6d4)',
      link: 'https://tjcsims.com',
      github: null,
    },
    {
      title: 'Apartment Management System',
      role: 'Personal Project',
      tech: ['React', 'Vite', 'React Router', 'jsPDF'],
      desc: 'Full-featured property management app with a multi-role schema separating admin and tenant permissions. Covers tenant registration, unit tracking, rent collection, maintenance requests, and complaint handling. Includes PDF report generation and is deployed on Vercel.',
      gradient: 'linear-gradient(to right, #f59e0b, #ef4444)',
      link: 'https://github.com/kurarenzu007/jjj-apartment',
      github: 'https://github.com/kurarenzu007/jjj-apartment',
    },
    {
      title: 'Clinic Appointment System',
      role: 'Academic Project',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      desc: 'Patient scheduling system that replaced a manual paper-based process. Designed a relational schema for doctors, patients, and appointments. Built an Express API handling availability management, booking logic, and patient records — significantly reducing scheduling conflicts.',
      gradient: 'linear-gradient(to right, #a855f7, #ec4899)',
      link: 'https://github.com/kurarenzu007/clinic-appointment',
      github: 'https://github.com/kurarenzu007/clinic-appointment',
    },
  ];

  return (
    <div className={`portfolio ${isDark ? 'dark' : 'light'}`}>

      {/* Nav */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">CF.</a>
          <div className="nav-links-desktop">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href="./TechnicalResume.pdf" download="Clarence_Felicilda_Resume.pdf" className="btn btn-primary btn-sm">
              <Download size={16} /> Resume
            </a>
            <button onClick={() => setIsDark(!isDark)} className="theme-toggle-inline">
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="nav-mobile-right">
            <button onClick={() => setIsDark(!isDark)} className="theme-toggle-inline">
              {isDark ? '☀️' : '🌙'}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="nav-mobile-menu">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="nav-link-mobile" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="./TechnicalResume.pdf" download="Clarence_Felicilda_Resume.pdf" className="nav-link-mobile">Download Resume</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-image-container">
              <div className="profile-wrapper">
                <div className="profile-glow"></div>
                <div className="profile-border">
                  <img src={imgProfile} alt="Clarence F. Felicilda" className="profile-image" />
                </div>
                <div className="availability-badge">
                  <Sparkles size={16} /> Open to Work
                </div>
              </div>
            </div>
            <div className="hero-content">
              <div className="intro-label">
                <span className="intro-line"></span> HELLO, I'M
              </div>
              <h1 className="hero-title">
                Clarence F.<br />
                <span className="gradient-text">Felicilda</span>
              </h1>
              <p className="hero-subtitle">Full-Stack Software Developer · BSIT Graduate · Cavite State University</p>
              <p className="hero-description">
                Full-Stack Software Developer specializing in React, Node.js, and Relational Database Architecture. I build web applications end-to-end — from schema design to production deployment — with a focus on clean system architecture and efficient workflows.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View Projects <ArrowRight size={18} className="btn-icon" />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <Mail size={18} /> Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/kurarenzu007" className="social-link" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/clarence-felicilda-13667728a" className="social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-border"><div className="scroll-dot"></div></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="container">
          <div className={`fade-in-section ${isVisible['about-header'] ? 'visible' : ''}`} id="about-header">
            <div className="about-card">
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                I'm a BSIT graduate from Cavite State University specializing in full-stack web development. I've built projects ranging from inventory systems to patient scheduling platforms, working across the full stack with React, Node.js, and MySQL — with a focus on clean relational database design and production-ready deployments.
              </p>
              <p className="about-text">
                I'm comfortable taking a feature from database schema to deployed UI — and I understand the network and hardware infrastructure underneath it. I'm looking for a role where I can work on real products, write clean code, and grow alongside experienced engineers.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number gradient-text">5</span>
                  <span className="stat-label">Projects Shipped</span>
                </div>
                <div className="stat">
                  <span className="stat-number gradient-text">4th</span>
                  <span className="stat-label">Year BSIT</span>
                </div>
                <div className="stat">
                  <span className="stat-number gradient-text">Full</span>
                  <span className="stat-label">Stack Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header fade-in-section" id="skills-header">
            <h2 className={`section-title ${isVisible['skills-header'] ? 'visible' : ''}`}>Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className={`skills-grid fade-in-section ${isVisible['skills-grid'] ? 'visible' : ''}`} id="skills-grid">
            {skillCategories.map(cat => (
              <div key={cat.key} className="skill-category-card">
                <div className="skill-cat-header">
                  <span className="skill-cat-icon" style={{ background: cat.color }}>{cat.icon}</span>
                  <h3 className="skill-cat-name">{cat.label}</h3>
                </div>
                <div className="skill-tags">
                  {skills.filter(s => s.category === cat.key).map(s => (
                    <span key={s.label} className="skill-tag">{s.label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience-section">
        <div className="container">
          <div className="section-header fade-in-section" id="experience-header">
            <h2 className={`section-title ${isVisible['experience-header'] ? 'visible' : ''}`}>Experience</h2>
            <p className="section-subtitle">Where I've applied my skills</p>
          </div>
          <div className={`experience-card fade-in-section ${isVisible['experience-card'] ? 'visible' : ''}`} id="experience-card">
            <div className="experience-header-row">
              <div>
                <h3 className="experience-title">IT Support Intern</h3>
                <p className="experience-company">STI College · On-the-Job Training · 486 hours</p>
              </div>
              <span className="experience-badge">OJT</span>
            </div>
            <ul className="experience-list">
              <li><strong>Network Configuration & Hardware Setup</strong> — Configured network settings, managed local connectivity, and assembled or troubleshot hardware configurations across workstation setups.</li>
              <li><strong>System Troubleshooting & Diagnostics</strong> — Diagnosed technical issues systematically, monitored system environments via CCTV, and resolved software and hardware locks across multiple workstations.</li>
              <li><strong>Software Testing & Proctoring</strong> — Verified software stability during testing phases and maintained digital environments during technical examinations to ensure academic integrity.</li>
            </ul>
            <p className="experience-note">These hands-on infrastructure tasks reinforce my development background — I understand both the code and the physical network infrastructure it runs on.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header fade-in-section" id="projects-header">
            <h2 className={`section-title ${isVisible['projects-header'] ? 'visible' : ''}`}>Projects</h2>
            <p className="section-subtitle">Things I've built</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`project-card fade-in-section ${isVisible[`project-${i}`] ? 'visible' : ''}`}
                id={`project-${i}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="project-accent" style={{ background: project.gradient }}></div>
                <div className="project-content">
                  <div className="project-title-row">
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-role" style={{
                        background: project.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>{project.role}</span>
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="View source on GitHub">
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && project.link !== project.github && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="View live demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-description">{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className={`fade-in-section ${isVisible['contact-header'] ? 'visible' : ''}`} id="contact-header">
            <div className="contact-card">
              <h2 className="section-title">Let's Work Together</h2>
              <p className="contact-subtitle">
                I'm currently open to full-stack developer roles and collaborative projects. If you have something in mind, feel free to reach out.
              </p>
              <div className="contact-actions">
                <a href="mailto:clarence.felicilda007@gmail.com" className="btn btn-primary">
                  <Mail size={18} /> Send an Email
                </a>
                <a href="https://linkedin.com/in/clarence-felicilda-13667728a" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <Linkedin size={18} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2026 Clarence F. Felicilda</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
