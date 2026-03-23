import React from 'react';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const ExternalIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/**
 * DescParts renders the project description from the {bold, text} array
 * so no JSX lives in the data file.
 */
const DescParts = ({ parts }) => (
  <p className="proj-desc">
    {parts.map((part, i) =>
      part.bold
        ? <strong key={i} style={{ color: 'var(--text)' }}>{part.text}</strong>
        : <React.Fragment key={i}>{part.text}</React.Fragment>
    )}
  </p>
);

const Projects = () => (
  <section id="projects">
    <div className="reveal">
      <div className="sec-label">Projects</div>
      <h2 className="sec-title">
        Things I've <span className="grad">built</span>
      </h2>
      <p className="sec-sub">Production-grade apps solving real problems.</p>
    </div>

    <div className="proj-grid">
      {projects.map((p, i) => (
        <div
          className="proj-card reveal"
          key={p.num}
          style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
        >
          <div>
            <div className="proj-num">{p.num}</div>
            <div className="proj-name">{p.name}</div>
            <DescParts parts={p.descParts} />

            <div className="proj-tags">
              {p.tags.map((t) => (
                <span className="ptag" key={t}>{t}</span>
              ))}
            </div>

            <div className="proj-links">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`plbtn ${l.variant}`}
                >
                  {l.icon && <ExternalIcon />}
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
