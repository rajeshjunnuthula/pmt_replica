import StatCard from "./StatCard";

interface StatsGridProps {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
}

function StatsGrid({
  totalProjects,
  activeProjects,
  totalTasks,
}: StatsGridProps) {
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
