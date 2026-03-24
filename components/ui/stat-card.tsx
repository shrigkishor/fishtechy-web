export function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string | number;
  delta: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-border bg-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-brand">{value}</p>
      <p className="mt-2 text-sm text-emerald-600">{delta}</p>
    </article>
  );
}
