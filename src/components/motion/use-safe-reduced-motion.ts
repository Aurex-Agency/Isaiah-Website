"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Reading prefers-reduced-motion directly (rather than motion's own
 * useReducedMotion) so the server snapshot and the client's first
 * hydration pass are guaranteed identical, per React's useSyncExternalStore
 * contract — avoids a hydration mismatch that a synchronous client-only
 * read would otherwise trigger.
 */
export function useSafeReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
