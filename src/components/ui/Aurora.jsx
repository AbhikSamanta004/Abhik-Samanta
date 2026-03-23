import React from 'react';
import './Aurora.css';

/**
 * Aurora
 * Renders the four animated gradient orbs that create the
 * aurora/atmospheric glow behind the entire page.
 */
const Aurora = () => (
  <div className="aurora">
    <div className="aurora-orb o1" />
    <div className="aurora-orb o2" />
    <div className="aurora-orb o3" />
    <div className="aurora-orb o4" />
  </div>
);

export default Aurora;
