import { useEffect, useState } from "react";

import PageHeader from "../components/common/PageHeader";

import StatsGrid from "../components/dashboard/StatsGrid";
import RecentProjectsCard from "../components/dashboard/RecentProjectsCard";
import MyTasksCard from "../components/dashboard/MyTasksCard";

import { dashboardApi } from "../api/dashboard";

import type { DashboardSummary } from "../types";

function Dashboard() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);

  useEffect(() => {
    dashboardApi.getSummary().then(setSummary);
  }, []);

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's an overview of your workspace."
        buttonText="New Project"
      />

      <StatsGrid
        totalProjects={summary?.totalProjects ?? 0}
        activeProjects={summary?.activeProjects ?? 0}
        totalTasks={summary?.totalTasks ?? 0}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RecentProjectsCard projects={summary?.recentProjects ?? []} />
        <MyTasksCard tasks={summary?.myTasks ?? []} />
      </div>
    </>
  );
}

export default Dashboard;
