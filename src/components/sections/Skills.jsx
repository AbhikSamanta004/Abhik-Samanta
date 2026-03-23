import React from 'react';
import { skills } from '../../data/portfolioData';
import './Skills.css';

/**
 * Skills
 * Responsive auto-fit grid of skill category cards,
 * each containing an icon, category name, and tech tags.
 */
const Skills = () => (
  <section id="skills">
    <div className="reveal">
      <div className="sec-label">Skills</div>
      <h2 className="sec-title">
        What I <span className="grad">work with</span>
      </h2>
      <p className="sec-sub">
        A full-stack toolkit spanning backend systems, frontend, databases, and cloud.
      </p>
    </div>

    <div className="skills-grid">
      {skills.map((sk, i) => (
        <div
          className="sk-card reveal"
          key={sk.name}
          style={{ transitionDelay: `${i * 0.05}s` }}
        >
          <span className="sk-icon">{sk.icon}</span>
          <div className="sk-name">{sk.name}</div>
          <div className="sk-tags">
            {sk.tags.map((tag) => (
              <span className="stag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
