import Card from "../common/Card";

import ProjectListItem from "./ProjectListItem";

import projects from "../../data/projects";

function RecentProjectsCard() {
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