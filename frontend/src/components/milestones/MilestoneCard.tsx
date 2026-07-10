import Card from "../common/Card";
import Badge from "../common/Badge";

import type { Milestone } from "../../types/milestone";

interface MilestoneCardProps {
  milestone: Milestone;
}

function MilestoneCard({ milestone }: MilestoneCardProps) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold">
            {milestone.title}
          </h2>

          <p className="text-sm text-gray-500">
            {milestone.project}
          </p>

          <p className="text-sm text-gray-400">
            Due: {milestone.dueDate}
          </p>
        </div>

        <Badge>{milestone.status}</Badge>
      </div>
    </Card>
  );
}

export default MilestoneCard;