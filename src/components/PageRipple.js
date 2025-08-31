"use client";
import { useEffect, useState } from "react";

export default function PageRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const onRipple = (e) => {
      const { x, y, color = "rgba(193,187,225,0.45)", duration = 600 } = e.detail || {};
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // farthest corner distance from click -> full-screen diameter
      const dx = Math.max(x, vw - x);
      const dy = Math.max(y, vh - y);
      const radius = Math.hypot(dx, dy) * 1.1; // a bit extra to cover edges
      const size = radius * 2;

      const id = Math.random().toString(36).slice(2);
      setRipples((prev) => [...prev, { id, x, y, size, color, duration }]);
      // cleanup after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, duration + 50);
    };

    window.addEventListener("page-ripple", onRipple);
    return () => window.removeEventListener("page-ripple", onRipple);
  }, []);

  return (
    <div className="page-ripple-layer" aria-hidden="true">
      {ripples.map((r) => (
        <span
          key={r.id}
          className="page-ripple-circle"
          style={{
            "--x": `${r.x}px`,
            "--y": `${r.y}px`,
            "--size": `${r.size}px`,
            "--duration": `${r.duration}ms`,
            "--color": r.color,
          }}
        />
      ))}
    </div>
  );
}
