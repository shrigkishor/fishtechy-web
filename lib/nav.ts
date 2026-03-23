export type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

export const NAV_LINKS: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "grid" },
  { label: "Devices", href: "/devices", icon: "chip" },
  { label: "Inventory", href: "/inventory", icon: "stack" },
  { label: "Alerts", href: "/alerts", icon: "alert" },
  { label: "Settings", href: "/settings", icon: "settings" },
];
