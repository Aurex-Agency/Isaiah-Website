"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

type Status = "idle" | "copied" | "failed";

/**
 * Fallback for visitors whose in-app browser (Instagram, TikTok) or device
 * has no mail app wired up to `mailto:` links: one tap copies the address.
 */
export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function handleCopy() {
    const ok = await copyText(email);
    setStatus(ok ? "copied" : "failed");
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), 2400);
  }

  const label =
    status === "copied"
      ? "Copied"
      : status === "failed"
        ? "Press and hold to copy"
        : "Copy";

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="group/copy text-ink focus-visible:outline-ink flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:-outline-offset-4"
      >
        <span className="text-ink/70 min-w-0 truncate font-sans text-sm select-all">
          {email}
        </span>
        <span className="relative flex h-5 shrink-0 items-center overflow-hidden font-sans text-xs font-medium tracking-[0.14em] uppercase">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={status}
              className="flex items-center gap-1.5"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-110%", opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {label}
              {status === "copied" ? (
                <CheckIcon className="size-3.5" />
              ) : status === "idle" ? (
                <CopyIcon className="size-3.5 transition-transform duration-300 group-hover/copy:-translate-y-px" />
              ) : null}
            </motion.span>
          </AnimatePresence>
        </span>
      </button>
      <span role="status" className="sr-only">
        {status === "copied" ? "Email address copied" : ""}
      </span>
    </>
  );
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return legacyCopy(text);
  }
}

// Older in-app webviews expose no async clipboard API.
function legacyCopy(text: string) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(field);
  return ok;
}
