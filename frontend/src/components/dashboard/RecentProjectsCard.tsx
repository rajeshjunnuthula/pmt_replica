import Card from "../common/Card";

import ProjectListItem from "./ProjectListItem";

import type { Project } from "../../types";

interface RecentProjectsCardProps {
  projects: Project[];
}

function RecentProjectsCard({ projects }: RecentProjectsCardProps) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        Recent Projects
      </h2>

      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
        />
      ))}
    </Card>
  );
}

export default RecentProjectsCard;
