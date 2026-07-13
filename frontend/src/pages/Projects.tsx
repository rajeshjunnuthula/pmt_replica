import { useEffect, useState } from "react";

import PageHeader from "../components/common/PageHeader";
import ProjectForm from "../components/projects/ProjectForm";
import SearchBar from "../components/projects/SearchBar";
import ProjectList from "../components/projects/ProjectList";

import { projectApi } from "../api/projects";
import { ApiError } from "../api/client";

import type { Project } from "../types";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      projectApi
        .getAll(search)
        .then(setProjects)
        .catch((err) =>
          setError(err instanceof ApiError ? err.message : "Failed to load projects")
        );
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  async function handleAddProject(name: string) {
    try {
      const newProject = await projectApi.create({ name });
      setProjects((prev) => [...prev, newProject]);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to create project");
    }
  }

  async function handleDeleteProject(id: number) {
    try {
      await projectApi.delete(id);
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete project");
    }
  }

  function handleEditProject(project: Project) {
    console.log("Edit Project:", project);
  }

  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Manage all your projects."
        buttonText="New Project"
      />

      {error && (
        <p className="text-red-600 text-sm mb-4">{error}</p>
      )}

      <ProjectForm
        buttonText="Add Project"
        onSubmit={handleAddProject}
      />

      <SearchBar
        search={search}
        onSearchChange={setSearch}
      />

      <ProjectList
        projects={projects}
        onEdit={handleEditProject}
        onDelete={handleDeleteProject}
      />
    </>
  );
}

export default Projects;
