import React, { useState } from 'react';
import './landingpage.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you for signing up! We\'ll be in touch soon.');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <h2 onClick={() => scrollToSection('hero')}>VenueBook</h2>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
              <li><a href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>How it Works</a></li>
              <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
            <div className="nav-buttons">
              <button className="btn-secondary">Login</button>
              <button className="btn-primary">Sign Up</button>
            </div>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Find Your Perfect Venue in Minutes</h1>
            <p>Connect with amazing venues for your events, meetings, and celebrations. Book instantly or list your space to earn extra income.</p>
            <div className="hero-buttons">
              <button className="btn-primary btn-large">Find Venues</button>
              <button className="btn-secondary btn-large">List Your Venue</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              <span>🏢 Beautiful Venue Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose VenueBook?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Easy Search</h3>
              <p>Find venues by location, capacity, amenities, and price. Our smart filters help you discover the perfect space.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Booking</h3>
              <p>Book venues instantly with our secure payment system. No waiting, no hassle - just book and go.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Compare prices across multiple venues and get the best deals. Transparent pricing with no hidden fees.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure & Safe</h3>
              <p>All venues are verified and insured. Your bookings are protected with our comprehensive safety guarantee.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Manage your bookings on the go with our responsive platform. Access everything from any device.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Perfect Match</h3>
              <p>Our AI-powered recommendations help you find venues that match your specific needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="steps-column">
              <h3>For Event Organizers</h3>
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Search</h4>
                  <p>Browse thousands of venues using our smart search filters</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Book</h4>
                  <p>Select your perfect venue and book instantly with secure payment</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Enjoy</h4>
                  <p>Host your amazing event with peace of mind and full support</p>
                </div>
              </div>
            </div>
            <div className="steps-column">
              <h3>For Venue Owners</h3>
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>List</h4>
                  <p>Create your venue profile with photos and details in minutes</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Manage</h4>
                  <p>Handle bookings, communicate with clients, and manage your calendar</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Earn</h4>
                  <p>Get paid automatically and grow your venue business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"VenueBook made finding the perfect wedding venue so easy! The search filters helped us narrow down exactly what we needed."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👰</div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Wedding Planner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As a venue owner, VenueBook has increased my bookings by 300%. The platform is user-friendly and the support is excellent."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">🏢</div>
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>Venue Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Booking corporate events has never been easier. The instant booking feature saves us so much time and hassle."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">💼</div>
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <span>Corporate Event Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied users who have found their perfect venues through VenueBook</p>
            <form onSubmit={handleEmailSubmit} className="cta-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">Get Early Access</button>
            </form>
            <p className="cta-note">No spam, unsubscribe at any time</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>VenueBook</h3>
              <p>Making venue booking simple, fast, and reliable for everyone.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="LinkedIn">💼</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>For Event Organizers</h4>
              <ul>
                <li><a href="#">Find Venues</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>For Venue Owners</h4>
              <ul>
                <li><a href="#">List Your Venue</a></li>
                <li><a href="#">Owner Resources</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 VenueBook. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
