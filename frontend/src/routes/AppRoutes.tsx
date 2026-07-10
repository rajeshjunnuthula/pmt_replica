import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Tickets from "../pages/Tickets";
import Milestones from "../pages/Milestones";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/milestones" element={<Milestones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;