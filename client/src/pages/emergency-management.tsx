import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Users, Bed, Ambulance } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function EmergencyManagement() {
  const [emergencyActive, setEmergencyActive] = useState(false);
  
  //todo: remove mock functionality
  const currentAllocation = [
    { resource: "Emergency Beds", icon: Bed, current: 15, proposed: 25 },
    { resource: "ICU Units", icon: Bed, current: 18, proposed: 20 },
    { resource: "Staff on Duty", icon: Users, current: 48, proposed: 65 },
    { resource: "Ambulances", icon: Ambulance, current: 3, proposed: 7 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Emergency Management</h1>
          <p className="text-muted-foreground">Simulate and manage resource reallocation during surge</p>
        </div>
        <Button
          variant={emergencyActive ? "destructive" : "default"}
          onClick={() => setEmergencyActive(!emergencyActive)}
          data-testid="button-toggle-emergency"
        >
          <AlertTriangle className="h-4 w-4 mr-2" />
          {emergencyActive ? 'Deactivate Emergency' : 'Activate Emergency Mode'}
        </Button>
      </div>

      {emergencyActive && (
        <Alert variant="destructive" data-testid="alert-emergency-active">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Emergency Mode Active</AlertTitle>
          <AlertDescription>
            Resource reallocation protocol is now in effect. All non-critical procedures have been postponed.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Allocation</CardTitle>
            <p className="text-sm text-muted-foreground">Normal operation mode</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentAllocation.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="font-medium">{item.resource}</span>
                </div>
                <Badge variant="outline">{item.current} allocated</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Proposed Reallocation</CardTitle>
            <p className="text-sm text-muted-foreground">Emergency surge protocol</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentAllocation.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-md bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.resource}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{item.current}</Badge>
                  <span className="text-muted-foreground">→</span>
                  <Badge className="bg-primary text-primary-foreground">{item.proposed}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reallocation Actions</CardTitle>
          <p className="text-sm text-muted-foreground">Changes to be implemented</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-md bg-muted/50">
            <div className="flex-1">
              <h4 className="font-semibold">Transfer General Ward Patients</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Move 10 stable patients from emergency beds to general ward to free up capacity.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-md bg-muted/50">
            <div className="flex-1">
              <h4 className="font-semibold">Recall Off-Duty Staff</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Contact 17 off-duty medical staff for immediate emergency response.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-md bg-muted/50">
            <div className="flex-1">
              <h4 className="font-semibold">Deploy Additional Ambulances</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Activate 4 reserve ambulances from neighboring facilities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {emergencyActive && (
        <div className="flex justify-end gap-3">
          <Button 
            variant="outline" 
            onClick={() => setEmergencyActive(false)}
            data-testid="button-cancel-reallocation"
          >
            Cancel
          </Button>
          <Button 
            onClick={() => {
              console.log('Applying emergency reallocation');
              setEmergencyActive(false);
            }}
            data-testid="button-apply-reallocation"
          >
            Apply Reallocation
          </Button>
        </div>
      )}
    </div>
  );
}
