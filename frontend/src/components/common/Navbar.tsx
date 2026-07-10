import { NavLink } from "react-router-dom";

import Avatar from "./Avatar";

const links = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "My Tasks",
    path: "/tasks",
  },
  {
    name: "Tickets",
    path: "/tickets",
  },
  {
    name: "Milestones",
    path: "/milestones",
  },
];

function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold text-indigo-600">
          PMT
        </h1>

        <nav className="flex gap-8">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg"
                  : "px-4 py-2"
              }
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

        <div className="flex items-center gap-4">

          <Avatar name="Rajesh" />

          <div>
            <h3 className="font-semibold">
              Rajesh
            </h3>

            <p className="text-sm text-gray-500">
              ADMIN
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;