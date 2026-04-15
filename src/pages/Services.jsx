import { Link } from 'react-router-dom';
import { Activity, Wind, Beaker } from 'lucide-react';
import './Services.css';

export default function Services() {
  return (
    <div className="animate-fade-in">
      <section className="section bg-gradient-brand text-center text-white pb-6">
        <div className="container">
          <h1 className="text-white">Services Focused on Your Health</h1>
          <p style={{ fontSize: '1.25rem', color: '#E2E8F0', maxWidth: '700px', margin: '1rem auto 2rem' }}>
            Every treatment is designed to address the root cause of your condition, not just the symptoms — helping you achieve long-term wellness.
          </p>
          <Link to="/contact" className="btn btn-primary btn-white">Book Consultation</Link>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            
            {/* Consultation */}
            <div className="service-row premium-card service-split">
              <div className="card-image service-image-wrapper">
                 <img src="/images/consultation.png" alt="Consultation Room" className="full-cover-image" />
              </div>
              <div className="card-content service-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="icon-wrapper">
                    <Activity color="var(--color-primary)" size={32} />
                  </div>
                  <h2 style={{ margin: 0 }}>Consultation</h2>
                </div>
                <p className="lead-text">
                  A one-on-one session designed to understand your health concerns in detail. This is the first and most important step where Dr Sany Nutra, ND evaluates your condition, identifies potential root causes, and creates a clear plan forward.
                </p>
                <div className="service-details-grid">
                  <div>
                    <h4 className="detail-header">What's Included:</h4>
                    <ul className="custom-list">
                      <li>Detailed discussion of symptoms</li>
                      <li>Health assessment and history review</li>
                      <li>Identification of root causes</li>
                      <li>Personalized treatment plan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="detail-header">Who This Is For:</h4>
                    <ul className="custom-list">
                      <li>Anyone experiencing clear or unclear health issues</li>
                      <li>Patients looking for structured plans</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '2.5rem' }}>
                  <Link to="/contact" className="btn btn-primary btn-outline" style={{ display: 'inline-block' }}>Book Consultation</Link>
                </div>
              </div>
            </div>

            {/* Lung Therapy */}
            <div className="service-row premium-card service-split reverse">
              <div className="card-image service-image-wrapper">
                 <img src="/images/lung_therapy.png" alt="Lung Therapy Equipment" className="full-cover-image" />
              </div>
              <div className="card-content service-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="icon-wrapper">
                    <Wind color="var(--color-primary)" size={32} />
                  </div>
                  <h2 style={{ margin: 0 }}>Lung Therapy</h2>
                </div>
                <p className="lead-text">
                  A focused therapy designed to improve lung function, breathing capacity, and overall respiratory health. This therapy supports recovery and helps strengthen the respiratory system using targeted techniques.
                </p>
                <div className="service-details-grid">
                  <div>
                    <h4 className="detail-header">Benefits:</h4>
                    <ul className="custom-list">
                      <li>Improved breathing efficiency</li>
                      <li>Increased lung capacity</li>
                      <li>Support in respiratory recovery</li>
                      <li>Better overall oxygen flow</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="detail-header">Who This Is For:</h4>
                    <ul className="custom-list">
                      <li>Individuals with breathing difficulties</li>
                      <li>Post-illness recovery</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '2.5rem' }}>
                  <Link to="/contact" className="btn btn-primary btn-outline" style={{ display: 'inline-block' }}>Book Consultation</Link>
                </div>
              </div>
            </div>

            {/* Cupping Therapy */}
            <div className="service-row premium-card service-split">
              <div className="card-image service-image-wrapper">
                 <img src="/images/cupping_therapy.png" alt="Cupping Therapy" className="full-cover-image" />
              </div>
              <div className="card-content service-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="icon-wrapper">
                    <Beaker color="var(--color-primary)" size={32} />
                  </div>
                  <h2 style={{ margin: 0 }}>Cupping Therapy</h2>
                </div>
                <p className="lead-text">
                  A therapeutic technique that uses suction to improve blood circulation, reduce muscle tension, and support natural healing processes in the body.
                </p>
                <div className="service-details-grid">
                  <div>
                    <h4 className="detail-header">Benefits:</h4>
                    <ul className="custom-list">
                      <li>Improved blood circulation</li>
                      <li>Relief from muscle tightness</li>
                      <li>Detoxification support</li>
                      <li>Enhanced recovery</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="detail-header">Who This Is For:</h4>
                    <ul className="custom-list">
                      <li>Individuals experiencing muscle pain</li>
                      <li>People looking for alternative therapies</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '2.5rem' }}>
                  <Link to="/contact" className="btn btn-primary btn-outline" style={{ display: 'inline-block' }}>Book Consultation</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
