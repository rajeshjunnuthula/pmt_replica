import { useState } from "react";

import PageHeader from "../components/common/PageHeader";
import ProjectForm from "../components/projects/ProjectForm";
import SearchBar from "../components/projects/SearchBar";
import ProjectList from "../components/projects/ProjectList";

import mockProjects from "../data/projects";

import { ProjectStatus, type Project } from "../types";

function Projects() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [search, setSearch] = useState("");

  function handleAddProject(name: string) {
    const now = new Date().toISOString().split("T")[0];

    const newProject: Project = {
      id: `P${Date.now()}`,
      name,
      description: "",
      status: ProjectStatus.ACTIVE,
      startDate: now,
      endDate: "",
      createdAt: now,
      updatedAt: now,
    };

    setProjects((prev) => [...prev, newProject]);
  }

  function handleDeleteProject(id: string) {
    setProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );
  }

  function handleEditProject(project: Project) {
    console.log("Edit Project:", project);
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Manage all your projects."
        buttonText="New Project"
      />

      <ProjectForm
        buttonText="Add Project"
        onSubmit={handleAddProject}
      />

      <SearchBar
        search={search}
        onSearchChange={setSearch}
      />

      <ProjectList
        projects={filteredProjects}
        onEdit={handleEditProject}
        onDelete={handleDeleteProject}
      />
    </>
  );
}

export default Projects;