import { alertFeed } from "@/lib/mock-data";

const severityStyles: Record<string, string> = {
  high: "bg-rose-50 text-rose-600",
  medium: "bg-amber-50 text-amber-600",
  low: "bg-slate-100 text-slate-500",
};

export function AlertsPanel() {
  return (
    <article className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-muted">Alerts</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brand">Recent events</h2>
        </div>
        <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
          6 open
        </span>
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {alertFeed.map((alert) => (
          <li key={alert.message} className="rounded-2xl border border-border bg-background p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-brand">{alert.message}</p>
                <p className="mt-1 text-xs text-muted">{alert.time}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${severityStyles[alert.severity]}`}
              >
                {alert.severity}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
