import { Bell, Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-surface/80 px-6 py-4 backdrop-blur">
      <div className="relative w-full max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          className="h-10 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm focus:border-brand-400 focus:outline-none"
          placeholder="Search devices, alerts, inventory"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="relative rounded-full border border-border bg-surface p-2">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-danger"></span>
        </button>
        <div className="flex items-center gap-3 rounded-full border border-border bg-surface px-3 py-1.5 text-sm">
          <span className="h-8 w-8 rounded-full bg-brand-700/90 text-center leading-8 text-white">
            A
          </span>
          <div>
            <p className="text-sm font-medium">Alex Morgan</p>
            <p className="text-xs text-muted">Org Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
