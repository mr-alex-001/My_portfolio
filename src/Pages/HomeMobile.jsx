import React from 'react';
import './HomeMobile.css';

function HomeMobile() {
  return (
    <section id="home" className="hm-section">
      {/* Premium Network Graph Background */}
      <div className="hm-bg-grid">
        <div className="hm-grid-line"></div>
        <div className="hm-grid-line"></div>
        <div className="hm-grid-line"></div>
        <div className="hm-grid-line"></div>
        <div className="hm-grid-line"></div>
        <div className="hm-grid-line"></div>
        <div className="hm-grid-line"></div>
      </div>
      
      <div className="hm-bg-nodes">
        <div className="hm-node"></div>
        <div className="hm-node"></div>
        <div className="hm-node"></div>
        <div className="hm-node"></div>
        <div className="hm-node"></div>
        <div className="hm-node"></div>
        <div className="hm-node"></div>
        <div className="hm-node"></div>
      </div>
      
      <div className="hm-bg-connections">
        <div className="hm-connection"></div>
        <div className="hm-connection"></div>
        <div className="hm-connection"></div>
        <div className="hm-connection"></div>
      </div>
      
      <div className="hm-bg-particles">
        <div className="hm-data-particle"></div>
        <div className="hm-data-particle"></div>
        <div className="hm-data-particle"></div>
        <div className="hm-data-particle"></div>
        <div className="hm-data-particle"></div>
        <div className="hm-data-particle"></div>
        <div className="hm-data-particle"></div>
        <div className="hm-data-particle"></div>
      </div>
      
      <div className="hm-bg-shapes">
        <div className="hm-shape hm-shape-1"></div>
        <div className="hm-shape hm-shape-2"></div>
        <div className="hm-shape hm-shape-3"></div>
        <div className="hm-shape hm-shape-4"></div>
      </div>
      
      <div className="hm-container">
        <div className="hm-content">
          <div className="hm-text">
            <div className="hm-greeting-wrapper">
              <span className="hm-greeting-line"></span>
              <span className="hm-greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="hm-name-title">
              <span className="hm-name-first">Alex</span>
              <span className="hm-name-last">Renny</span>
            </h1>
            
            <div className="hm-role-wrapper">
              <div className="hm-typing-container">
                <span className="hm-static-text">I'm a </span>
                <div className="hm-dynamic-text-wrapper">
                  <span className="hm-dynamic-text">
                    {/* Text content handled by CSS animation */}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="hm-description">
              Crafting innovative digital experiences with clean code and creative design. 
              Passionate about building solutions that make a difference.
            </p>
            
            <div className="hm-cta-buttons">
              <a href="#projects" className="hm-btn hm-btn-primary">
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="hm-btn hm-btn-secondary">
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 5.83333L10 10.4167L17.5 5.83333M2.5 14.1667L10 10.4167L17.5 14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="hm-social-proof">
              <div className="hm-stats">
                <div className="hm-stat-item">
                  <span className="hm-stat-number">5+</span>
                  <span className="hm-stat-label">Project Build</span>
                </div>
                <div className="hm-stat-divider"></div>
                <div className="hm-stat-item">
                  <span className="hm-stat-number">2</span>
                  <span className="hm-stat-label">Internships</span>
                </div>
                <div className="hm-stat-divider"></div>
                <div className="hm-stat-item">
                  <span className="hm-stat-number">8+</span>
                  <span className="hm-stat-label">Certificates</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hm-visual">
            <div className="hm-profile-container">
              {/* Premium Glowing Orbs */}
              <div className="hm-orb hm-orb-1"></div>
              <div className="hm-orb hm-orb-2"></div>
              <div className="hm-orb hm-orb-3"></div>
              
              <div className="hm-profile-shape">
                {/* Shine Sweep Overlay */}
                <div className="hm-shine-sweep"></div>
                
                {/* Sparkle Effects */}
                <div className="hm-profile-overlay-effects">
                  <div className="hm-sparkle"></div>
                  <div className="hm-sparkle"></div>
                  <div className="hm-sparkle"></div>
                  <div className="hm-sparkle"></div>
                  <div className="hm-sparkle"></div>
                </div>
                
                <div className="hm-profile-image-wrapper">
                  <img
                    src="/MobileHome_image.png"
                    alt="Alex Renny - Portfolio"
                    className="hm-profile-image"
                  />
                </div>
              </div>
              
              {/* Premium Floating Cards */}
              <div className="hm-floating-card hm-card-1">
                <div className="hm-card-text">
                  <small>Available for</small>
                  <strong>Freelance</strong>
                </div>
              </div>
              
              <div className="hm-floating-card hm-card-2">
                <div className="hm-card-text">
                  <small>Cyber Forensics</small>
                  <strong>Student</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hm-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="hm-scroll-mouse">
            <div className="hm-scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMobile;