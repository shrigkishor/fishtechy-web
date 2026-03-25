import { ProtectedRoute } from "@/components/auth-guard";
import { DashboardTopHeader } from "@/components/dashboard/top-header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <DashboardTopHeader />
      <DashboardSidebar />
      <main className="min-h-screen bg-background pt-[64px] sm:pl-[240px] sm:pt-[80px] lg:pl-[300px] lg:pt-[96px] xl:pl-[384px]">
        {children}
      </main>
    </ProtectedRoute>
  );
}
