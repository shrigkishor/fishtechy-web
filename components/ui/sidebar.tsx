import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import {
  LayoutGrid,
  Cpu,
  Layers3,
  BellRing,
  Settings,
} from "lucide-react";

const iconMap = {
  grid: LayoutGrid,
  chip: Cpu,
  stack: Layers3,
  alert: BellRing,
  settings: Settings,
} as const;

export function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-border bg-surface/60 p-6">
      <div className="mb-8 flex items-center gap-2">
        <span className="text-xl font-semibold tracking-tight">Fishtechy</span>
      </div>
      <nav className="space-y-1">
        {NAV_LINKS.map((item) => {
          const Icon = iconMap[item.icon ?? "grid"] ?? LayoutGrid;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-brand/5 hover:text-brand-700"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-xl border border-dashed border-border px-4 py-3 text-xs text-muted">
        Device health synced 5 min ago
      </div>
    </aside>
  );
}
