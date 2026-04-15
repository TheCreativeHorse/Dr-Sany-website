import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="animate-fade-in">
      <section className="section bg-gradient-brand text-center about-hero text-white">
        <div className="container">
          <h1 className="text-white" style={{ marginBottom: '1rem' }}>About Dr Sany Nutra, ND</h1>
          <p style={{ fontSize: '1.25rem', color: '#E2E8F0', maxWidth: '600px', margin: '0 auto' }}>
            A deeper understanding of your health begins with the right guidance.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="about-split">
             <div className="about-image-wrapper">
                <img src="/images/main-bg.webp" alt="Dr Sany Nutra, ND portrait" className="about-image" />
                <div className="about-decoration"></div>
             </div>
             <div className="about-content">
                <h2>A Different Approach to Healing</h2>
                <div className="divider-left"></div>
                <p className="lead-text">
                  Dr Sany Nutra, ND is dedicated to helping patients achieve better health through a balanced approach that combines clinical knowledge with proven therapeutic methods.
                </p>
                <p>
                  With a patient-first philosophy, every consultation is designed to provide clarity, confidence, and a clear path forward. True healing comes from understanding the body as a whole rather than focusing on isolated symptoms.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="about-split reverse">
             <div className="about-image-wrapper">
                <img src="/images/dr_sany_1.jpeg" alt="Dr Sany Nutra, ND standing in clinic" className="about-image" />
                <div className="about-decoration" style={{ borderColor: 'var(--color-primary)' }}></div>
             </div>
             <div className="about-content">
                <h2>Experience You Can Trust</h2>
                <div className="divider-left"></div>
                <p>
                  Over the years, Dr Sany Nutra, ND has worked with a wide range of patients dealing with different health concerns. Her expertise spans across consultation, lung therapy, and cupping therapy.
                </p>
                <p>
                  Each treatment is guided by experience, precision, and a deep understanding of patient needs, combining modern diagnostics with holistic care.
                </p>
                
                <h4 style={{ marginTop: '2rem' }}>Her approach is built on:</h4>
                <ul className="custom-list">
                  <li>Listening carefully to each patient</li>
                  <li>Identifying root causes</li>
                  <li>Creating personalized treatment plans</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="about-split">
             <div className="about-image-wrapper">
                <img src="/images/dr_sany_2.jpeg" alt="Dr Sany Nutra, ND relaxing lifestyle" className="about-image" />
                <div className="about-decoration"></div>
             </div>
             <div className="about-content">
                <h2>Personalized Care for Every Phase</h2>
                <div className="divider-left"></div>
                <p>
                  No two patients are the same. That is why every treatment plan is tailored based on individual conditions, lifestyle, and goals. 
                </p>
                <p>
                  The focus is always on a clear diagnosis, structured treatment, and continuous improvement, empowering you to live your healthiest life.
                </p>
             </div>
          </div>
        </div>
      </section>

      <section className="cta-banner text-center">
        <div className="container">
          <h2>Take the First Step Towards Better Health</h2>
          <p>
            Book a consultation and get a clear understanding of your health with a personalized approach.
          </p>
          <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
        </div>
      </section>
    </div>
  );
}
