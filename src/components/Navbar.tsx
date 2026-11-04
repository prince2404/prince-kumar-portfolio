"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

const NAV_ITEMS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const OBSERVED_SECTIONS = ["home", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("experience");
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
    <header className="sticky top-0 z-40 py-4 sm:py-5">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-center px-4 sm:px-6 md:px-8 lg:justify-between"
      >
        {/* Logo: Hidden on mobile/tablet, visible only on large screens (lg+) */}
        <a
          href="#home"
          aria-label="Prince Kumar — Home"
          className="hidden shrink-0 items-center justify-center rounded-2xl transition-transform duration-200 hover:scale-105 lg:flex"
        >
          <Image
            src={identity.logoPath}
            alt="Prince Kumar Logo"
            width={52}
            height={52}
            priority
            className="h-12 w-12 drop-shadow-[0_0_12px_rgba(21,88,201,0.45)]"
          />
        </a>

        {/* Compact Dark Glass Pill Container */}
        <div className="inline-flex w-fit items-center rounded-full border border-[#323E4E]/80 bg-[#070D1C]/85 p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-2.5 sm:py-2">
          <ul className="flex items-center gap-1 sm:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`inline-flex min-h-[36px] items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-normal tracking-wide transition-all duration-200 sm:min-h-[40px] sm:px-4 sm:py-1.5 sm:text-sm ${
                      isActive
                        ? "bg-[#1E2917] text-lime"
                        : "text-primaryText/90 hover:bg-[#1E2917]/60 hover:text-lime"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}

            {/* Contact CTA Pill Button */}
            <li>
              <a
                href="#contact"
                aria-current={activeId === "contact" ? "location" : undefined}
                className="inline-flex min-h-[36px] items-center justify-center whitespace-nowrap rounded-full bg-lime px-3.5 py-1.5 text-xs font-medium tracking-wide text-midnight shadow-[0_0_16px_rgba(212,255,36,0.2)] transition-all duration-200 hover:brightness-105 active:scale-95 sm:min-h-[40px] sm:px-5 sm:py-1.5 sm:text-sm"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}