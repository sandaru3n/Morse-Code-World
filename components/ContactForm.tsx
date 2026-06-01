"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function validate(name: string, email: string, subject: string, message: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!subject.trim()) errors.subject = "Subject is required.";
  if (!message.trim()) {
    errors.message = "Message is required.";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.trim().length > 2000) {
    errors.message = "Message must be under 2000 characters.";
  }
  return errors;
}

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 font-body text-sm text-neutral-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-surface-container dark:text-on-surface dark:placeholder:text-slate-600";
const inputNormal = "border-slate-200 focus:ring-primary-container/30 dark:border-outline-variant/30";
const inputError = "border-red-400 focus:ring-red-400/30 dark:border-red-500/60";
const labelBase = "mb-1.5 block font-label text-[11px] font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-400";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const getFieldError = (field: keyof FieldErrors) =>
    touched[field] ? fieldErrors[field] : undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(name, email, subject, message);
    setFieldErrors(errors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(errors).length > 0) return;

    setState("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message })
      });

      const data = await res.json() as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setState("error");
      } else {
        setState("success");
      }
    } catch {
      setServerError("Could not reach the server. Check your connection and try again.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900/40 dark:bg-emerald-950/30">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
          <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-headline text-lg font-bold text-emerald-800 dark:text-emerald-300">Message sent!</h2>
        <p className="mt-2 font-body text-sm text-emerald-700 dark:text-emerald-400">
          Thanks for reaching out. We'll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => { setState("idle"); setName(""); setEmail(""); setSubject(""); setMessage(""); setTouched({}); setFieldErrors({}); }}
          className="mt-4 font-label text-xs font-semibold uppercase tracking-widest text-emerald-700 underline underline-offset-2 hover:no-underline dark:text-emerald-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { void handleSubmit(e); }}
      noValidate
      aria-label="Contact form"
      className="mt-8 space-y-5"
    >
      <div>
        <label htmlFor="contact-name" className={labelBase}>
          Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur("name")}
          aria-required="true"
          aria-invalid={!!getFieldError("name")}
          aria-describedby={getFieldError("name") ? "contact-name-error" : undefined}
          className={`${inputBase} ${getFieldError("name") ? inputError : inputNormal}`}
        />
        {getFieldError("name") && (
          <p id="contact-name-error" role="alert" className="mt-1 font-label text-[11px] text-red-600 dark:text-red-400">
            {getFieldError("name")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelBase}>
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur("email")}
          aria-required="true"
          aria-invalid={!!getFieldError("email")}
          aria-describedby={getFieldError("email") ? "contact-email-error" : undefined}
          className={`${inputBase} ${getFieldError("email") ? inputError : inputNormal}`}
        />
        {getFieldError("email") && (
          <p id="contact-email-error" role="alert" className="mt-1 font-label text-[11px] text-red-600 dark:text-red-400">
            {getFieldError("email")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelBase}>
          Subject <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="What is your message about?"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          onBlur={() => handleBlur("subject")}
          aria-required="true"
          aria-invalid={!!getFieldError("subject")}
          aria-describedby={getFieldError("subject") ? "contact-subject-error" : undefined}
          className={`${inputBase} ${getFieldError("subject") ? inputError : inputNormal}`}
        />
        {getFieldError("subject") && (
          <p id="contact-subject-error" role="alert" className="mt-1 font-label text-[11px] text-red-600 dark:text-red-400">
            {getFieldError("subject")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelBase}>
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={6}
          placeholder="Write your message here…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-required="true"
          aria-invalid={!!getFieldError("message")}
          aria-describedby={[
            getFieldError("message") ? "contact-message-error" : "",
            "contact-message-count"
          ].filter(Boolean).join(" ") || undefined}
          className={`${inputBase} resize-none ${getFieldError("message") ? inputError : inputNormal}`}
        />
        <div className="mt-1 flex items-start justify-between gap-2">
          {getFieldError("message") ? (
            <p id="contact-message-error" role="alert" className="font-label text-[11px] text-red-600 dark:text-red-400">
              {getFieldError("message")}
            </p>
          ) : <span />}
          <span
            id="contact-message-count"
            aria-live="polite"
            className={`font-label text-[10px] tabular-nums ${message.length > 1800 ? "text-red-500" : "text-slate-400 dark:text-slate-600"}`}
          >
            {message.length}/2000
          </span>
        </div>
      </div>

      {state === "error" && serverError && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-body text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-xl bg-primary-container py-3 font-headline text-sm font-bold text-on-primary-container shadow-neon-primary transition-[filter] hover:brightness-110 disabled:opacity-60 dark:text-on-primary-container"
      >
        {state === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Sending…
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">
        By submitting this form you agree to our{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-emerald-600 dark:hover:text-primary-container">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
