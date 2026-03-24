import { activityTimeline, priorityActions } from "@/lib/mock-data";

export function ActivityBoard() {
  return (
    <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      <article className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted">Operations timeline</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brand">Today’s movement</h2>
          </div>
          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
            Live sync
          </span>
        </div>

        <div className="mt-6 space-y-6">
          {activityTimeline.map((item, index) => (
            <div key={item.title} className="grid gap-3 sm:grid-cols-[88px_1fr] sm:gap-5">
              <p className="text-sm font-medium text-muted">{item.time}</p>
              <div className="relative rounded-2xl border border-border bg-background p-4">
                {index < activityTimeline.length - 1 ? (
                  <span className="absolute -bottom-6 left-5 hidden h-6 w-px bg-border sm:block" />
                ) : null}
                <p className="text-base font-semibold text-brand">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[1.75rem] border border-border bg-brand p-6 text-white shadow-card">
        <p className="text-sm font-medium text-cyan-100">Priority queue</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight">Next best actions</h2>
        <div className="mt-6 space-y-4">
          {priorityActions.map((action) => (
            <div key={action.title} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{action.title}</p>
                <span className="rounded-full bg-white/12 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                  {action.tag}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-200">{action.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
