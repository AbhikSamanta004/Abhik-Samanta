import React from 'react';
import { experience } from '../../data/portfolioData';
import './Experience.css';

/**
 * Experience
 * Renders each work experience as a styled card.
 * Bullet segments use {hl, text} pairs so highlights
 * are handled here rather than in the data file.
 */
const BulletLine = ({ segments }) => (
  <li>
    {segments.map((seg, i) =>
      seg.hl
        ? <span key={i} className="hl">{seg.text}</span>
        : <React.Fragment key={i}>{seg.text}</React.Fragment>
    )}
  </li>
);

const Experience = () => (
  <section id="experience" className="alt">
    <div className="reveal">
      <div className="sec-label">Experience</div>
      <h2 className="sec-title">
        Where I've <span className="grad">worked</span>
      </h2>
      <p className="sec-sub">Production experience building systems at scale.</p>
    </div>

    {experience.map((job, i) => (
      <div
        className="exp-card reveal"
        key={`${job.company}-${i}`}
        style={{ transitionDelay: '0.1s' }}
      >
        <div className="exp-header">
          <div>
            <div className="exp-role">{job.role}</div>
            <div className="exp-company">{job.company}</div>
          </div>
          <div className="exp-badge">{job.period}</div>
        </div>

        <ul className="exp-list">
          {job.bullets.map((segments, bi) => (
            <BulletLine key={bi} segments={segments} />
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Experience;
