import { ForecastChart } from "@/components/forecast-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, Bed } from "lucide-react";

export default function ForecastingAnalytics() {
  //todo: remove mock functionality
  const patientInflowData = [
    { date: 'Mon', actual: 65, predicted: 62 },
    { date: 'Tue', actual: 72, predicted: 70 },
    { date: 'Wed', actual: 68, predicted: 68 },
    { date: 'Thu', actual: 85, predicted: 78 },
    { date: 'Fri', predicted: 82 },
    { date: 'Sat', predicted: 75 },
    { date: 'Sun', predicted: 70 },
  ];

  const resourceDemandData = [
    { date: 'Mon', actual: 85, predicted: 82 },
    { date: 'Tue', actual: 90, predicted: 88 },
    { date: 'Wed', actual: 88, predicted: 87 },
    { date: 'Thu', actual: 95, predicted: 92 },
    { date: 'Fri', predicted: 93 },
    { date: 'Sat', predicted: 88 },
    { date: 'Sun', predicted: 85 },
  ];

  const staffRequirementsData = [
    { date: 'Mon', actual: 45, predicted: 43 },
    { date: 'Tue', actual: 48, predicted: 47 },
    { date: 'Wed', actual: 46, predicted: 46 },
    { date: 'Thu', actual: 52, predicted: 50 },
    { date: 'Fri', predicted: 51 },
    { date: 'Sat', predicted: 48 },
    { date: 'Sun', predicted: 45 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Forecasting & Analytics</h1>
        <p className="text-muted-foreground">AI-powered demand predictions and insights</p>
      </div>

      <Tabs defaultValue="inflow" className="space-y-6">
        <TabsList data-testid="tabs-forecast">
          <TabsTrigger value="inflow" data-testid="tab-patient-inflow">
            <Users className="h-4 w-4 mr-2" />
            Patient Inflow
          </TabsTrigger>
          <TabsTrigger value="resources" data-testid="tab-resource-demand">
            <Bed className="h-4 w-4 mr-2" />
            Resource Demand
          </TabsTrigger>
          <TabsTrigger value="staff" data-testid="tab-staff-requirements">
            <TrendingUp className="h-4 w-4 mr-2" />
            Staff Requirements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inflow" className="space-y-6">
          <ForecastChart 
            title="Patient Inflow Forecast - Next 7 Days" 
            data={patientInflowData} 
          />
          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-md bg-primary/5 border border-primary/20">
                <div className="flex-1">
                  <h4 className="font-semibold">Peak Expected Thursday</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Model predicts 15% increase in patient admissions on Thursday. Recommend scheduling additional staff.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-md bg-resource-available/5 border border-resource-available/20">
                <div className="flex-1">
                  <h4 className="font-semibold">Weekend Slowdown</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Patient inflow expected to decrease by 18% over the weekend. Normal staffing levels adequate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <ForecastChart 
            title="Bed Demand Forecast - Next 7 Days" 
            data={resourceDemandData} 
          />
          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-md bg-priority-critical/5 border border-priority-critical/20">
                <div className="flex-1">
                  <h4 className="font-semibold">Capacity Warning</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Bed utilization predicted to reach 95% on Thursday. Consider early discharge of stable patients.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <ForecastChart 
            title="Staff Requirements Forecast - Next 7 Days" 
            data={staffRequirementsData} 
          />
          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-md bg-primary/5 border border-primary/20">
                <div className="flex-1">
                  <h4 className="font-semibold">Additional Staff Needed</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Model suggests 4 additional staff members on Thursday to maintain quality of care during peak hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
