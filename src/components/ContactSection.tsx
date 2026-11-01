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

  const WEB3FORMS_ACCESS_KEY = "6ef6e3b8-f0d4-4dff-bac7-e88f917f0510";

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
    <section id="contact" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={contact.heading} />

      {/* Message Form Only */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-card-subtle sm:p-8 md:p-10"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-xs font-medium text-mutedText"
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
              className="w-full min-h-[44px] rounded-lg border border-white/10 bg-midnight px-3.5 py-2.5 text-sm text-primaryText placeholder:text-mutedText/50 transition-colors focus:border-lime focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-xs font-medium text-mutedText"
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
              className="w-full min-h-[44px] rounded-lg border border-white/10 bg-midnight px-3.5 py-2.5 text-sm text-primaryText placeholder:text-mutedText/50 transition-colors focus:border-lime focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-xs font-medium text-mutedText"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full rounded-lg border border-white/10 bg-midnight px-3.5 py-2.5 text-sm text-primaryText placeholder:text-mutedText/50 transition-colors focus:border-lime focus:outline-none"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold tracking-wide text-midnight transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Send Message
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
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
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
    </section>
  );
}
