# Fishtechy Web – Build Plan

## 1. Architecture
- **App Router** with route groups per major surface (dash, analytics, devices, settings).
- Shared layout with persistent sidebar + top navigation.
- Context providers for theme + viewport state placed in `app/layout.tsx`.

## 2. Design System Extraction (from Figma)
- Colors: neutrals (background, surface, border), primary/secondary brand tones, semantic (success/warning/error).
- Typography: heading scale (display → xs), body/base, mono for metrics.
- Spacing scale: 4px grid (4, 8, 12, 16, 24, 32, 40, 48, 64).
- Radii: xs (4px), sm (8px), lg (16px), full for pills.
- Shadows: card (y1 blur4), elevated (y4 blur16).

*(Values will be lifted directly from Figma tokens in the next step.)*

## 3. Component Inventory
- **Navigation**: sidebar (logo, routes, device status), top bar (search, notifications, user menu).
- **Dashboard sections**: KPI tiles, device health chart, recent activity timeline, alerts list.
- **Shared components**: Button, IconButton, Badge, StatCard, DataTable, Modal, Filter pills, Tabs, Empty states.
- **Forms & Inputs**: Select, segmented controls, toggle, text inputs with helper/error states.
- **Support screens**: Device detail, Inventory list, Settings, Authentication (sign-in/2FA).

## 4. Work Breakdown (atomic loop)
1. **Setup**: Tailwind theme + fonts + CSS vars.
2. Base layout shell (Sidebar + Topbar + main grid).
3. Dashboard hero + KPI cards.
4. Activity timeline + alerts/tables.
5. Device detail modules.
6. Global components (buttons, cards, inputs, table, modal).
7. Secondary pages (Inventory, Settings, Auth).
8. Polish: responsiveness, loading states, mock data wiring.

## 5. Verification checklist
- `pnpm lint && pnpm test && pnpm build` clean.
- No console errors/warnings in devtools.
- Responsive: mobile ≤640px, tablet 768–1024px, desktop ≥1280px.
- Visual diff vs Figma for spacing/typography/color.

---
_Last updated: 2026-03-23_
