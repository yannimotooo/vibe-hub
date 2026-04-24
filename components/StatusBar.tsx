"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function StatusBar() {
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();

  async function onLogout() {
    setLoggingOut(true);
    await fetch("/api/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <header className="border-b border-border bg-surface">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-semibold tracking-tight">Vibe Hub</span>
          <span className="text-[11px] uppercase tracking-[0.14em] text-subtle hidden sm:inline">
            Yannick&rsquo;s desk
          </span>
        </div>
        <button
          onClick={onLogout}
          disabled={loggingOut}
          className="text-[13px] text-muted hover:text-ink disabled:opacity-50 transition-colors"
        >
          {loggingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </header>
  );
}
