import React from 'react';
import { aboutText, kpis, coreTech } from '../../data/portfolioData';
import './About.css';

/**
 * About
 * Two-column grid:
 *  - Left: bio paragraphs + KPI cards
 *  - Right: core tech pill list
 */
const About = () => (
  <section id="about" className="alt">
    <div className="about-grid">
      {/* ── LEFT: Bio + KPIs ── */}
      <div className="reveal">
        <div className="sec-label">About Me</div>
        <h2 className="sec-title">
          Building things that <span className="grad">scale</span>
        </h2>

        <div className="about-text">
          {aboutText.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about-kpis">
          {kpis.map((k) => (
            <div className="kpi-card" key={k.label}>
              <div className="kpi-n">{k.value}</div>
              <div className="kpi-l">{k.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Tech pills ── */}
      <div className="reveal" style={{ transitionDelay: '0.15s' }}>
        <div className="sec-label">Core Tech</div>
        <div className="skill-pills" style={{ marginTop: '0.5rem' }}>
          {coreTech.map((tech) => (
            <span className="pill" key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
