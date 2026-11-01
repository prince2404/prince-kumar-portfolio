import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { identity } = portfolioData;
  const currentYear = new Date().getFullYear();
  const instagramUrl =
    "https://www.instagram.com/thenameisprincekumar?psln=aWpjczM0Z2ZkOXZp";
  const whatsappUrl = `https://wa.me/${identity.phone.replace(/[^0-9]/g, "")}`;

  return (
    <footer className="mx-auto max-w-5xl px-4 pl-10 sm:pl-14 md:px-8 md:pl-20 lg:pl-24">
      {/* Social Links Bar */}
      <div className="rounded-2xl border border-lime/30 bg-surface p-6 sm:p-8">
        <h3 className="font-display text-lg font-bold uppercase tracking-wider text-primaryText sm:text-xl">
          Let&apos;s Do This
        </h3>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-midnight px-4 py-2 text-sm font-medium text-primaryText transition-all duration-150 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
            LinkedIn
          </a>

          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-midnight px-4 py-2 text-sm font-medium text-primaryText transition-all duration-150 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
              />
            </svg>
            GitHub
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-midnight px-4 py-2 text-sm font-medium text-primaryText transition-all duration-150 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-midnight px-4 py-2 text-sm font-medium text-primaryText transition-all duration-150 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
            WhatsApp
          </a>

          <a
            href={`mailto:${identity.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-midnight transition-transform duration-150 hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Send Email
          </a>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-white/[0.06] py-8 mt-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-mutedText/60">
            © {currentYear} {identity.name}. All rights reserved.
          </p>
          <p className="text-xs font-medium text-mutedText/40">
            Designed & Built with{" "}
            <span className="text-lime">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
