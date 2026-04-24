import { LinkCard } from "@/components/LinkCard";
import { StatusBar } from "@/components/StatusBar";
import { links } from "@/lib/links";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12">
        <div className="pb-8 mb-8 border-b border-border">
          <div className="text-[11px] uppercase tracking-[0.14em] text-muted mb-2">
            Dashboards
          </div>
          <h1 className="text-[32px] font-semibold leading-tight tracking-tight">
            Personal research desk
          </h1>
          <p className="mt-2 text-[14px] text-muted max-w-xl">
            A shortcut to the dashboards I&rsquo;ve built. Click a card to open
            the full site.
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
