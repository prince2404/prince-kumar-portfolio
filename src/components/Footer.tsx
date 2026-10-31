import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { identity } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-5xl px-4 pl-10 sm:pl-14 md:px-8 md:pl-20 lg:pl-24">
      <div className="border-t border-white/[0.06] py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-xs font-medium uppercase tracking-[0.15em] text-mutedText/60">
            © {currentYear} {identity.name}. All rights reserved.
          </p>
          <p className="font-display text-xs font-medium text-mutedText/40">
            Designed & Built with{" "}
            <span className="text-lime">♥</span>
          </p>
        </div>
      </div>
    </div>
  );
}
