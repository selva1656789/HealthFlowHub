import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import Dashboard from "@/pages/dashboard";
import PatientManagement from "@/pages/patient-management";
import ResourceAllocation from "@/pages/resource-allocation";
import StaffScheduler from "@/pages/staff-scheduler";
import ForecastingAnalytics from "@/pages/forecasting-analytics";
import EmergencyManagement from "@/pages/emergency-management";
import PerformanceMonitoring from "@/pages/performance-monitoring";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/patients" component={PatientManagement} />
      <Route path="/resources" component={ResourceAllocation} />
      <Route path="/scheduler" component={StaffScheduler} />
      <Route path="/analytics" component={ForecastingAnalytics} />
      <Route path="/emergency" component={EmergencyManagement} />
      <Route path="/performance" component={PerformanceMonitoring} />
    </Switch>
  );
}

export default function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <header className="flex items-center justify-between p-4 border-b sticky top-0 z-50 bg-background">
                <SidebarTrigger data-testid="button-sidebar-toggle" />
                <ThemeToggle />
              </header>
              <main className="flex-1 overflow-auto">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
