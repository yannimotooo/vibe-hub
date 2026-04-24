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
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.12em] text-muted mb-3">
        <span>{link.category}</span>
        <span className="font-mono normal-case tracking-normal text-subtle">
          {host}
        </span>
      </div>

      <h2 className="text-[17px] font-semibold leading-snug tracking-tight text-ink group-hover:text-accent transition-colors">
        {link.title}
      </h2>

      <p className="mt-2 text-[13.5px] text-muted leading-relaxed">
        {link.description}
      </p>
    </a>
  );
}
