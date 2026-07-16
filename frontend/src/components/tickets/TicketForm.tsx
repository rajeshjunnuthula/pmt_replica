import { useState } from "react";

import { TicketPriority } from "../../types";
import type { Project } from "../../types/project";
import type { Ticket } from "../../types/ticket";

interface TicketFormProps {
  projects: Project[];
  onSubmit: (ticket: Partial<Ticket>) => void;
}

function TicketForm({ projects, onSubmit }: TicketFormProps) {
  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [priority, setPriority] = useState<TicketPriority>(
    TicketPriority.MEDIUM
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !projectId) {
      return;
    }

    onSubmit({
      title,
      projectId: Number(projectId),
      priority,
    });

    setTitle("");
    setProjectId("");
    setPriority(TicketPriority.MEDIUM);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 mb-6"
    >
      <label className="block mb-2 font-medium">
        Ticket Title
      </label>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter ticket title"
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
        Priority
      </label>

      <select
        value={priority}
        onChange={(event) =>
          setPriority(event.target.value as TicketPriority)
        }
        className="w-full border rounded-lg px-3 py-2 mb-4"
      >
        {Object.values(TicketPriority).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Add Ticket
      </button>
    </form>
  );
}

export default TicketForm;
