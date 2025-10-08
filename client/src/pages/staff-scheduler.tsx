import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StaffScheduler() {
  const [optimizing, setOptimizing] = useState(false);
  
  //todo: remove mock functionality
  const schedule = [
    { day: "Monday", morning: ["Dr. Smith", "Dr. Johnson", "Nurse Williams"], afternoon: ["Dr. Davis", "Dr. Brown", "Nurse Martinez"], night: ["Dr. Wilson", "Nurse Garcia"] },
    { day: "Tuesday", morning: ["Dr. Brown", "Dr. Wilson", "Nurse Garcia"], afternoon: ["Dr. Smith", "Dr. Johnson", "Nurse Taylor"], night: ["Dr. Davis", "Nurse Williams"] },
    { day: "Wednesday", morning: ["Dr. Johnson", "Dr. Davis", "Nurse Taylor"], afternoon: ["Dr. Wilson", "Dr. Smith", "Nurse Martinez"], night: ["Dr. Brown", "Nurse Garcia"] },
  ];

  const handleOptimize = () => {
    setOptimizing(true);
    console.log('Optimizing schedule...');
    setTimeout(() => {
      setOptimizing(false);
      console.log('Schedule optimized');
    }, 1500);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Staff Scheduler</h1>
          <p className="text-muted-foreground">Optimize staff shifts and coverage</p>
        </div>
        <Button 
          onClick={handleOptimize}
          disabled={optimizing}
          data-testid="button-optimize-schedule"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${optimizing ? 'animate-spin' : ''}`} />
          {optimizing ? 'Optimizing...' : 'Optimize Schedule'}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Weekly Schedule
          </CardTitle>
          <p className="text-sm text-muted-foreground">Current staff assignments</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schedule.map((day, idx) => (
              <div key={idx} className="border rounded-md p-4" data-testid={`schedule-${day.day.toLowerCase()}`}>
                <h3 className="font-semibold mb-3">{day.day}</h3>
                <div className="grid gap-3 md:grid-cols-3">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">Morning Shift (6AM - 2PM)</div>
                    <div className="space-y-1">
                      {day.morning.map((staff, i) => (
                        <Badge key={i} variant="outline" className="block w-fit">
                          {staff}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">Afternoon Shift (2PM - 10PM)</div>
                    <div className="space-y-1">
                      {day.afternoon.map((staff, i) => (
                        <Badge key={i} variant="outline" className="block w-fit">
                          {staff}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">Night Shift (10PM - 6AM)</div>
                    <div className="space-y-1">
                      {day.night.map((staff, i) => (
                        <Badge key={i} variant="outline" className="block w-fit">
                          {staff}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Optimization Insights</CardTitle>
          <p className="text-sm text-muted-foreground">Algorithm recommendations</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-md bg-resource-available/5 border border-resource-available/20">
            <div className="flex-1">
              <h4 className="font-semibold">Coverage Optimal</h4>
              <p className="text-sm text-muted-foreground mt-1">
                All shifts have adequate coverage. No gaps detected in the current schedule.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-md bg-primary/5 border border-primary/20">
            <div className="flex-1">
              <h4 className="font-semibold">Overtime Minimized</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Current schedule minimizes overtime by 23% compared to previous week.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
