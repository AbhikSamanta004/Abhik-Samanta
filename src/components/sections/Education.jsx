import React from 'react';
import { education } from '../../data/portfolioData';
import './Education.css';

/**
 * Education
 * Displays academic background as a horizontal card with CGPA badge.
 */
const Education = () => (
  <section id="education" className="alt">
    <div className="reveal">
      <div className="sec-label">Education</div>
      <h2 className="sec-title">
        Academic <span className="grad">background</span>
      </h2>
    </div>

    {education.map((edu, i) => (
      <div className="edu-card reveal" key={i} style={{ transitionDelay: '0.1s' }}>
        <div>
          <div className="edu-deg">{edu.degree}</div>
          <div className="edu-uni">{edu.university}</div>
          <div className="edu-meta">{edu.meta}</div>
        </div>
        <div className="edu-gpa-box">
          <span className="gpa-n">{edu.gpa}</span>
          <div className="gpa-l">CGPA</div>
        </div>
      </div>
    ))}
  </section>
);

export default Education;
