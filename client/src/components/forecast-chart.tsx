import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ForecastChartProps {
  title: string;
  data: Array<{
    date: string;
    actual?: number;
    predicted?: number;
    confidence?: number;
  }>;
}

export function ForecastChart({ title, data }: ForecastChartProps) {
  return (
    <Card data-testid={`card-chart-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="date" 
              className="text-xs" 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              className="text-xs" 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.375rem'
              }}
            />
            <Legend />
            {data.some(d => d.actual !== undefined) && (
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                name="Actual"
              />
            )}
            {data.some(d => d.predicted !== undefined) && (
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="hsl(var(--chart-3))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Predicted"
              />
            )}
            {data.some(d => d.confidence !== undefined) && (
              <Line 
                type="monotone" 
                dataKey="confidence" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={1}
                strokeDasharray="3 3"
                name="Confidence Range"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
