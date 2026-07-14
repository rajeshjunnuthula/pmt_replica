import { useState } from "react";

import { TaskPriority } from "../../types";
import type { Project } from "../../types/project";
import type { User } from "../../types/user";
import type { Task } from "../../types/task";

interface TaskFormProps {
  projects: Project[];
  users: User[];
  onSubmit: (task: Partial<Task>) => void;
}

function TaskForm({ projects, users, onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [priority, setPriority] = useState<TaskPriority>(
    TaskPriority.MEDIUM
  );
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !projectId) {
      return;
    }

    onSubmit({
      title,
      projectId: Number(projectId),
      assigneeId: assigneeId ? Number(assigneeId) : undefined,
      priority,
      dueDate: dueDate || undefined,
    });

    setTitle("");
    setProjectId("");
    setAssigneeId("");
    setPriority(TaskPriority.MEDIUM);
    setDueDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 mb-6"
    >
      <label className="block mb-2 font-medium">
        Task Title
      </label>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter task title"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="block mb-2 font-medium">
        Project
      </label>

      <select
        value={projectId}
        onChange={(event) => setProjectId(event.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4"
      >
        <option value="">Select a project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-medium">
        Assignee
      </label>

      <select
        value={assigneeId}
        onChange={(event) => setAssigneeId(event.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4"
      >
        <option value="">Unassigned</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-medium">
        Priority
      </label>

      <select
        value={priority}
        onChange={(event) =>
          setPriority(event.target.value as TaskPriority)
        }
        className="w-full border rounded-lg px-3 py-2 mb-4"
      >
        {Object.values(TaskPriority).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-medium">
        Due Date
      </label>

      <input
        type="date"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
