import TaskCard from "./TaskCard";

import type { Task } from "../../types";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default TaskList;
