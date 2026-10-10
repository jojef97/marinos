"use client";

import { useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Labels = {
  home: string;
  services: string;
  contact: string;
  toggleMenu: string;
  switchLanguage: string;
};

export default function Navbar({
  lang,
  labels,
}: {
  lang: string;
  labels: Labels;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${lang}`, label: labels.home },
    { href: `/${lang}/services`, label: labels.services },
    { href: `/${lang}/contact`, label: labels.contact },
  ];

  const otherLang = lang === "en" ? "el" : "en";
  const switchHref = pathname.replace(/^\/(en|el)/, `/${otherLang}`);

  return (
    <>
      <nav className="Navbar">
        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label={labels.toggleMenu}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className={open ? "links open" : "links"}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={switchHref} lang={otherLang} className="lang-switch">
          {labels.switchLanguage}
        </Link>
      </nav>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}