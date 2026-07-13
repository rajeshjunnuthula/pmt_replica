import PageHeader from "../components/common/PageHeader";
import TaskList from "../components/tasks/TaskList";

function Tasks() {
  return (
    <>
      <PageHeader
        title="Tasks"
        subtitle="Manage all your tasks."
        buttonText="New Task"
      />

      <TaskList />
    </>
  );
}

export default Tasks;