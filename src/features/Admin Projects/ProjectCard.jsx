import { Link } from "react-router-dom";
import AdminCard from "../../ui/AdminUI/AdminCard";
import Tag from "../../ui/Tag";

export default function ProjectCard({
  projectTitle = "Testing Project Title",
  projectTag = "Ongoing",
  startDate = new Date().toISOString,
  tasks,
}) {
  return (
    <AdminCard>
      <Link
        to="./admin/projects"
        className="text-2xl font-medium text-gray-500 cursor-pointer hover:text-black"
      >
        {projectTitle}
      </Link>
      <Tag className="mt-2 mb-4">{projectTag}</Tag>
      <div className="w-full items-center justify-start gap-10">
        <div></div>
      </div>
    </AdminCard>
  );
}
