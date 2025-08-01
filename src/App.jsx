import React, { useState, useEffect } from 'react';
import './App.css';
import logoImg from './assets/img/logo.png';
import andrzejImg from './assets/img/andrzej.png';
import jarekImg from './assets/img/jarek.png';
import linkedinImg from './assets/img/linkedin.png';
import brandsImg from './assets/img/brands.png';
import facebookImg from './assets/img/facebook.png';
import googlePlusImg from './assets/img/google-plus.png';
import twitterImg from './assets/img/twitter.png';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="ufo-container">
          <div className="ufo">
            <div className="ufo-body"></div>
            <div className="ufo-dome"></div>
            <div className="ufo-light"></div>
          </div>
        </div>
        <div className="boy-coy-logo">
          <img src={logoImg} alt="Boy-Coy" />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={logoImg} alt="Boy-Coy" />
            </div>
            <nav className="navigation">
              <ul>
                <li className={currentSection === 'home' ? 'active' : ''}>
                  <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                    HOME
                  </a>
                </li>
                <li className={currentSection === 'apps' ? 'active' : ''}>
                  <a href="#apps" onClick={(e) => { e.preventDefault(); scrollToSection('apps'); }}>
                    APPS
                  </a>
                </li>
                <li className={currentSection === 'about' ? 'active' : ''}>
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                    ABOUT
                  </a>
                </li>
                <li className={currentSection === 'contact' ? 'active' : ''}>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="stars-background"></div>
        <div className="ufo-animation">
          <div className="ufo">
            <div className="ufo-body"></div>
            <div className="ufo-dome"></div>
            <div className="ufo-light"></div>
          </div>
        </div>
        <div className="container">
          <div className="home-content">
            <h1>Boy-Coy - Creative Design Studio</h1>
            <div className="home-text">
              <p>Brand experience</p>
              <p>We are in the business for over 6 years. Our team members had pleasure to create for following brands in the past.</p>
            </div>
            <button 
              className="cta-button"
              onClick={() => scrollToSection('contact')}
            >
              Let's work together
            </button>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="apps-section">
        <div className="clouds-background"></div>
        <div className="container">
          <div className="apps-content">
            <div className="app-showcase">
              <div className="app-device">
                <div className="device-screen">
                  <div className="app-interface">
                    <div className="app-header">PowerBubble</div>
                    <div className="app-icon"></div>
                    <div className="app-description">
                      Best bubble level for your Android phone. Just look at it! It's beautiful, functional and easy to use - indispensable tool on every smartphone.
                    </div>
                  </div>
                </div>
                <div className="device-balloons"></div>
              </div>
              <div className="app-info">
                <div className="rating-badge">User rating ★★★★★</div>
                <div className="user-reviews">
                  <h3>User reviews</h3>
                  <div className="review">
                    <p>"Ultra Slick App. This is the most polished of all the level apps out there!!!"</p>
                    <span>— Keith</span>
                  </div>
                  <div className="review">
                    <p>"I just spent 10 minutes doing nothing but leveling everything in my office."</p>
                    <span>— Will</span>
                  </div>
                  <div className="review">
                    <p>"Works great, looks amazing. Top notch. Hopefully more devs will catch your spirit of polish."</p>
                    <span>— Drew</span>
                  </div>
                  <button className="more-reviews-btn">More user reviews ➤</button>
                </div>
              </div>
            </div>
            <div className="download-section">
              <div className="download-badge">
                <img src="/api/placeholder/120/40" alt="Download for free" />
              </div>
            </div>
          </div>
        </div>
        <div className="paper-planes"></div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="mountains-background"></div>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-card">
                <h2>Meet Boy-Coy</h2>
                <p>What it takes to achieve perfection? It is the question we are asking ourselves all the time. As an answer we created Boy-Coy - a creative design studio committed to creation of highest quality, no-compromise products.</p>
                
                <div className="team-section">
                  <h3>Boy-Coy Team</h3>
                  <div className="team-members">
                    <div className="team-member">
                      <img src={andrzejImg} alt="Andrzej Dus" />
                      <div className="member-info">
                        <h4>Andrzej Dus</h4>
                        <p>Co-founder, developer</p>
                        <a href="#" className="linkedin-link">
                          <img src={linkedinImg} alt="LinkedIn" />
                        </a>
                      </div>
                    </div>
                    <div className="team-member">
                      <img src={jarekImg} alt="Jarek Berecki" />
                      <div className="member-info">
                        <h4>Jarek Berecki</h4>
                        <p>Co-founder, designer</p>
                        <a href="#" className="linkedin-link">
                          <img src={linkedinImg} alt="LinkedIn" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="brand-experience">
              <h3>Brand experience</h3>
              <p>We are in the business for over 6 years. Our team members had pleasure to create for following brands in the past.</p>
              <div className="brands-grid">
                <img src={brandsImg} alt="Brand logos" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="ocean-background"></div>
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-container">
              <div className="contact-envelope">
                <div className="envelope-content">
                  <h3>Dear Boy-Coy...</h3>
                  <form className="contact-form">
                    <div className="form-row">
                      <input 
                        type="text" 
                        placeholder="My name is" 
                        className="form-input"
                      />
                      <input 
                        type="email" 
                        placeholder="& can mail me back at" 
                        className="form-input"
                      />
                    </div>
                    <textarea 
                      placeholder="I would like to:"
                      className="form-textarea"
                    ></textarea>
                    <button type="submit" className="send-button">SEND</button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="contact-info">
              <h2>Contact</h2>
              <p>We are open for business. Feel free to drop us a line or send your brief.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  <a href="mailto:hello@boy-coy.com">hello@boy-coy.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+48 503 71 75 72</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Warsaw, Poland</span>
                </div>
              </div>
              
              <div className="social-networks">
                <h3>Social networks</h3>
                <p>Follow us to be always up to date.</p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <img src={facebookImg} alt="Facebook" />
                  </a>
                  <a href="#" className="social-link">
                    <img src={googlePlusImg} alt="Google+" />
                  </a>
                  <a href="#" className="social-link">
                    <img src={linkedinImg} alt="LinkedIn" />
                  </a>
                  <a href="#" className="social-link">
                    <img src={twitterImg} alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

