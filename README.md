# Fishtechy Web

Foundational Next.js (App Router) project for rebuilding the Fishtechy web experience from the Figma design.

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- ESLint + Prettier
- lucide-react (icons)

## Getting Started
```bash
pnpm install
pnpm dev
```

## CI/CD
- `.github/workflows/ci.yml` runs lint + build on every push/PR to `main`.
- `.github/workflows/deploy.yml` builds and deploys to Vercel when secrets are configured.

Required GitHub secrets for deployment:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Add them under **Settings → Secrets and variables → Actions**.
