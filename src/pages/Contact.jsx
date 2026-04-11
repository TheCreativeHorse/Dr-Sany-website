import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="animate-fade-in">
      <section className="section text-center" style={{ backgroundColor: 'var(--color-neutral-2)' }}>
        <div className="container">
          <h1>Get in Touch</h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
            Have questions or ready to start your healing journey? Reach out and take the first step today.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Details</h2>
              <p>Booking a consultation is the first step towards understanding your health better.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>#208 6707 Elbow Drive SW<br/>Calgary, Alberta, Canada</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Phone color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>416-770-2442</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>drsany.info@gmail.com</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="contact-form-container card">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="(123) 456-7890" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Inquiry</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
