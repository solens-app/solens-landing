import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; m: number };

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, dpr = 1;
    let parts: P[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(160, Math.floor((w * h) / 12000));
      parts = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        m: 0.6 + Math.random() * 1.2,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);

      const linkR = 130;
      const repelR = 38;
      const mouseR = 170;

      // physics
      if (!reduced) {
        for (let i = 0; i < parts.length; i++) {
          const a = parts[i];
          // pairwise (cheap O(n^2) but n<=160)
          for (let j = i + 1; j < parts.length; j++) {
            const b = parts[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < linkR * linkR && d2 > 1) {
              const d = Math.sqrt(d2);
              // weak attraction
              const f = (linkR - d) * 0.00002;
              a.vx += (dx / d) * f;
              a.vy += (dy / d) * f;
              b.vx -= (dx / d) * f;
              b.vy -= (dy / d) * f;
              // soft repulsion
              if (d < repelR) {
                const r = (repelR - d) * 0.002;
                a.vx -= (dx / d) * r;
                a.vy -= (dy / d) * r;
                b.vx += (dx / d) * r;
                b.vy += (dy / d) * r;
              }
            }
          }

          // mouse repulsion
          if (mouse.active) {
            const dx = a.x - mouse.x;
            const dy = a.y - mouse.y;
            const d = Math.hypot(dx, dy);
            if (d < mouseR && d > 0.5) {
              const f = ((mouseR - d) / mouseR) * 0.9;
              a.vx += (dx / d) * f * 0.18;
              a.vy += (dy / d) * f * 0.18;
            }
          }

          // drag + speed cap
          a.vx *= 0.985;
          a.vy *= 0.985;
          const sp = Math.hypot(a.vx, a.vy);
          if (sp > 1.2) {
            a.vx = (a.vx / sp) * 1.2;
            a.vy = (a.vy / sp) * 1.2;
          }

          // integrate
          a.x += a.vx;
          a.y += a.vy;

          // wrap
          if (a.x < -4) a.x = w + 4;
          if (a.x > w + 4) a.x = -4;
          if (a.y < -4) a.y = h + 4;
          if (a.y > h + 4) a.y = -4;
        }
      }

      // links
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkR * linkR) {
            const d = Math.sqrt(d2);
            const t = 1 - d / linkR;
            let alpha = t * 0.22;
            let color = `rgba(255,255,255,${alpha})`;
            if (mouse.active) {
              const mx = (a.x + b.x) / 2 - mouse.x;
              const my = (a.y + b.y) / 2 - mouse.y;
              const md = Math.hypot(mx, my);
              if (md < mouseR) {
                const k = 1 - md / mouseR;
                color = `rgba(170, 90, 255, ${Math.min(0.55, alpha + k * 0.45)})`;
              }
            }
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const a of parts) {
        let fill = `rgba(255,255,255,${0.45 + a.m * 0.15})`;
        if (mouse.active) {
          const d = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (d < mouseR) {
            const k = 1 - d / mouseR;
            fill = `rgba(${Math.round(255 - k * 75)}, ${Math.round(255 - k * 165)}, 255, ${0.6 + k * 0.35})`;
          }
        }
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.m, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    step();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    const parent = canvas.parentElement;
    parent?.addEventListener("pointermove", onMove);
    parent?.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      parent?.removeEventListener("pointermove", onMove);
      parent?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
