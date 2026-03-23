import React from 'react';
import { achievements } from '../../data/portfolioData';
import './Achievements.css';

/**
 * Achievements
 * Auto-fit grid of achievement cards with emoji icon, title, and description.
 */
const Achievements = () => (
  <section id="achievements">
    <div className="reveal">
      <div className="sec-label">Achievements</div>
      <h2 className="sec-title">
        Beyond the <span className="grad">code</span>
      </h2>
    </div>

    <div className="ach-grid">
      {achievements.map((a, i) => (
        <div
          className="ach-card reveal"
          key={a.title}
          style={{ transitionDelay: `${i * 0.05}s` }}
        >
          <span className="ach-icon">{a.icon}</span>
          <div className="ach-title">{a.title}</div>
          <div className="ach-desc">{a.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
