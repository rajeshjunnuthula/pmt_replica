import Badge from "../common/Badge";

import type { Project } from "../../types/project";

interface ProjectListItemProps {
  project: Project;
}

function ProjectListItem({
  project,
}: ProjectListItemProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
      <div>
        <h3 className="font-semibold">
          {project.name}
        </h3>

        <p className="text-sm text-gray-500">
          {project.description || "No description"}
        </p>
      </div>

      <Badge>
        {project.status}
      </Badge>
    </div>
  );
}

export default ProjectListItem;
