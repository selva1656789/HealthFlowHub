import { Card, CardContent } from "@/components/ui/card";
import { PriorityBadge } from "./priority-badge";
import { Clock, User } from "lucide-react";

type Priority = "critical" | "high" | "medium" | "low";

interface PatientQueueItemProps {
  id: string;
  name: string;
  priority: Priority;
  condition: string;
  waitTime: string;
  age: number;
}

export function PatientQueueItem({ 
  id, 
  name, 
  priority, 
  condition, 
  waitTime,
  age 
}: PatientQueueItemProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-patient-${id}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <User className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold" data-testid={`text-patient-name-${id}`}>{name}</h4>
                <span className="text-xs text-muted-foreground">#{id}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{condition}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>Age: {age}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{waitTime}</span>
                </div>
              </div>
            </div>
          </div>
          <PriorityBadge priority={priority} />
        </div>
      </CardContent>
    </Card>
  );
}
