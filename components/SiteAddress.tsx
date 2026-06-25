import { SITE_OPERATOR_NAME, SITE_POSTAL_ADDRESS } from "@/lib/site";

const cardClassName =
  "not-italic rounded-2xl border border-slate-200/80 bg-white p-5 font-body text-sm leading-relaxed text-slate-700 shadow-sm dark:border-white/10 dark:bg-surface-container dark:text-slate-300 sm:p-6 sm:text-base";

const inlineClassName =
  "not-italic rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 font-body text-sm leading-relaxed text-slate-700 dark:border-white/5 dark:bg-surface-container-lowest dark:text-slate-300";

type SiteAddressProps = {
  variant?: "card" | "inline";
  className?: string;
};

export function SiteAddress({ variant = "card", className }: SiteAddressProps) {
  const base = variant === "card" ? cardClassName : inlineClassName;
  const merged = className ? `${base} ${className}` : base;

  return (
    <address className={merged}>
      <div
        className={
          variant === "card"
            ? "font-headline font-bold text-neutral-900 dark:text-on-surface"
            : "font-semibold text-neutral-800 dark:text-slate-200"
        }
      >
        {SITE_OPERATOR_NAME}
      </div>
      <div className={variant === "card" ? "mt-2" : "mt-1"}>{SITE_POSTAL_ADDRESS.streetLine1}</div>
      <div>{SITE_POSTAL_ADDRESS.streetLine2}</div>
      <div className={variant === "card" ? "mt-1" : undefined}>{SITE_POSTAL_ADDRESS.country}</div>
    </address>
  );
}
