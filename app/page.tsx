import { ArrowRight, ShieldCheck, Waves, Fish, BarChart3 } from "lucide-react";
import { ActivityBoard } from "@/components/home/activity-board";
import { FleetReadiness } from "@/components/home/fleet-readiness";
import { AlertsPanel } from "@/components/ui/alerts-panel";
import { StatCard } from "@/components/ui/stat-card";
import { metricCards } from "@/lib/mock-data";

const highlights = [
  { label: "Active devices", value: "128" },
  { label: "Signal uptime", value: "98.4%" },
  { label: "Alerts today", value: "12" },
];

const features = [
  {
    title: "Measure catches instantly",
    description: "Get reliable fish-length measurements from the dock with camera-assisted capture and confidence scoring.",
    icon: Fish,
  },
  {
    title: "Water-aware telemetry",
    description: "Track dock conditions, sensor health, and network quality in a single glance with clean visual summaries.",
    icon: Waves,
  },
  {
    title: "Decision-ready analytics",
    description: "Convert daily fish activity into trends and operations insights your team can act on quickly.",
    icon: BarChart3,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8 pb-8 md:space-y-10 md:pb-10">
      <section className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-6 py-8 text-white shadow-card md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
              <ShieldCheck className="h-3.5 w-3.5" />
              Fishtechy Web Platform
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Measuring fish data,
                <br className="hidden md:block" />
                without the chaos.
              </h1>
              <p className="max-w-2xl text-sm text-white/80 md:text-base">
                Capture every catch, monitor sensor reliability, and coordinate field teams from one clear dashboard built for fast decisions.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-brand-800 transition hover:bg-white/90">
                Start new session
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10">
                View live map
              </button>
            </div>
          </div>

          <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/15 p-3 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item) => (
              <article key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-white/70">{item.label}</p>
                <p className="mt-1 text-2xl font-semibold">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
              <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-2 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-base font-semibold text-foreground">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metricCards.map((metric) => (
          <StatCard key={metric.label} {...metric} />
        ))}
      </section>

      <div className="grid gap-4 2xl:grid-cols-[minmax(0,1.55fr)_360px]">
        <div className="space-y-4">
          <FleetReadiness />
          <ActivityBoard />
        </div>
        <AlertsPanel />
      </div>
    </div>
  );
}
