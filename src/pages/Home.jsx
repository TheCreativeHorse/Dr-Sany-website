import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Your Health,<br/>Treated with Clarity and Care</h1>
            <p className="hero-subheadline">
              A modern approach to healing through personalized consultation, lung therapy, and cupping — focused on long-term wellness, not temporary fixes.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Book Consultation</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>Personalized</h3>
                <p>Treatment Plans</p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/images/hero_clinic.png" alt="Modern naturopathic clinic waiting room" className="hero-image" />
            <div className="hero-image-decoration"></div>
          </div>
        </div>
      </section>

      {/* Trust / Intro Section */}
      <section className="section section-light">
        <div className="container intro-container">
          <div className="intro-image-wrapper">
             <img src="/images/main-bg.webp" alt="Dr Sany Nutra, ND" className="intro-image" />
          </div>
          <div className="intro-text">
            <h2>Meet Dr Sany, ND</h2>
            <div className="divider-left"></div>
            <p className="lead-text">
              With years of experience in treating patients through both clinical knowledge and holistic methods, Dr Sany, ND focuses on understanding the root cause of health concerns rather than just managing symptoms.
            </p>
            <p>
              Every treatment is designed to be clear, personalized, and effective — ensuring you feel confident and informed at every step.
            </p>
            <Link to="/about" className="link-with-icon btn-outline">
              Learn More About Dr Sany, ND <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-light-neutral">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Solutions for Quality Care.</h2>
            <p className="header-subtitle mx-auto">
              Our core services are designed around you, offering effective and personalized treatments to ensure long-term health improvements.
            </p>
          </div>
          
          <div className="services-grid mt-10">
            <div className="card service-card">
              <div className="service-img-square bg-consultation">
                 <img src="/images/consultation.png" alt="Consultation Room" />
              </div>
              <div className="service-card-body">
                <h3>Consultation</h3>
                <p>A one-on-one session to understand your condition, identify root causes, and guide you with a structured treatment plan tailored to your needs.</p>
                <Link to="/services" className="link-read-more">Read More <ArrowRight size={14} /></Link>
              </div>
            </div>
            
            <div className="card service-card">
              <div className="service-img-square bg-lung">
                 <img src="/images/lung_therapy.png" alt="Lung Therapy Equipment" />
              </div>
              <div className="service-card-body">
                <h3>Lung Therapy</h3>
                <p>Focused therapy designed to improve breathing, strengthen lung function, and support recovery through targeted techniques.</p>
                <Link to="/services" className="link-read-more">Read More <ArrowRight size={14} /></Link>
              </div>
            </div>
            
            <div className="card service-card">
              <div className="service-img-square bg-cupping">
                 <img src="/images/cupping_therapy.png" alt="Cupping Therapy" />
              </div>
              <div className="service-card-body">
                <h3>Cupping Therapy</h3>
                <p>A traditional yet effective therapy that helps improve circulation, relieve muscle tension, and support overall healing.</p>
                <Link to="/services" className="link-read-more">Read More <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr Sany, ND */}
      <section className="section bg-gradient-brand text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="text-white">Why Patients Choose Us</h2>
            <div className="divider divider-white"></div>
          </div>

          <div className="features-grid">
            <div className="feature-item-glass">
              <CheckCircle2 color="var(--color-accent)" size={40} className="feature-icon" />
              <h4>Clarity Over Confusion</h4>
              <p>You understand exactly what's happening with your health and why.</p>
            </div>
            <div className="feature-item-glass">
              <CheckCircle2 color="var(--color-accent)" size={40} className="feature-icon" />
              <h4>Personalized Approach</h4>
              <p>No generic treatments — everything is tailored to your condition.</p>
            </div>
            <div className="feature-item-glass">
              <CheckCircle2 color="var(--color-accent)" size={40} className="feature-icon" />
              <h4>Balanced Treatment</h4>
              <p>Combining modern medical understanding with proven therapeutic methods.</p>
            </div>
            <div className="feature-item-glass">
              <CheckCircle2 color="var(--color-accent)" size={40} className="feature-icon" />
              <h4>Long-Term Results</h4>
              <p>Not just temporary relief, but sustainable health improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner text-center">
        <div className="container">
          <h2>Start Your Healing Journey Today</h2>
          <p>Take the first step towards better health with a consultation designed around you.</p>
          <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
        </div>
      </section>
    </div>
  );
}
