import { alertFeed } from "@/lib/mock-data";

const severityColor: Record<string, string> = {
  high: "text-danger",
  medium: "text-warning",
  low: "text-muted",
};

export function AlertsPanel() {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <h2 className="text-base font-semibold">Recent alerts</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {alertFeed.map((alert) => (
          <li key={alert.message} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{alert.message}</p>
              <p className="text-xs text-muted">{alert.time}</p>
            </div>
            <span className={`text-xs font-semibold ${severityColor[alert.severity]}`}>
              {alert.severity}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
