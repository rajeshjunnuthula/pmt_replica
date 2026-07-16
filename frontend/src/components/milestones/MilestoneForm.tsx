import { useState } from "react";

import type { Project } from "../../types/project";
import type { Milestone } from "../../types/milestone";

interface MilestoneFormProps {
  projects: Project[];
  onSubmit: (milestone: Partial<Milestone>) => void;
}

function MilestoneForm({ projects, onSubmit }: MilestoneFormProps) {
  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !projectId || !dueDate) {
      return;
    }

    onSubmit({
      title,
      projectId: Number(projectId),
      dueDate,
    });

    setTitle("");
    setProjectId("");
    setDueDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 mb-6"
    >
      <label className="block mb-2 font-medium">
        Milestone Title
      </label>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter milestone title"
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
        Add Milestone
      </button>
    </form>
  );
}

export default MilestoneForm;
