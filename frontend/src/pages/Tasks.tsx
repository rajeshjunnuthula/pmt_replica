import { useEffect, useState } from "react";

import PageHeader from "../components/common/PageHeader";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";

import { taskApi } from "../api/tasks";
import { projectApi } from "../api/projects";
import { usersApi } from "../api/users";
import { ApiError } from "../api/client";

import type { Project, Task, User } from "../types";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    taskApi.getAll().then(setTasks).catch(() => setError("Failed to load tasks"));
    projectApi.getAll().then(setProjects).catch(() => {});
    usersApi.getAll().then(setUsers).catch(() => {});
  }, []);

  async function handleAddTask(task: Partial<Task>) {
    try {
      const newTask = await taskApi.create(task);
      setTasks((prev) => [newTask, ...prev]);
      setShowForm(false);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to create task");
    }
  }

  async function handleDeleteTask(id: number) {
    try {
      await taskApi.delete(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete task");
    }
  }

  return (
    <>
      <PageHeader
        title="Tasks"
        subtitle="Manage all your tasks."
        buttonText="New Task"
        onButtonClick={() => setShowForm((prev) => !prev)}
      />

      {error && (
        <p className="text-red-600 text-sm mb-4">{error}</p>
      )}

      {showForm && (
        <TaskForm
          projects={projects}
          users={users}
          onSubmit={handleAddTask}
        />
      )}

      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
      />
    </>
  );
}

export default Tasks;
