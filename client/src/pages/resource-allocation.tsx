import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResourceNode } from "@/components/resource-node";
import { Button } from "@/components/ui/button";
import { Bed, Ambulance, Stethoscope, Building2, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ResourceAllocation() {
  //todo: remove mock functionality
  const resources = [
    { id: "beds", type: "Hospital Beds", icon: Bed, status: "inuse" as const, count: 85, total: 120 },
    { id: "icu", type: "ICU Units", icon: Building2, status: "critical" as const, count: 18, total: 20 },
    { id: "doctors", type: "Doctors Available", icon: Stethoscope, status: "available" as const, count: 15, total: 25 },
    { id: "ambulance", type: "Ambulances", icon: Ambulance, status: "available" as const, count: 3, total: 8 },
  ];

  const connections = [
    { from: "Emergency Ward", to: "ICU", patients: 3 },
    { from: "ICU", to: "General Ward", patients: 2 },
    { from: "Ambulance", to: "Emergency Ward", patients: 5 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Resource Allocation</h1>
          <p className="text-muted-foreground">Manage and optimize hospital resources</p>
        </div>
        <Button 
          onClick={() => console.log('Optimize allocation')}
          data-testid="button-optimize-allocation"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Optimize Allocation
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resource Status</CardTitle>
            <p className="text-sm text-muted-foreground">Current availability and usage</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {resources.map(resource => (
              <ResourceNode key={resource.id} {...resource} />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Flow</CardTitle>
            <p className="text-sm text-muted-foreground">Patient movement between departments</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {connections.map((conn, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-3 rounded-md bg-muted/50"
                data-testid={`flow-${idx}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{conn.from}</Badge>
                    <div className="flex-1 h-px bg-border relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-border border-t-transparent border-b-transparent" />
                    </div>
                    <Badge variant="outline">{conn.to}</Badge>
                  </div>
                </div>
                <div className="text-sm font-medium">
                  {conn.patients} patients
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
          <p className="text-sm text-muted-foreground">Intelligent resource allocation suggestions</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-md bg-primary/5 border border-primary/20">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">ICU Capacity Alert</h4>
              <p className="text-sm text-muted-foreground mt-1">
                ICU units at 90% capacity. Consider transferring stable patients to general ward to free up space.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-md bg-resource-available/5 border border-resource-available/20">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-resource-available/10">
              <Ambulance className="h-4 w-4 text-resource-available" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Ambulance Availability</h4>
              <p className="text-sm text-muted-foreground mt-1">
                3 ambulances currently available. No immediate action required.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
