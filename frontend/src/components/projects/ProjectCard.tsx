import Card from "../common/Card";

import { ProjectStatus, type Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: ProjectStatus) => void;
}

function ProjectCard({
  project,
  onEdit,
  onDelete,
  onStatusChange,
}: ProjectCardProps) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-lg font-semibold">
            {project.name}
          </h2>

          <p className="text-gray-600 mt-1">
            {project.description || "No description"}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Start: {project.startDate}
          </p>
        </div>

        <div className="flex items-center gap-3">

          <select
            value={project.status}
            onChange={(event) =>
              onStatusChange(project.id, event.target.value as ProjectStatus)
            }
            className="border rounded-lg px-3 py-1 text-sm"
          >
            {Object.values(ProjectStatus).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button
            onClick={() => onEdit(project)}
            className="text-blue-600"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(project.id)}
            className="text-red-600"
          >
            Delete
          </button>

        </div>

      </div>
    </Card>
  );
}

export default ProjectCard;