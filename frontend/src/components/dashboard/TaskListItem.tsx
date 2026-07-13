import Badge from "../common/Badge";

import type { Task } from "../../types/task";

interface TaskListItemProps {
  task: Task;
}

function TaskListItem({ task }: TaskListItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div>
        <p className="font-medium">{task.title}</p>

        <p className="text-sm text-gray-500">
          {task.project?.name ?? ""}
        </p>
      </div>

      <Badge>{task.priority}</Badge>
    </div>
  );
}

export default TaskListItem;
