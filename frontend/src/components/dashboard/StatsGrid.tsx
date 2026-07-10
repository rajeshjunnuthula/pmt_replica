import StatCard from "./StatCard";

import projects from "../../data/projects";
import tasks from "../../data/tasks";

function StatsGrid() {
  const totalProjects = projects.length;

  const activeProjects = projects.filter(
    (project) => project.status === "ACTIVE"
  ).length;

  const totalTasks = tasks.length;

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">

      <StatCard
        title="Projects"
        value={totalProjects}
      />

      <StatCard
        title="Active"
        value={activeProjects}
      />

      <StatCard
        title="Tasks"
        value={totalTasks}
      />

    </div>
  );
}

export default StatsGrid;