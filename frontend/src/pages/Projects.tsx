import { useEffect, useRef, useState } from "react";

import PageHeader from "../components/common/PageHeader";
import ProjectForm from "../components/projects/ProjectForm";
import SearchBar from "../components/projects/SearchBar";
import ProjectList from "../components/projects/ProjectList";

import { projectApi } from "../api/projects";
import { ApiError } from "../api/client";

import type { Project, ProjectStatus } from "../types";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const isFirstLoad = useRef(true);

  useEffect(() => {
    function loadProjects() {
      projectApi
        .getAll(search)
        .then(setProjects)
        .catch((err) =>
          setError(err instanceof ApiError ? err.message : "Failed to load projects")
        );
    }

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      loadProjects();
      return;
    }

    const timeout = setTimeout(loadProjects, 300);
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

  async function handleStatusChange(id: number, status: ProjectStatus) {
    try {
      const updated = await projectApi.update(id, { status });
      setProjects((prev) =>
        prev.map((project) => (project.id === id ? updated : project))
      );
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to update status");
    }
  }

  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Manage all your projects."
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
        onStatusChange={handleStatusChange}
      />
    </>
  );
}

export default Projects;
