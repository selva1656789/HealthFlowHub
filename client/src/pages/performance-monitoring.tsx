import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/metric-card";
import { Clock, TrendingUp, Users, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function PerformanceMonitoring() {
  //todo: remove mock functionality
  const metrics = [
    { title: "Avg Wait Time", value: "18 min", icon: Clock, trend: { value: 12, isPositive: false }, subtitle: "vs last week" },
    { title: "Resource Utilization", value: "78%", icon: Activity, trend: { value: 5, isPositive: true }, subtitle: "vs last week" },
    { title: "Patient Satisfaction", value: "4.6/5", icon: Users, trend: { value: 3, isPositive: true }, subtitle: "vs last week" },
    { title: "Efficiency Score", value: "92%", icon: TrendingUp, trend: { value: 8, isPositive: true }, subtitle: "vs last week" },
  ];

  const departmentMetrics = [
    { name: "Emergency Department", efficiency: 85, waitTime: "12 min", utilization: 92 },
    { name: "ICU", efficiency: 94, waitTime: "N/A", utilization: 88 },
    { name: "General Ward", efficiency: 88, waitTime: "25 min", utilization: 75 },
    { name: "Outpatient", efficiency: 76, waitTime: "35 min", utilization: 68 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Performance Monitoring</h1>
        <p className="text-muted-foreground">Track efficiency, wait times, and resource usage</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} {...metric} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Department Performance</CardTitle>
          <p className="text-sm text-muted-foreground">Efficiency and utilization by department</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {departmentMetrics.map((dept, idx) => (
            <div key={idx} className="space-y-3" data-testid={`dept-${dept.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{dept.name}</h4>
                <div className="flex gap-4 text-sm">
                  <span className="text-muted-foreground">
                    Wait: <span className="font-medium text-foreground">{dept.waitTime}</span>
                  </span>
                  <span className="text-muted-foreground">
                    Efficiency: <span className="font-medium text-foreground">{dept.efficiency}%</span>
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Resource Utilization</span>
                  <span>{dept.utilization}%</span>
                </div>
                <Progress value={dept.utilization} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
          <p className="text-sm text-muted-foreground">Critical metrics and trends</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-md bg-resource-available/5 border border-resource-available/20">
            <div className="flex-1">
              <h4 className="font-semibold">Excellent Response Time</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Emergency response time averaging 3.2 minutes, 15% better than industry standard.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-md bg-primary/5 border border-primary/20">
            <div className="flex-1">
              <h4 className="font-semibold">High Resource Efficiency</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Resources utilized at optimal 78% capacity - balanced between availability and efficiency.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-md bg-priority-medium/5 border border-priority-medium/20">
            <div className="flex-1">
              <h4 className="font-semibold">Outpatient Wait Times</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Outpatient department experiencing higher wait times. Consider staff reallocation during peak hours.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
