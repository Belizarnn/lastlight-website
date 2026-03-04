"use client";

import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      color: string;
      twinkle: number;
      twinkleSpeed: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 800);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.7 ? "255, 220, 180" : "255, 255, 255",
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const drawModernVignette = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.max(w, h) * 0.8;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, "rgba(0, 0, 0, 0)");
      grad.addColorStop(0.6, "rgba(0, 0, 0, 0.02)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0.12)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawModernVignette();

      stars.forEach((s) => {
        s.twinkle += s.twinkleSpeed;
        const twinkleFactor = 0.7 + 0.3 * Math.sin(s.twinkle);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.opacity * twinkleFactor})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      aria-hidden
    />
  );
}
