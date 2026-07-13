import PageHeader from "../components/common/PageHeader";

import StatsGrid from "../components/dashboard/StatsGrid";
import RecentProjectsCard from "../components/dashboard/RecentProjectsCard";
import MyTasksCard from "../components/dashboard/MyTasksCard";

function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's an overview of your workspace."
        buttonText="New Project"
      />

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RecentProjectsCard />
        <MyTasksCard />
      </div>
    </>
  );
}

export default Dashboard;