import Card from "../common/Card";
import Badge from "../common/Badge";

import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

function ProjectCard({
  project,
  onEdit,
  onDelete,
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

          <Badge>
            {project.status}
          </Badge>

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