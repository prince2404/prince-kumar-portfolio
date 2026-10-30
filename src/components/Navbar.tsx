"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

const NAV_LINKS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const OBSERVED_SECTIONS = ["home", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("home");
  const { identity } = portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );

    OBSERVED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-cobalt/40 bg-midnight/85 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5 pl-10 sm:pl-14 md:px-8 md:pl-20 lg:pl-24"
      >
        {/* Brand Logo instead of text name */}
        <a
          href="#home"
          aria-label="Prince Kumar — Home"
          className="group flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl transition-transform duration-150 hover:scale-105"
        >
          <Image
            src={identity.logoPath}
            alt="Prince Kumar Logo"
            width={40}
            height={40}
            priority
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
        </a>

        {/* Navigation Links for Skills, Experience, Projects, Contact */}
        <ul className="no-scrollbar flex items-center gap-1 overflow-x-auto py-1 sm:gap-2">
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`inline-flex min-h-[44px] items-center whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:px-3.5 sm:text-sm ${
                    isActive
                      ? "bg-lime font-semibold text-midnight"
                      : "text-mutedText hover:bg-surface hover:text-primaryText"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
