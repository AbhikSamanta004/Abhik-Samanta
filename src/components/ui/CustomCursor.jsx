import { useEffect } from 'react';

/**
 * CustomCursor
 * Creates a glowing magnetic ring cursor with:
 *  - Dot that snaps to the mouse position
 *  - Lagging outer ring
 *  - 8-dot trailing effect
 *  - Expansion on hover over interactive elements
 *  - Click ripple burst
 */
const CustomCursor = () => {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    // Dot styles
    dot.style.cssText = `
      position:fixed; width:8px; height:8px; border-radius:50%;
      background:#6366f1; pointer-events:none; z-index:9999;
      transform:translate(-50%,-50%);
      box-shadow:0 0 12px 3px rgba(99,102,241,0.8);
      transition:transform 0.12s ease, background 0.3s ease, width 0.2s, height 0.2s;
      will-change:transform;
    `;
    ring.style.cssText = `
      position:fixed; width:40px; height:40px; border-radius:50%;
      border:1.5px solid rgba(99,102,241,0.6);
      pointer-events:none; z-index:9998;
      transform:translate(-50%,-50%);
      background: radial-gradient(circle, rgba(99,102,241,0.05), transparent 70%);
      box-shadow:0 0 18px rgba(99,102,241,0.15), inset 0 0 12px rgba(99,102,241,0.05);
      will-change:transform;
      transition:width 0.25s ease, height 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    `;

    // Trail dots
    const trailCount = 8;
    const trails = [];
    for (let i = 0; i < trailCount; i++) {
      const t = document.createElement('div');
      const size = 5 - i * 0.45;
      const op = 0.55 - i * 0.06;
      t.style.cssText = `
        position:fixed; width:${size}px; height:${size}px; border-radius:50%;
        background:rgba(99,102,241,${op}); pointer-events:none;
        z-index:${9990 - i}; transform:translate(-50%,-50%);
        will-change:transform;
      `;
      document.body.appendChild(t);
      trails.push({ el: t, x: 0, y: 0 });
    }

    const onMouseMove = e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    document.addEventListener('mousemove', onMouseMove);

    // Hover expand on interactive elements
    const hoverTargets = 'a, button, .btn-primary, .btn-outline, .nav-cta, .sk-card, .proj-card, .clink, .kpi-card, .ach-card';
    const enterHandlers = [];
    const leaveHandlers = [];

    document.querySelectorAll(hoverTargets).forEach(el => {
      const enter = () => {
        dot.style.width = '12px'; dot.style.height = '12px';
        dot.style.background = '#8b5cf6';
        dot.style.boxShadow = '0 0 18px 5px rgba(139,92,246,0.9)';
        ring.style.width = '56px'; ring.style.height = '56px';
        ring.style.borderColor = 'rgba(139,92,246,0.7)';
        ring.style.boxShadow = '0 0 25px rgba(139,92,246,0.25), inset 0 0 16px rgba(139,92,246,0.08)';
      };
      const leave = () => {
        dot.style.width = '8px'; dot.style.height = '8px';
        dot.style.background = '#6366f1';
        dot.style.boxShadow = '0 0 12px 3px rgba(99,102,241,0.8)';
        ring.style.width = '40px'; ring.style.height = '40px';
        ring.style.borderColor = 'rgba(99,102,241,0.6)';
        ring.style.boxShadow = '0 0 18px rgba(99,102,241,0.15), inset 0 0 12px rgba(99,102,241,0.05)';
      };
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      enterHandlers.push({ el, enter });
      leaveHandlers.push({ el, leave });
    });

    // Click ripple
    const onClick = e => {
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position:fixed; left:${e.clientX}px; top:${e.clientY}px;
        width:6px; height:6px; border-radius:50%;
        border:2px solid rgba(99,102,241,0.7);
        transform:translate(-50%,-50%) scale(1);
        pointer-events:none; z-index:9997;
        animation:cursor-ripple 0.55s ease-out forwards;
      `;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
      dot.style.transform = 'translate(-50%,-50%) scale(0.5)';
      setTimeout(() => dot.style.transform = 'translate(-50%,-50%) scale(1)', 120);
    };
    document.addEventListener('click', onClick);

    // Lerp helper
    const lerp = (a, b, t) => a + (b - a) * t;

    let animId;
    const loop = () => {
      animId = requestAnimationFrame(loop);
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      let px = mx, py = my;
      trails.forEach((tr, i) => {
        tr.x = lerp(tr.x, px, 0.35 - i * 0.03);
        tr.y = lerp(tr.y, py, 0.35 - i * 0.03);
        tr.el.style.left = tr.x + 'px';
        tr.el.style.top = tr.y + 'px';
        px = tr.x; py = tr.y;
      });
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onClick);
      enterHandlers.forEach(({ el, enter }) => el.removeEventListener('mouseenter', enter));
      leaveHandlers.forEach(({ el, leave }) => el.removeEventListener('mouseleave', leave));
      trails.forEach(tr => tr.el.remove());
    };
  }, []);

  return null; // renders into #cursor-dot / #cursor-ring in App.jsx
};

export default CustomCursor;
