import { LinkCard } from "@/components/LinkCard";
import { StatusBar } from "@/components/StatusBar";
import { links } from "@/lib/links";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12">
        <div className="pb-8 mb-8 border-b border-border">
          <h1 className="text-[40px] font-semibold leading-tight tracking-tight">
            <span className="text-accent">&gt;</span> Vibe Hub
          </h1>
          <p className="mt-2 text-[13.5px] text-muted max-w-xl">
            Directory of internal DeFi Vibe Projects. Click a card to open the
            full site.
          </p>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <LinkCard key={link.url} link={link} />
          ))}
        </section>
      </main>
    </div>
  );
}
