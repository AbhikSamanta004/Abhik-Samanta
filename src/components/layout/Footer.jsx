import React from 'react';
import { personal } from '../../data/portfolioData';
import './Footer.css';

/**
 * Footer
 * Simple bottom bar with copyright and social links.
 */
const Footer = () => (
  <footer>
    <div className="foot-copy">© 2026 Abhik Samanta · Full Stack Developer</div>
    <div className="foot-links">
      <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={`mailto:${personal.email}`}>Email</a>
    </div>
  </footer>
);

export default Footer;
