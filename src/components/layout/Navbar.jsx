import React from 'react';
import { navLinks } from '../../data/portfolioData';
import './Navbar.css';

/**
 * Navbar
 * Fixed top navigation with logo, nav links, and "Hire Me" CTA.
 */
const Navbar = () => {
  const handleHireMe = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="nav-logo">Abhik Samanta</div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta" onClick={handleHireMe}>
        Hire Me →
      </a>
    </nav>
  );
};

export default Navbar;
