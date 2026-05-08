"use client";

import { FormEvent, ReactNode, useCallback, useMemo, useState } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    gtag_report_conversion?: (url?: string) => boolean;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

type Option = { value: string; label: string };

type LeadCaptureFormV2Props = {
  title: string;
  subtitle?: string;
  submitLabel: string;
  endpoint: string;
  recaptchaAction: string;
  compact?: boolean;
  variant?: "page" | "modal";

  topSlot?: ReactNode;
  bottomSlot?: ReactNode;

  fields: Array<
    | {
        kind: "text" | "tel" | "email" | "url";
        name: string;
        label: string;
        placeholder?: string;
        required?: boolean;
        autoComplete?: string;
        inputMode?: "text" | "tel" | "email" | "url" | "numeric";
      }
    | {
        kind: "textarea";
        name: string;
        label: string;
        placeholder?: string;
        required?: boolean;
        rows?: number;
      }
    | {
        kind: "segmented";
        name: string;
        label: string;
        required?: boolean;
        options: Option[];
      }
  >;

  validate?: (form: HTMLFormElement) => { ok: true } | { ok: false; message: string };
  onSuccess?: () => void;
};

export function LeadCaptureFormV2(props: LeadCaptureFormV2Props) {
  const {
    title,
    subtitle,
    submitLabel,
    endpoint,
    recaptchaAction,
    compact = false,
    variant = "page",
    topSlot,
    bottomSlot,
    fields,
    validate,
    onSuccess,
  } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [segmentedValues, setSegmentedValues] = useState<Record<string, string>>({});

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const getRecaptchaToken = useCallback((): Promise<string | null> => {
    if (!siteKey || typeof window === "undefined") return Promise.resolve(null);
    return new Promise((resolve) => {
      const run = () => {
        if (!window.grecaptcha) {
          resolve(null);
          return;
        }
        window.grecaptcha
          .ready(() => {
            window.grecaptcha!
              .execute(siteKey, { action: recaptchaAction })
              .then(resolve)
              .catch(() => resolve(null));
          });
      };

      if (window.grecaptcha) {
        run();
        return;
      }

      const deadline = Date.now() + 8000;
      const check = () => {
        if (window.grecaptcha) {
          run();
          return;
        }
        if (Date.now() < deadline) {
          setTimeout(check, 200);
        } else {
          resolve(null);
        }
      };
      setTimeout(check, 100);
    });
  }, [recaptchaAction, siteKey]);

  const styles = useMemo(() => {
    const isModal = variant === "modal";
    const isCompact = compact;

    return {
      wrapper: isModal
        ? "space-y-4"
        : isCompact
          ? "w-full rounded-2xl border border-slate-200/70 bg-white/90 p-3 shadow-sm sm:p-4"
          : "w-full rounded-3xl border border-slate-200/70 bg-white/80 p-3 shadow-sm backdrop-blur sm:p-6",
      header: isCompact ? "space-y-0" : "space-y-0.5",
      title: "text-lg font-semibold tracking-tight text-slate-900 sm:text-xl",
      subtitle: "text-sm text-slate-600",
      section: isCompact ? "space-y-2.5 sm:space-y-3" : "space-y-3 sm:space-y-4",
      grid2: "grid gap-4 sm:grid-cols-2",
      label: "block text-[13px] font-medium text-slate-700 sm:text-sm",
      input:
        "mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-base text-slate-900 shadow-sm outline-none ring-emerald-500/0 transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 sm:text-sm",
      textarea:
        "mt-1.5 w-full resize-none rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-base text-slate-900 shadow-sm outline-none ring-emerald-500/0 transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 sm:text-sm",
      // Mobile: stack options (better tap targets); Desktop: 2 columns.
      segmentedWrap: "mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2",
      segmentedButton: (active: boolean) =>
        [
          "w-full select-none rounded-2xl border px-3 py-2 text-sm font-medium transition sm:w-auto sm:rounded-full sm:px-3 sm:py-1.5 sm:text-xs",
          active
            ? "border-emerald-500 bg-emerald-50 text-emerald-700"
            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
        ].join(" "),
      error: "rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700",
      submit:
        isCompact
          ? "mt-2 flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:shadow-emerald-500/35 disabled:cursor-not-allowed disabled:opacity-70"
          : "mt-2 flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:shadow-emerald-500/35 disabled:cursor-not-allowed disabled:opacity-70",
      footer: isCompact ? "mt-1 text-center text-[11px] leading-snug text-slate-500" : "mt-2 text-center text-[11px] leading-snug text-slate-500",
      recaptcha: "mt-1 text-center text-[10px] text-slate-400",
    };
  }, [variant]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;

    const result = validate?.(form);
    if (result && !result.ok) {
      setError(result.message);
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);

      for (const [k, v] of Object.entries(segmentedValues)) {
        if (v) formData.set(k, v);
      }

      const token = await getRecaptchaToken();
      if (token) {
        formData.set("g-recaptcha-response", token);
      } else if (siteKey) {
        setError("Security check is still loading. Please wait a moment and try again.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (typeof window.gtag_report_conversion === "function") {
        window.gtag_report_conversion();
      }

      if (response.redirected) {
        window.location.href = response.url;
        return;
      }

      const url = new URL(window.location.href);
      url.searchParams.set("submitted", "1");
      window.location.href = url.toString();

      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      {/* Honeypot: hidden field should stay empty for real users. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        {!compact && subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>

      {topSlot}

      <div className={styles.section}>
        {fields.map((field) => {
          if (field.kind === "segmented") {
            const value = segmentedValues[field.name] ?? "";
            return (
              <div key={field.name}>
                <label className={styles.label}>
                  {field.label} {field.required ? <span className="text-red-500">*</span> : null}
                </label>
                <input type="hidden" name={field.name} value={value} />

                {compact ? (
                  <select
                    className={styles.input}
                    aria-label={field.label}
                    required={field.required}
                    value={value}
                    onChange={(e) =>
                      setSegmentedValues((s) => ({ ...s, [field.name]: e.target.value }))
                    }
                  >
                    <option value="">{field.required ? "Select..." : "Optional"}</option>
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className={styles.segmentedWrap}>
                    {field.options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        className={styles.segmentedButton(value === opt.value)}
                        onClick={() =>
                          setSegmentedValues((s) => ({ ...s, [field.name]: opt.value }))
                        }
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          if (field.kind === "textarea") {
            return (
              <div key={field.name}>
                <label className={styles.label}>
                  {field.label} {field.required ? <span className="text-red-500">*</span> : null}
                </label>
                <textarea
                  name={field.name}
                  required={field.required}
                  rows={field.rows ?? 4}
                  className={styles.textarea}
                  placeholder={field.placeholder}
                />
              </div>
            );
          }

          return (
            <div key={field.name}>
              <label className={styles.label}>
                {field.label} {field.required ? <span className="text-red-500">*</span> : null}
              </label>
              <input
                type={field.kind}
                name={field.name}
                required={field.required}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                className={styles.input}
                placeholder={field.placeholder}
              />
            </div>
          );
        })}
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}

      <button type="submit" disabled={isSubmitting} className={styles.submit}>
        {isSubmitting ? "Submitting..." : submitLabel}
      </button>

      {bottomSlot}

      {!compact ? (
        <p className={styles.footer}>Your details are safe. No spam, no fake calls, no fake leads.</p>
      ) : null}

      {!compact && siteKey ? (
        <p className={styles.recaptcha}>
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="underline hover:text-slate-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            className="underline hover:text-slate-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      ) : null}
    </form>
  );
}

