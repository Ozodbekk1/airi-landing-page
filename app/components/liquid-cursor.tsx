/** @format */

"use client";
import { useEffect, useRef } from "react";

export default function LiquidCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let particles: any[] = [];

    const animate = () => {
      // fade trail
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // smoothly move lastMouse towards cursor (or default)
      lastMouse.current.x += (mouse.current.x - lastMouse.current.x) * 0.08;
      lastMouse.current.y += (mouse.current.y - lastMouse.current.y) * 0.08;

      // create a new particle near lastMouse
      particles.push({
        x: lastMouse.current.x + (Math.random() - 0.5) * 30,
        y: lastMouse.current.y + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        life: 100,
      });

      // draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 60, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.06)";
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      });

      // slowly move default cursor when mouse is still
      if (mouse.current.x === 0 && mouse.current.y === 0) {
        // gentle drift
        lastMouse.current.x += Math.sin(Date.now() / 2000) * 0.5;
        lastMouse.current.y += Math.cos(Date.now() / 2000) * 0.5;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 z-1 pointer-events-none blur-2xl'
    />
  );
}
