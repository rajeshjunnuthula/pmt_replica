import type { Project, ProjectStatus } from "../../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: ProjectStatus) => void;
}

function ProjectList({
  projects,
  onEdit,
  onDelete,
  onStatusChange,
}: ProjectListProps) {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </>
  );
}

export default ProjectList;