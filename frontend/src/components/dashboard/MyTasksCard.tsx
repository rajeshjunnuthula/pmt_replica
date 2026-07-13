import Card from "../common/Card";

import TaskListItem from "./TaskListItem";

import type { Task } from "../../types";

interface MyTasksCardProps {
  tasks: Task[];
}

function MyTasksCard({ tasks }: MyTasksCardProps) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        My Tasks
      </h2>

      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
        />
      ))}
    </Card>
  );
}

export default MyTasksCard;
