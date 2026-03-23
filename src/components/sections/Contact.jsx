import React, { useState } from 'react';
import { contactLinks } from '../../data/portfolioData';
import './Contact.css';

/**
 * Contact
 * Two-column grid:
 *  - Left: contact link list (phone, email, LinkedIn, GitHub)
 *  - Right: message form that opens the user's mail client
 */
const Contact = () => {
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', subject: '', message: '',
  });

  const showToast = (msg) => {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const { fname, lname, email, subject, message } = form;
  if (!fname || !lname || !email || !subject || !message) {
    showToast('⚠ Please fill in all fields.');
    return;
  }
  const mailBody = `Hi Abhik,\n\n${message}\n\nFrom: ${fname} ${lname} (${email})`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=abhiksamanta20@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
  window.open(gmailUrl, '_blank');
  showToast('✓ Opening Gmail...');
  setForm({ fname: '', lname: '', email: '', subject: '', message: '' });
};

  return (
    <section id="contact" className="alt">
      <div className="contact-grid">
        {/* ── LEFT: Contact Links ── */}
        <div className="reveal">
          <div className="sec-label">Contact</div>
          <h2 className="sec-title">
            Let's build something <span className="grad">great</span>
          </h2>
          <p className="sec-sub">
            Actively looking for full-time roles and internships. If you have an
            opportunity, I'd love to connect.
          </p>

          <div className="contact-links">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="clink"
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="clink-icon">{c.icon}</div>
                <div>
                  <div className="clink-label">{c.label}</div>
                  <div className="clink-val">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Message Form ── */}
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="form-head">Send a message</div>
          <p className="form-sub">I typically respond within 24 hours.</p>

          <form className="form-wrap" onSubmit={handleSubmit}>
            <div className="frow">
              <div className="fg">
                <label htmlFor="fname">First name</label>
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder="John"
                  value={form.fname}
                  onChange={handleChange}
                />
              </div>
              <div className="fg">
                <label htmlFor="lname">Last name</label>
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  placeholder="Doe"
                  value={form.lname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="fg">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="fg">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Job opportunity / Collaboration"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="fg">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about the opportunity..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
