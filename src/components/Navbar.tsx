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
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-midnight/85 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 md:px-8"
      >
        <a
          href="#home"
          aria-label="Prince Kumar — Home"
          className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl"
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

        <ul className="no-scrollbar flex items-center gap-1 overflow-x-auto py-1 sm:gap-2">
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`inline-flex min-h-[40px] items-center whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium sm:px-4 sm:text-sm ${
                    isActive
                      ? "bg-lime font-semibold text-midnight"
                      : "text-mutedText hover:text-primaryText"
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
