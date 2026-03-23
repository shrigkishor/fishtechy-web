import { Sidebar } from "@/components/ui/sidebar";
import { TopBar } from "@/components/ui/top-bar";

export function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="flex min-h-screen flex-col">
          <TopBar />
          <main className="flex-1 bg-background px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
