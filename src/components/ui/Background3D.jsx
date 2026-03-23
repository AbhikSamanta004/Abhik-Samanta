import { useEffect } from 'react';

const Background3D = () => {
  useEffect(() => {
    const canvas = document.getElementById('bg3d');
    if (!canvas || typeof window.THREE === 'undefined') return;

    const THREE = window.THREE;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b1020, 0.008);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    // =========================
    // 1. MAIN PARTICLE GALAXY
    // =========================
    const particleCount = 2600;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x6366f1),
      new THREE.Color(0x8b5cf6),
      new THREE.Color(0x06b6d4),
      new THREE.Color(0x22d3ee),
      new THREE.Color(0xa78bfa),
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 75 + 8;
      const angle = radius * 0.25 + (i % 4) * (Math.PI / 2);
      const spread = Math.pow(Math.random(), 2.5) * 12;

      particlePositions[i * 3] =
        Math.cos(angle) * radius + (Math.random() - 0.5) * spread;
      particlePositions[i * 3 + 1] =
        (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 2] =
        Math.sin(angle) * radius + (Math.random() - 0.5) * spread - 40;

      const color = palette[Math.floor(Math.random() * palette.length)];
      const mix = 0.55 + Math.random() * 0.45;

      particleColors[i * 3] = color.r * mix;
      particleColors[i * 3 + 1] = color.g * mix;
      particleColors[i * 3 + 2] = color.b * mix + 0.15;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(particlePositions, 3)
    );
    particleGeo.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(particleColors, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const galaxy = new THREE.Points(particleGeo, particleMat);
    galaxy.position.set(10, 0, -10);
    scene.add(galaxy);

    // =========================
    // 2. BIG GLOW SPHERES
    // =========================
    const glowSpheres = [];
    const glowConfigs = [
      { size: 11, color: 0x6366f1, pos: [-42, 24, -55], opacity: 0.18 },
      { size: 9, color: 0x06b6d4, pos: [48, -18, -45], opacity: 0.16 },
      { size: 7, color: 0x8b5cf6, pos: [8, 30, -35], opacity: 0.12 },
      { size: 13, color: 0xa78bfa, pos: [28, 5, -75], opacity: 0.08 },
    ];

    glowConfigs.forEach((cfg) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(cfg.size, 32, 32),
        new THREE.MeshBasicMaterial({
          color: cfg.color,
          transparent: true,
          opacity: cfg.opacity,
          depthWrite: false,
        })
      );
      mesh.position.set(...cfg.pos);
      mesh.userData = {
        baseY: cfg.pos[1],
        offset: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.4,
      };
      glowSpheres.push(mesh);
      scene.add(mesh);
    });

    // =========================
    // 3. TORUS RINGS
    // =========================
    const rings = [];
    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(10 + i * 7, 0.12, 12, 120),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x6366f1 : 0x06b6d4,
          transparent: true,
          opacity: 0.08 - i * 0.012,
        })
      );
      ring.position.set(-18, 6, -55);
      ring.rotation.x = Math.PI / 2 + i * 0.18;
      ring.userData = { speed: 0.0018 + i * 0.0008 };
      rings.push(ring);
      scene.add(ring);
    }

    // =========================
    // 4. CRYSTAL SHARDS
    // =========================
    const shards = [];
    const shardData = [
      { size: 4.2, color: 0x8b5cf6, pos: [-35, -20, -25], opacity: 0.14 },
      { size: 3.0, color: 0x06b6d4, pos: [38, 18, -22], opacity: 0.16 },
      { size: 5.5, color: 0xa78bfa, pos: [55, -10, -40], opacity: 0.12 },
      { size: 3.6, color: 0x6366f1, pos: [-10, 35, -32], opacity: 0.12 },
    ];

    shardData.forEach((d) => {
      const shard = new THREE.Mesh(
        new THREE.OctahedronGeometry(d.size, 0),
        new THREE.MeshBasicMaterial({
          color: d.color,
          wireframe: true,
          transparent: true,
          opacity: d.opacity,
        })
      );
      shard.position.set(...d.pos);
      shard.userData = {
        rx: (Math.random() - 0.5) * 0.01,
        ry: (Math.random() - 0.5) * 0.01,
        baseY: d.pos[1],
        floatOffset: Math.random() * Math.PI * 2,
      };
      shards.push(shard);
      scene.add(shard);
    });

    // =========================
    // 5. SMALL STAR DUST
    // =========================
    const dustCount = 1200;
    const dustPositions = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 220;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      dustPositions[i * 3 + 2] = -Math.random() * 160;
    }

    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(dustPositions, 3)
    );

    const dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.18,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
      })
    );
    scene.add(dust);

    // =========================
    // MOUSE MOVEMENT
    // =========================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // =========================
    // RESIZE
    // =========================
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // =========================
    // ANIMATION
    // =========================
    let time = 0;
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.006;

      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      camera.position.x = targetX * 8;
      camera.position.y = -targetY * 5;
      camera.lookAt(0, 0, -30);

      galaxy.rotation.y += 0.0009;
      galaxy.rotation.x = Math.sin(time * 0.3) * 0.04;

      dust.rotation.y -= 0.00025;

      glowSpheres.forEach((sphere, i) => {
        sphere.position.y =
          sphere.userData.baseY +
          Math.sin(time * sphere.userData.speed + sphere.userData.offset) * 2.8;
        sphere.scale.setScalar(1 + Math.sin(time + i) * 0.04);
      });

      rings.forEach((ring, i) => {
        ring.rotation.z += ring.userData.speed;
        ring.rotation.x =
          Math.PI / 2 + i * 0.18 + Math.sin(time * 0.7 + i) * 0.08;
      });

      shards.forEach((shard) => {
        shard.rotation.x += shard.userData.rx;
        shard.rotation.y += shard.userData.ry;
        shard.position.y =
          shard.userData.baseY +
          Math.sin(time + shard.userData.floatOffset) * 2.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas
        id="bg3d"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -3,
          pointerEvents: 'none',
          background: `
            radial-gradient(circle at 20% 20%, rgba(99,102,241,0.20), transparent 30%),
            radial-gradient(circle at 80% 30%, rgba(6,182,212,0.16), transparent 28%),
            radial-gradient(circle at 50% 75%, rgba(139,92,246,0.14), transparent 35%),
            linear-gradient(180deg, #030712 0%, #0b1020 45%, #111827 100%)
          `,
        }}
      />
    </>
  );
};

export default Background3D;