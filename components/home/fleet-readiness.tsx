import { readinessBands, routeSnapshots } from "@/lib/mock-data";

const totalReadiness = readinessBands.reduce((sum, item) => sum + item.value, 0);

export function FleetReadiness() {
  return (
    <section className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
      <article className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted">Fleet readiness</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brand">Operational distribution</h2>
          </div>
          <p className="text-sm text-muted">Updated 3 minutes ago</p>
        </div>

        <div className="mt-6 flex h-4 overflow-hidden rounded-full bg-slate-100">
          {readinessBands.map((band) => (
            <div
              key={band.label}
              className={band.colorClass}
              style={{ width: `${(band.value / totalReadiness) * 100}%` }}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {readinessBands.map((band) => (
            <div key={band.label} className="rounded-2xl border border-border bg-background p-4">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${band.colorClass}`} />
                <p className="text-sm font-medium text-brand">{band.label}</p>
              </div>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-brand">{band.value}%</p>
              <p className="mt-1 text-sm text-muted">of active equipment</p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft">
        <p className="text-sm font-medium text-muted">Route snapshot</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brand">What operators are watching</h2>
        <div className="mt-6 space-y-4">
          {routeSnapshots.map((snapshot) => (
            <div key={snapshot.label} className="rounded-2xl border border-border bg-background p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-brand">{snapshot.label}</p>
                  <p className="mt-1 text-sm text-muted">{snapshot.detail}</p>
                </div>
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {snapshot.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
