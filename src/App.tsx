import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="app-background"></div>
      
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <a href="#" className="navbar-brand">
            <img src="/Logo.svg" alt="Pelajar Data" className="navbar-logo" />
            <span>PELAJAR DATA</span>
          </a>
          <ul className="navbar-nav">
            <li><a href="#about" className="navbar-link" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#features" className="navbar-link" onClick={() => scrollToSection('features')}>Features</a></li>
            <li><a href="#community" className="navbar-link" onClick={() => scrollToSection('community')}>Community</a></li>
            <li><a href="#events" className="navbar-link" onClick={() => scrollToSection('events')}>Events</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <h1 className="hero-title">Empowering Data Enthusiasts</h1>
          <p className="hero-subtitle">
            Join a vibrant community of data professionals, learners, and innovators. 
            Connect, collaborate, and grow together in the exciting world of data science.
          </p>
          <a href="#community" className="hero-cta" onClick={() => scrollToSection('community')}>
            Join Our Community
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="glass-card fade-in">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            We're building the future of data education and community engagement. 
            Our platform connects aspiring data professionals with industry experts, 
            fostering growth through collaboration and shared knowledge.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Focused Learning</h3>
              <p className="feature-description">
                Curated content and structured learning paths designed by industry experts
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">Community Driven</h3>
              <p className="feature-description">
                Connect with like-minded individuals and build lasting professional relationships
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Career Growth</h3>
              <p className="feature-description">
                Access opportunities, mentorship, and resources to accelerate your career
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="glass-card fade-in">
          <h2 className="section-title">What We Offer</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Data Analytics</h3>
              <p className="feature-description">
                Master visualization, statistical analysis, and business intelligence tools
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3 className="feature-title">Machine Learning</h3>
              <p className="feature-description">
                Dive deep into ML algorithms, neural networks, and AI applications
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3 className="feature-title">Data Engineering</h3>
              <p className="feature-description">
                Build robust pipelines, design databases, and manage data infrastructure
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3 className="feature-title">Career Support</h3>
              <p className="feature-description">
                Get guidance on career transitions, portfolio building, and job opportunities
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3 className="feature-title">Research & Innovation</h3>
              <p className="feature-description">
                Explore cutting-edge research, contribute to open-source projects, and stay ahead of industry trends
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">Global Network</h3>
              <p className="feature-description">
                Connect with data professionals worldwide, access international opportunities, and expand your reach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="section">
        <div className="glass-card fade-in">
          <h2 className="section-title">Join Our Community</h2>
          <p className="section-subtitle">
            Connect with thousands of data enthusiasts, share knowledge, and grow together
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">Discussion Forums</h3>
              <p className="feature-description">
                Engage in meaningful conversations about data science trends and challenges
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3 className="feature-title">Mentorship Program</h3>
              <p className="feature-description">
                Get paired with experienced professionals for personalized guidance
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Competitions</h3>
              <p className="feature-description">
                Participate in data challenges and showcase your skills to the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section">
        <div className="glass-card fade-in">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join our workshops, webinars, and networking events to enhance your skills
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🖥️</div>
              <h3 className="feature-title">Virtual Workshops</h3>
              <p className="feature-description">
                Interactive online sessions covering the latest tools and techniques
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3 className="feature-title">In-Person Meetups</h3>
              <p className="feature-description">
                Network with local data professionals and industry leaders
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎤</div>
              <h3 className="feature-title">Expert Talks</h3>
              <p className="feature-description">
                Learn from industry pioneers sharing real-world insights and experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section fade-in">
        <h2 className="cta-title">Ready to Start Your Data Journey?</h2>
        <p className="cta-description">
          Join thousands of data enthusiasts who are already part of our growing community. 
          Start learning, networking, and building your future in data science today.
        </p>
        <a href="https://discord.com/invite/RCbsRxEj6X" target="_blank" rel="noopener noreferrer" className="cta-button">
          Get Started Now
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Pelajar Data. Building the future of data education.</p>
        </div>
      </footer>
    </>
  )
}

export default App
