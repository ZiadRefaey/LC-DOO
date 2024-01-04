import { FaSort } from "react-icons/fa";

export default function AdminTableHeader({
  children,
  className,
  sortable = true,
}) {
  return (
    <th
      className={`bg-adminSecondary text-sm flex items-center justify-between  gap-4 ${className} p-4 cursor-pointer`}
    >
      {children}
      {!sortable ? null : <FaSort className="text-xs" />}
    </th>
  );
}
