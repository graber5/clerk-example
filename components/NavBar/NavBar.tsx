import { UserButton } from "@clerk/clerk-react";
import { NavLink } from "@components";

export default function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt="Workflow logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://images.clerk.services/clerk/main-logo.svg"
                alt="Workflow logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <NavLink path="/dashboard" title="Dashboard" />
              <NavLink path="/dashboard/team" title="Team" classes="ml-8" />
              <NavLink
                path="/dashboard/projects"
                title="Projects"
                classes="ml-8"
              />
              <NavLink
                path="/dashboard/calendar"
                title="Calendar"
                classes="ml-8"
              />
            </div>
          </div>
          <div className="sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
