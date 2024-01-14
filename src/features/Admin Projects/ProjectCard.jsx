import { Link } from "react-router-dom";
import AdminCard from "../../ui/AdminUI/AdminCard";
import Tag from "../../ui/Tag";
import { BsCalendar2Date } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import bag from "../../assets/Beige.png";
export default function ProjectCard({
  projectTitle = "Testing Project Title",
  projectTag = "Ongoing",
  // startDate,
  tasks = "4",
}) {
  const date = new Date();
  const currentDate = date.toLocaleDateString();
  return (
    <AdminCard className={"shadow-lg"}>
      <Link
        to="/admin/projects/1"
        className="text-2xl font-medium text-gray-500 cursor-pointer hover:text-black"
      >
        {projectTitle}
      </Link>
      <Tag className="mt-2 mb-4">{projectTag}</Tag>
      <div className="w-full flex items-center justify-start gap-10">
        <div className="flex items-center justify-center gap-2 text-xl">
          <BsCalendar2Date />
          {currentDate}
        </div>
        <div className="flex items-center justify-center gap-2 text-xl">
          <FaTasks /> {tasks}
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center justify-start gap-2">
        <div className="w-[25px] h-[25px] object-contain mt-2">
          <img
            src={bag}
            alt={`${bag} image`}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-[25px] h-[25px] object-contain mt-2">
          <img
            src={bag}
            alt={`${bag} image`}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-[25px] h-[25px] object-contain mt-2">
          <img
            src={bag}
            alt={`${bag} image`}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-[25px] h-[25px] object-contain mt-2">
          <img
            src={bag}
            alt={`${bag} image`}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-[25px] h-[25px] object-contain mt-2">
          <img
            src={bag}
            alt={`${bag} image`}
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </AdminCard>
  );
}
