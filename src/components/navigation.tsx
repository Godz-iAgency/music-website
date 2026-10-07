"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navigation({ showTeam = false }: { showTeam?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const links = [
    { label: "Apps", href: "#work" },
    { label: "App Description", href: "#capabilities" },
    { label: "Tech Stack", href: "#technology" },
    ...(showTeam ? [{ label: "Team", href: "#team" }] : []),
    { label: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    if (!mobileOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); menuButton.current?.focus(); }
    };
    const outsideClick = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMobileOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outsideClick);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outsideClick);
    };
  }, [mobileOpen]);

  function followAnchor(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setMobileOpen(false);
    // The menu is an overlay, so closing it never shifts the target section.
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      event.preventDefault();
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start", behavior: "instant" });
      history.pushState(null, "", href);
    }
  }

  return (
    <header ref={header} className="site-header">
      <div className="container nav-layout">
        <a href="#hero" className="brand-link" aria-label="GODZ-i home" onClick={() => setMobileOpen(false)}>
          <Image src="/godzi_logo_horizontal.png" alt="GODZ-i" width={1024} height={307} className="nav-logo" preload />
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => <a key={link.href} href={link.href} className={link.href === "#contact" ? "nav-contact" : undefined}>{link.label}{link.href === "#contact" && <ArrowUpRight size={14} aria-hidden="true" />}</a>)}
        </nav>
        <button ref={menuButton} type="button" className="menu-button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav" hidden={!mobileOpen}>
        <div className="container">{links.map((link) => <a key={link.href} href={link.href} onClick={(event) => followAnchor(event, link.href)}>{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>
      </nav>
    </header>
  );
}
