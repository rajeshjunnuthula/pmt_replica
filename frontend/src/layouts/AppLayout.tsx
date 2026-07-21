import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;