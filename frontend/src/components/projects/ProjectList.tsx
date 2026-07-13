import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

function ProjectList({
  projects,
  onEdit,
  onDelete,
}: ProjectListProps) {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default ProjectList;