const mockMetrics = [
  { label: "Active devices", value: "128", trend: "+4.2%" },
  { label: "Avg. signal", value: "98.4%", trend: "+1.1%" },
  { label: "Alerts", value: "12", trend: "-3 vs yesterday" },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-sm text-muted">Welcome back</p>
        <h1 className="mt-1 text-3xl font-semibold">Fishtechy Control</h1>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-2xl border border-border bg-surface p-5 shadow-card"
          >
            <p className="text-sm text-muted">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
            <p className="text-xs text-success">{metric.trend}</p>
          </article>
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-soft lg:col-span-2">
          <h2 className="text-base font-semibold">Device health</h2>
          <p className="mt-1 text-sm text-muted">
            Placeholder for chart component – will be replaced with real visualization.
          </p>
          <div className="mt-6 h-48 rounded-xl border border-dashed border-border" />
        </article>
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
          <h2 className="text-base font-semibold">Recent alerts</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Dock sensor offline · 2 mins ago</li>
            <li>Battery health warning · 12 mins ago</li>
            <li>Telemetry drift detected · 25 mins ago</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
