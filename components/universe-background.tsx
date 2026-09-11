"use client";

import { useEffect } from "react";

export function UniverseBackground() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        root.style.setProperty("--pointer-x", x.toFixed(3));
        root.style.setProperty("--pointer-y", y.toFixed(3));
        root.style.setProperty("--pointer-shift-x", `${(x * 28).toFixed(1)}px`);
        root.style.setProperty("--pointer-shift-y", `${(y * 22).toFixed(1)}px`);
        root.style.setProperty("--pointer-reverse-x", `${(-x * 18).toFixed(1)}px`);
        root.style.setProperty("--pointer-reverse-y", `${(-y * 14).toFixed(1)}px`);
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="universe" aria-hidden="true">
      <div className="universe__glow universe__glow--one" />
      <div className="universe__glow universe__glow--two" />
      <div className="universe__stars" />
      <svg className="universe__orbits" viewBox="0 0 1600 1100" preserveAspectRatio="xMidYMid slice">
        <g className="orbit-group orbit-group--one">
          <ellipse cx="800" cy="520" rx="650" ry="250" />
          <ellipse cx="800" cy="520" rx="490" ry="420" />
        </g>
        <g className="orbit-group orbit-group--two">
          <path d="M-40 830C290 520 540 1010 910 690S1390 330 1660 500" />
          <path d="M-60 270C350 70 460 510 820 300s520-170 850 30" />
        </g>
        <g className="orbit-points">
          <circle cx="311" cy="356" r="4" />
          <circle cx="1260" cy="363" r="5" />
          <circle cx="1030" cy="813" r="3.5" />
          <circle cx="590" cy="104" r="3" />
        </g>
      </svg>
      <div className="universe__grid" />
      <div className="universe__shooting-light universe__shooting-light--one" />
      <div className="universe__shooting-light universe__shooting-light--two" />
      <div className="universe__noise" />
    </div>
  );
}
