import type { Project } from "../types";
import { mockProjects } from "../data";

class ProjectApi {
  async getAll(): Promise<Project[]> {
    return Promise.resolve(mockProjects);
  }

  async getById(id: string): Promise<Project | undefined> {
    return Promise.resolve(
      mockProjects.find((project: Project) => project.id === id)
    );
  }

  async create(project: Project): Promise<Project> {
    return Promise.resolve(project);
  }

  async update(id: string, project: Project): Promise<Project> {
    return Promise.resolve({
      ...project,
      id,
    });
  }

  async delete(_id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export const projectApi = new ProjectApi();