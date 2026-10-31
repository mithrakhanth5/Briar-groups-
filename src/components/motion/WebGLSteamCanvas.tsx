'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface WebGLSteamProps {
  color?: string; // e.g. '#C5A880' or '#10b981'
  opacity?: number;
}

export default function WebGLSteamCanvas({ color = '#C5A880', opacity = 0.45 }: WebGLSteamProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setWebGLSupported(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch (e) {
      setWebGLSupported(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;

    // Mobile check to cap particle count
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 90;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6; // X
      positions[i * 3 + 1] = Math.random() * 6 - 3; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3; // Z
      speeds[i] = 0.003 + Math.random() * 0.006;
      opacities[i] = Math.random() * 0.7 + 0.3;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom circular soft mist particle texture created in memory
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.08)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.6 : 0.85,
      map: texture,
      transparent: true,
      opacity: opacity,
      color: new THREE.Color(color),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let animationFrameId: number;
    let isVisible = true;

    // Visibility Observer to save battery/GPU when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const posArr = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        // Slowly rise upwards like tea steam
        posArr[i * 3 + 1] += speeds[i];
        // Gentle horizontal drift
        posArr[i * 3] += Math.sin(posArr[i * 3 + 1] * 2 + i) * 0.0015;

        // Reset when reaching top
        if (posArr[i * 3 + 1] > 3.5) {
          posArr[i * 3 + 1] = -3;
          posArr[i * 3] = (Math.random() - 0.5) * 5;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color, opacity]);

  return (
    <div ref={mountRef} className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Fallback CSS animated mist if WebGL is disabled or unsupported */}
      {!webGLSupported && (
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-pulse opacity-40 pointer-events-none" />
      )}
    </div>
  );
}
