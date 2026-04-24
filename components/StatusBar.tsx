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
        <span className="font-semibold tracking-tight">Vibe Hub</span>
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
