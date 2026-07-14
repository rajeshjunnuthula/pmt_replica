import Card from "../common/Card";
import Badge from "../common/Badge";

import { type Task } from "../../types";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

function TaskCard({ task, onDelete }: TaskCardProps) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-lg font-semibold">
            {task.title}
          </h2>

          <p className="text-gray-600 mt-1">
            {task.description || "No description"}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {task.project?.name ? `${task.project.name} · ` : ""}
            Due: {task.dueDate || "No due date"}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Badge>{task.priority}</Badge>
          <Badge>{task.status}</Badge>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 text-sm"
          >
            Delete
          </button>
        </div>

      </div>
    </Card>
  );
}

export default TaskCard;