import mockTasks from "../../data/tasks";
import TaskCard from "./TaskCard";

function TaskList() {
  return (
    <>
      {mockTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
}

export default TaskList;