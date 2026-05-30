import React from 'react';
import './HomeMobile.css';

function HomeMobile() {
  return (
    <section id="home" className="home-section">
      {/* Premium Network Graph Background */}
      <div className="bg-grid">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
      
      <div className="bg-nodes">
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
      </div>
      
      <div className="bg-connections">
        <div className="connection"></div>
        <div className="connection"></div>
        <div className="connection"></div>
        <div className="connection"></div>
      </div>
      
      <div className="bg-particles">
        <div className="data-particle"></div>
        <div className="data-particle"></div>
        <div className="data-particle"></div>
        <div className="data-particle"></div>
        <div className="data-particle"></div>
        <div className="data-particle"></div>
        <div className="data-particle"></div>
        <div className="data-particle"></div>
      </div>
      
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <div className="greeting-wrapper">
              <span className="greeting-line"></span>
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="name-title">
              <span className="name-first">Alex</span>
              <span className="name-last">Renny</span>
            </h1>
            
            <div className="role-wrapper">
              <div className="typing-container">
                <span className="static-text">I'm a </span>
                <div className="dynamic-text-wrapper">
                  <span className="dynamic-text">
                    {/* Text content handled by CSS animation */}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="description">
              Crafting innovative digital experiences with clean code and creative design. 
              Passionate about building solutions that make a difference.
            </p>
            
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 5.83333L10 10.4167L17.5 5.83333M2.5 14.1667L10 10.4167L17.5 14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="social-proof">
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Project Build</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Internships</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Certificates</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="home-visual">
            <div className="profile-container">
              {/* Premium Glowing Orbs */}
              <div className="orb orb-1"></div>
              <div className="orb orb-2"></div>
              <div className="orb orb-3"></div>
              
              <div className="profile-shape">
                {/* Shine Sweep Overlay */}
                <div className="shine-sweep"></div>
                
                {/* Sparkle Effects */}
                <div className="profile-overlay-effects">
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                </div>
                
                <div className="profile-image-wrapper">
                  <img
                    src="/WhatsApp Image 2024-08-26 at 1.40.39 PM.jpeg"
                    alt="Alex Renny - Portfolio"
                    className="profile-image"
                  />
                </div>
              </div>
              
              {/* Premium Floating Cards */}
              <div className="floating-card card-1">
                <div className="card-icon">💻</div>
                <div className="card-text">
                  <small>Available for</small>
                  <strong>Freelance</strong>
                </div>
              </div>
              
              <div className="floating-card card-2">
                <div className="card-text">
                  <small>Cyber Forensics</small>
                  <strong>Student</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMobile;