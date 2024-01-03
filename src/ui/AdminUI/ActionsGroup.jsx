import { FaRegEdit, FaRegEyeSlash, FaTrashAlt } from "react-icons/fa";

export default function ActionsGroup() {
  return (
    <div className="flex items-center justify-center gap-4 text-md text-gray-400">
      <FaRegEdit className="hover:text-gray-600 transition-all duration-200" />
      <FaRegEyeSlash className="hover:text-gray-600 transition-all duration-200" />
      <FaTrashAlt className="hover:text-gray-600 transition-all duration-200" />
    </div>
  );
}
