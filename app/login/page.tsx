"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/");
        router.refresh();
      } else {
        setError("Incorrect password");
        setPassword("");
        inputRef.current?.focus();
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-[360px]">
        <div className="mb-8">
          <h1 className="text-[28px] font-semibold tracking-tight">
            <span className="text-accent">&gt;</span> Vibe Hub
          </h1>
          <p className="mt-2 text-[13px] text-muted vh-cursor">
            $ sign in
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            autoComplete="current-password"
            autoFocus
            placeholder="Password"
            className="w-full bg-surface border border-border px-3.5 py-2.5 text-[14px] outline-none focus:border-ink transition-colors disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={loading || password.length === 0}
            className="w-full bg-ink text-white text-[13px] font-medium tracking-wide py-2.5 hover:bg-black transition-colors disabled:opacity-30 disabled:hover:bg-ink"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <div className="min-h-[1rem] text-center">
            {error && (
              <span className="text-[12px] text-red-600">{error}</span>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
