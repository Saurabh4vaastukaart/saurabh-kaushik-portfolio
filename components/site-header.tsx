"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Close, LinkedIn, Menu, Phone } from "@/components/icons";
import profilePhoto from "@/public/saurabh-profile.jpg";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/work" && pathname.startsWith("/case-studies")) return true;
    return pathname === href;
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let frame = 0;

    const updateHeader = () => {
      const progress = Math.min(Math.max(window.scrollY / 180, 0), 1);
      const compactLayout = window.innerWidth <= 1160;
      const mobileLayout = window.innerWidth <= 880;
      const baseGutter = mobileLayout ? 24 : compactLayout ? 44 : 72;
      const expandedGutter = mobileLayout ? 14 : 18;
      const baseMaxWidth = compactLayout ? 1080 : 1240;
      const expandedMaxWidth = compactLayout ? 1180 : 1560;
      const baseNavWidth = compactLayout ? 430 : 470;
      const expandedNavWidth = compactLayout ? 488 : 640;

      header.style.setProperty(
        "--header-shell-gutter",
        `${baseGutter + (expandedGutter - baseGutter) * progress}px`,
      );
      header.style.setProperty(
        "--header-shell-max",
        `${baseMaxWidth + (expandedMaxWidth - baseMaxWidth) * progress}px`,
      );
      header.style.setProperty(
        "--header-nav-width",
        `${baseNavWidth + (expandedNavWidth - baseNavWidth) * progress}px`,
      );
      header.style.setProperty("--header-surface-alpha", (0.48 * progress).toFixed(3));
      header.style.setProperty("--header-border-alpha", (0.24 * progress).toFixed(3));
      header.style.setProperty("--header-child-alpha", (0.76 - 0.7 * progress).toFixed(3));
      header.style.setProperty("--header-child-border-alpha", (0.14 - 0.08 * progress).toFixed(3));
      header.dataset.scrolled = progress > 0.06 ? "true" : "false";
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-shell">
        <Link className="brand" href="/" aria-label="Saurabh Kaushik, home" onClick={() => setOpen(false)}>
          <span className="brand-avatar">
            <Image src={profilePhoto} alt="" priority placeholder="blur" sizes="48px" />
          </span>
          <span className="brand-copy">
            <strong>Saurabh Kaushik</strong>
            <small>Product Manager</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href="tel:+919992182382" aria-label="Call Saurabh at +91-9992182382">
            <Phone /> <span>+91-9992182382</span>
          </a>
          <a
            className="header-cta"
            href="https://www.linkedin.com/in/saurabhkaushick"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn /> Let&apos;s talk <ArrowUpRight />
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            <span>0{index + 1}</span>
            {item.label}
          </Link>
        ))}
        <div className="mobile-nav__contact">
          <a href="tel:+919992182382" onClick={() => setOpen(false)}><Phone /> +91-9992182382</a>
          <a
            href="https://www.linkedin.com/in/saurabhkaushick"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <LinkedIn /> Let&apos;s talk <ArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  );
}
