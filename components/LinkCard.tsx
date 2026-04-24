import type { HubLink } from "@/lib/links";

export function LinkCard({ link }: { link: HubLink }) {
  const host = new URL(link.url).host.replace(/^www\./, "");

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-surface border border-border p-5 hover:border-ink transition-colors"
    >
      <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.12em] text-muted mb-3">
        <span className="whitespace-nowrap">[ {link.category} ]</span>
        <span className="normal-case tracking-normal text-subtle truncate">
          {host}
        </span>
      </div>

      <h2 className="text-[16px] font-semibold leading-snug tracking-tight text-ink group-hover:text-accent transition-colors">
        <span className="text-muted group-hover:text-accent transition-colors">
          &gt;{" "}
        </span>
        {link.title}
      </h2>

      <p className="mt-2 text-[13px] text-muted leading-relaxed">
        {link.description}
      </p>
    </a>
  );
}
