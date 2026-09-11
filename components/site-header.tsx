"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Close, Menu } from "@/components/icons";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand" href="/" aria-label="Saurabh Kaushik, home" onClick={() => setOpen(false)}>
          <span className="brand-mark">SK</span>
          <span className="brand-copy">
            <strong>Saurabh Kaushik</strong>
            <small>Product Manager</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href="mailto:saurabhkaushick@gmail.com">
          Let&apos;s talk
        </a>

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
          <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>
            {item.label}
          </Link>
        ))}
        <a href="mailto:saurabhkaushick@gmail.com" onClick={() => setOpen(false)}>
          <span>05</span>
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
