import tasks from "../../data/tasks";
import TaskCard from "./TaskCard";

function TaskList() {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
}

export default TaskList;