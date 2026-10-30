"use client";

import { useState, type FormEvent } from "react";
import { portfolioData } from "@/data/portfolio";
import StageHeader from "./StageHeader";

export default function ContactSection() {
  const { identity, contact } = portfolioData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  // 1. PASTE YOUR WEB3FORMS ACCESS KEY HERE (from your Gmail):
  const WEB3FORMS_ACCESS_KEY = "6ef6e3b8-f0d4-4dff-bac7-e88f917f0510";

  // 2. Replace with your Instagram username:
  const instagramUrl = "https://www.instagram.com/thenameisprincekumar?psln=aWpjczM0Z2ZkOXZp";
  const whatsappUrl = `https://wa.me/${identity.phone.replace(/[^0-9]/g, "")}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `New Portfolio Message from ${name.trim()}`,
          from_name: "Prince Kumar Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={contact.heading} />

      <div className="rounded-2xl border-2 border-cobalt bg-surface p-6 shadow-cobalt-glow sm:p-8 md:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Summary, Contact Details, Social Icons & Resume */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <h3 className="font-display text-[length:var(--step-h3)] font-bold text-primaryText">
                Get in Touch
              </h3>
              <p className="mt-2.5 text-[length:var(--step-body)] leading-relaxed text-mutedText">
                {contact.summary}
              </p>

              {/* Direct Contact Info Cards */}
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${identity.email}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-cobalt/50 bg-midnight p-3.5 transition-colors hover:border-lime"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cobalt/50 bg-surface text-lime">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs text-mutedText">Email</span>
                    <span className="block truncate text-sm font-semibold text-primaryText group-hover:text-lime">
                      {identity.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${identity.phone.replace(/\s+/g, "")}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-cobalt/50 bg-midnight p-3.5 transition-colors hover:border-lime"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cobalt/50 bg-surface text-lime">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-xs text-mutedText">Phone</span>
                    <span className="block text-sm font-semibold text-primaryText group-hover:text-lime">
                      {identity.phone}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Icons Bar: GitHub, LinkedIn, Instagram, WhatsApp & Resume */}
            <div className="mt-8 border-t border-cobalt/40 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-mutedText">
                Social Profiles
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                {/* GitHub Icon Button */}
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-cobalt/60 bg-midnight text-primaryText transition-all duration-150 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                    />
                  </svg>
                </a>

                {/* LinkedIn Icon Button */}
                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-cobalt/60 bg-midnight text-primaryText transition-all duration-150 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                  </svg>
                </a>

                {/* Instagram Icon Button */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-cobalt/60 bg-midnight text-primaryText transition-all duration-150 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                {/* WhatsApp Icon Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-cobalt/60 bg-midnight text-primaryText transition-all duration-150 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </a>

                {/* Resume Download Button */}
                <a
                  href={identity.resumePdfPath}
                  download
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-cobalt bg-midnight px-4 py-2.5 font-display text-xs font-bold tracking-wide text-primaryText transition-transform duration-150 hover:-translate-y-0.5 hover:border-lime sm:text-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-cobalt/60 bg-midnight p-5 sm:p-7"
            >
              <h3 className="font-display text-[length:var(--step-h3)] font-bold text-primaryText">
                Send a Message
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-semibold text-mutedText"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full min-h-[44px] rounded-lg border border-cobalt/60 bg-surface px-3.5 py-2.5 text-sm text-primaryText placeholder:text-mutedText/50 focus:border-lime focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-semibold text-mutedText"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full min-h-[44px] rounded-lg border border-cobalt/60 bg-surface px-3.5 py-2.5 text-sm text-primaryText placeholder:text-mutedText/50 focus:border-lime focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-semibold text-mutedText"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className="w-full rounded-lg border border-cobalt/60 bg-surface px-3.5 py-2.5 text-sm text-primaryText placeholder:text-mutedText/50 focus:border-lime focus:outline-none"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-lime px-6 py-3 font-display text-sm font-bold tracking-wide text-midnight transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "sent" && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="text-xs font-medium text-lime"
                  >
                    Message sent! Thank you for reaching out.
                  </p>
                )}

                {status === "error" && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="text-xs font-medium text-red-400"
                  >
                    Could not send right now. Please email {identity.email} directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}