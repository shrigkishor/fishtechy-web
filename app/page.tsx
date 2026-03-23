import { AlertsPanel } from "@/components/ui/alerts-panel";
import { StatCard } from "@/components/ui/stat-card";
import { metricCards } from "@/lib/mock-data";

export default function Page() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-sm text-muted">Welcome back</p>
        <h1 className="mt-1 text-3xl font-semibold">Fishtechy Control</h1>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metricCards.map((metric) => (
          <StatCard key={metric.label} {...metric} />
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-soft lg:col-span-2">
          <h2 className="text-base font-semibold">Device health</h2>
          <p className="mt-1 text-sm text-muted">
            Placeholder for device health chart – will swap with the actual chart after pulling the Figma spec.
          </p>
          <div className="mt-6 h-48 rounded-xl border border-dashed border-border" />
        </article>
        <AlertsPanel />
      </section>
    </div>
  );
}
