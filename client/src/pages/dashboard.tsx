import { MetricCard } from "@/components/metric-card";
import { PatientQueueItem } from "@/components/patient-queue-item";
import { ResourceNode } from "@/components/resource-node";
import { ForecastChart } from "@/components/forecast-chart";
import { Users, Bed, UserCheck, AlertCircle, Ambulance, Stethoscope, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  //todo: remove mock functionality
  const patients = [
    { id: "P001", name: "John Smith", priority: "critical" as const, condition: "Chest pain, difficulty breathing", waitTime: "5 min", age: 62 },
    { id: "P002", name: "Sarah Johnson", priority: "high" as const, condition: "Severe abdominal pain", waitTime: "12 min", age: 45 },
    { id: "P003", name: "Mike Davis", priority: "medium" as const, condition: "Fracture - left arm", waitTime: "25 min", age: 28 },
    { id: "P004", name: "Emily Brown", priority: "low" as const, condition: "Minor laceration", waitTime: "40 min", age: 34 },
  ];

  const forecastData = [
    { date: 'Mon', actual: 65, predicted: 62 },
    { date: 'Tue', actual: 72, predicted: 70 },
    { date: 'Wed', actual: 68, predicted: 68 },
    { date: 'Thu', actual: 85, predicted: 78 },
    { date: 'Fri', predicted: 82 },
    { date: 'Sat', predicted: 75 },
    { date: 'Sun', predicted: 70 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Real-time healthcare resource management</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Patients"
          value={234}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Available Beds"
          value={35}
          icon={Bed}
          trend={{ value: 5, isPositive: false }}
        />
        <MetricCard
          title="Staff On Duty"
          value={48}
          icon={UserCheck}
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard
          title="Critical Cases"
          value={7}
          icon={AlertCircle}
          trend={{ value: 2, isPositive: false }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Priority Queue</CardTitle>
            <p className="text-sm text-muted-foreground">Patients waiting for treatment</p>
          </CardHeader>
          <CardContent className="space-y-2">
            {patients.map(patient => (
              <PatientQueueItem key={patient.id} {...patient} />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Status</CardTitle>
            <p className="text-sm text-muted-foreground">Current resource allocation</p>
          </CardHeader>
          <CardContent className="space-y-2">
            <ResourceNode id="beds" type="Hospital Beds" icon={Bed} status="inuse" count={85} total={120} />
            <ResourceNode id="icu" type="ICU Units" icon={Building2} status="critical" count={18} total={20} />
            <ResourceNode id="doctors" type="Doctors" icon={Stethoscope} status="available" count={15} total={25} />
            <ResourceNode id="ambulance" type="Ambulances" icon={Ambulance} status="available" count={3} total={8} />
          </CardContent>
        </Card>
      </div>

      <ForecastChart title="Patient Inflow Forecast - Next 7 Days" data={forecastData} />
    </div>
  );
}
