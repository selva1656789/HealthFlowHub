import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
}

export function MetricCard({ title, value, icon: Icon, trend, subtitle }: MetricCardProps) {
  return (
    <Card data-testid={`card-metric-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tabular-nums" data-testid={`text-metric-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {value}
        </div>
        {trend && (
          <div className="mt-1 flex items-center gap-1 text-xs">
            {trend.isPositive ? (
              <ArrowUp className="h-3 w-3 text-resource-available" />
            ) : (
              <ArrowDown className="h-3 w-3 text-priority-critical" />
            )}
            <span className={trend.isPositive ? "text-resource-available" : "text-priority-critical"}>
              {Math.abs(trend.value)}%
            </span>
            <span className="text-muted-foreground">{subtitle || "vs last week"}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
