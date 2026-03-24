export const metricCards = [
  {
    label: "Connected vessels",
    value: 128,
    delta: "+12 this week",
  },
  {
    label: "Telemetry uptime",
    value: "99.2%",
    delta: "+0.8% vs last month",
  },
  {
    label: "Critical alerts",
    value: 6,
    delta: "-4 since yesterday",
  },
  {
    label: "Avg response time",
    value: "4m 18s",
    delta: "Within SLA target",
  },
];

export const alertFeed = [
  {
    message: "Portside oxygen sensor drifting above baseline",
    time: "2m ago",
    severity: "high",
  },
  {
    message: "Cold-chain relay restarted automatically",
    time: "12m ago",
    severity: "medium",
  },
  {
    message: "Harbor gateway packet loss back to normal",
    time: "25m ago",
    severity: "low",
  },
  {
    message: "Battery pack 07 scheduled for preventative maintenance",
    time: "48m ago",
    severity: "low",
  },
];

export const readinessBands = [
  {
    label: "Healthy",
    value: 74,
    colorClass: "bg-emerald-500",
  },
  {
    label: "Needs attention",
    value: 18,
    colorClass: "bg-amber-400",
  },
  {
    label: "Offline",
    value: 8,
    colorClass: "bg-rose-500",
  },
];

export const routeSnapshots = [
  {
    label: "North Atlantic corridor",
    value: "24 vessels",
    detail: "3 weather watches, 0 route deviations",
  },
  {
    label: "Mediterranean coastal farms",
    value: "11 active sites",
    detail: "Feeding automation stable across all zones",
  },
  {
    label: "Pacific export lane",
    value: "8 live shipments",
    detail: "ETA variance tightened to 14 minutes",
  },
];

export const activityTimeline = [
  {
    title: "Maintenance window completed",
    time: "09:20 UTC",
    description:
      "Firmware 2.8.4 was rolled out to 32 field controllers with zero rollback events.",
  },
  {
    title: "Harvest readiness updated",
    time: "08:45 UTC",
    description:
      "Two pens crossed the biomass threshold and were promoted into the dispatch queue.",
  },
  {
    title: "Anomaly review assigned",
    time: "07:10 UTC",
    description:
      "Sensor variance cluster from Site 14 is now routed to operations for manual review.",
  },
];

export const priorityActions = [
  {
    title: "Review oxygen variance",
    description: "Check site 14 pen telemetry before the next feeding cycle.",
    tag: "Urgent",
  },
  {
    title: "Approve preventative maintenance",
    description: "Confirm technician slot for battery pack replacements in Bergen.",
    tag: "Today",
  },
  {
    title: "Validate export lane ETA changes",
    description: "Sanity-check the route model after the latest weather ingest.",
    tag: "Ops",
  },
];
