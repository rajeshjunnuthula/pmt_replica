import Card from "../common/Card";
import Badge from "../common/Badge";

import type { Task } from "../../types/task";

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold">
            {task.title}
          </h2>

          <p className="text-sm text-gray-500">
            {task.project}
          </p>
        </div>

        <Badge>{task.priority}</Badge>
      </div>
    </Card>
  );
}

export default TaskCard;