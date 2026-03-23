import React, { useState } from 'react';
import { personal, heroStats, floatBadges } from '../../data/portfolioData';
import './Hero.css';

/**
 * Hero
 * Full-viewport landing section.
 */
const ProfilePhoto = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="photo-img">
      {imgError ? (
        <div className="photo-fallback">AS</div>
      ) : (
        <img
          src="/photo.png"
          alt={personal.name}
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};

const Hero = () => (
  <section id="hero">
    {/* ── LEFT ── */}
    <div className="hero-left reveal">
      <div className="hero-eyebrow">
        <span className="pulse" />
        {personal.eyebrow}
      </div>

      <h1 className="hero-name">
        Hi, I'm<br />
        <span className="grad">{personal.name}</span>
      </h1>

      <p className="hero-role">{personal.role}</p>
      <p className="hero-desc">{personal.description}</p>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
          </svg>
          View Projects
        </a>

        <a href="/AbhikPN.pdf" target="_blank"
           rel="noreferrer" className="btn-outline">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Resume
        </a>

        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>

      <div className="stats-row">
        {heroStats.map((s) => (
          <div className="stat-item" key={s.label}>
            <span className="stat-n">{s.value}</span>
            <span className="stat-l">{s.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* ── RIGHT ── */}
    <div className="hero-right reveal" style={{ transitionDelay: '0.2s' }}>
      <div className="photo-container">
        <div className="photo-glow" />
        <div className="photo-ring-outer">
          <div className="photo-ring-inner" />
        </div>

        <ProfilePhoto />

        {floatBadges.map((b) => (
          <div key={b.className} className={`fbadge ${b.className}`}>
            {b.text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
