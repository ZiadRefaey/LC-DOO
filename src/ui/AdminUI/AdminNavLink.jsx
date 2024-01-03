import { Link } from "react-router-dom";

export default function AdminNavLink({ icon, LinkPath, LinkTitle }) {
  return (
    <Link
      to={LinkPath}
      className="w-[250px] text-lg transition-all duration-200 hover:text-adminTertiary flex items-center justify-start text-end p-3 gap-4 hover:bg-gray-50 rounded-md text-gray-700"
    >
      <div className="text-xl">{icon}</div>
      {LinkTitle}
    </Link>
  );
}
