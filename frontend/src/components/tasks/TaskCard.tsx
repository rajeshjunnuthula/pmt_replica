import Card from "../common/Card";
import Badge from "../common/Badge";

import { type Task } from "../../types";

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
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
            Due: {task.dueDate}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Badge>{task.priority}</Badge>
          <Badge>{task.status}</Badge>
        </div>

      </div>
    </Card>
  );
}

export default TaskCard;