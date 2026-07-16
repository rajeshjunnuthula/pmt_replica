import Card from "../common/Card";

import { MilestoneStatus, type Milestone } from "../../types/milestone";

interface MilestoneCardProps {
  milestone: Milestone;
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: MilestoneStatus) => void;
}

function MilestoneCard({ milestone, onDelete, onStatusChange }: MilestoneCardProps) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold">
            {milestone.title}
          </h2>

          <p className="text-sm text-gray-500">
            {milestone.project?.name ?? ""}
          </p>

          <p className="text-sm text-gray-400">
            Due: {milestone.dueDate}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={milestone.status}
            onChange={(event) =>
              onStatusChange(milestone.id, event.target.value as MilestoneStatus)
            }
            className="border rounded-lg px-3 py-1 text-sm"
          >
            {Object.values(MilestoneStatus).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button
            onClick={() => onDelete(milestone.id)}
            className="text-red-600 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
}

export default MilestoneCard;
