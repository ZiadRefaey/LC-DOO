import ProjectCard from "../../features/Admin Projects/ProjectCard";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";

export default function AdminProjects() {
  return (
    <>
      <AdminPageTitle>AdminProjects</AdminPageTitle>
      <div className="w-full items-center justify-end flex">
        <div className="flex items-center justify-center gap-1 mb-10">
          <button
            className={`px-4 py-2 bg-adminSecondary hover:bg-adminTertiary hover:text-white transition-all duration-200 rounded-lg`}
          >
            All
          </button>
          <button
            className={`px-4 py-2 bg-adminSecondary hover:bg-adminTertiary hover:text-white transition-all duration-200 rounded-lg`}
          >
            On Going
          </button>
          <button
            className={`px-4 py-2 bg-adminSecondary hover:bg-adminTertiary hover:text-white transition-all duration-200 rounded-lg`}
          >
            Finished
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
