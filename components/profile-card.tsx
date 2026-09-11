"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, LinkedIn, Location, Phone } from "@/components/icons";
import profilePhoto from "@/public/saurabh-profile.jpg";

export function ProfileCard() {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
    card.style.setProperty("--shine-x", `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty("--shine-y", `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--shine-x", "50%");
    card.style.setProperty("--shine-y", "50%");
  };

  return (
    <article
      className="profile-card"
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      data-reveal
    >
      <div className="profile-card__orbit profile-card__orbit--one" />
      <div className="profile-card__orbit profile-card__orbit--two" />
      <div className="profile-card__image">
        <Image
          src={profilePhoto}
          alt="Saurabh Kaushik in a modern office"
          priority
          placeholder="blur"
          sizes="(max-width: 720px) 88vw, (max-width: 1100px) 44vw, 430px"
        />
        <div className="profile-card__image-shade" />
      </div>
      <div className="profile-card__details">
        <div className="profile-card__availability">
          <span className="status-dot" />
          <span>Open to the right product challenge</span>
        </div>
        <div className="profile-card__contacts">
          <span><Location /> Gurugram, India</span>
          <a href="tel:+919992182382"><Phone /> +91-9992182382</a>
          <a href="https://www.linkedin.com/in/saurabhkaushick" target="_blank" rel="noreferrer">
            <LinkedIn /> LinkedIn <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="profile-card__chip profile-card__chip--top">
        <small>Experience</small>
        <strong>6 years</strong>
      </div>
      <div className="profile-card__chip profile-card__chip--bottom">
        <small>Product reach</small>
        <strong>700K+ users</strong>
      </div>
    </article>
  );
}
