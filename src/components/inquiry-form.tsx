"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryFormState } from "@/app/actions";

const initialState: InquiryFormState = { status: "idle" };

const REASONS = ["Brand Partnership", "Modeling", "Creative or Local Project"];

const fieldClasses =
  "w-full border-b border-paper/30 bg-transparent py-3 font-sans text-paper placeholder:text-paper/40 focus:border-paper focus:outline-none";

export function InquiryForm() {
  const [state, formAction, isPending] = useActionState(
    submitInquiry,
    initialState,
  );

  if (state.status === "success") {
    return (
      <p className="font-display text-paper text-2xl" role="status">
        Thanks. Your inquiry is in. Isaiah will be in touch soon.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6" noValidate>
      <div>
        <label
          htmlFor="name"
          className="text-paper/60 mb-1 block font-sans text-sm"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={fieldClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-paper/60 mb-1 block font-sans text-sm"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClasses}
        />
      </div>

      <div>
        <label
          htmlFor="reason"
          className="text-paper/60 mb-1 block font-sans text-sm"
        >
          Reason for Contact
        </label>
        <div className="relative">
          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            className={`${fieldClasses} appearance-none pr-6`}
          >
            <option value="" disabled className="text-paper/40">
              Select one
            </option>
            {REASONS.map((reason) => (
              <option key={reason} value={reason} className="bg-ink">
                {reason}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 12 8"
            className="text-paper/50 pointer-events-none absolute top-1/2 right-0 h-2 w-3 -translate-y-1/2"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-paper/60 mb-1 block font-sans text-sm"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${fieldClasses} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <p className="text-rust font-sans text-sm" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="border-paper font-display text-paper mt-2 w-fit border-b text-lg transition-opacity hover:opacity-70 disabled:opacity-50"
      >
        {isPending ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
