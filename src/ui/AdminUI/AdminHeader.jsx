import { IoSunnyOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import AdminSearch from "./AdminSearch";
import { IoMenu } from "react-icons/io5";
import AdminAvatar from "./AdminAvatar";

export default function AdminHeader() {
  return (
    <header className="bg-gray-700 w-full px-8 py-4 col-span-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <img src={logo} alt="logo" className="max-w-[150px] cursor-pointer" />
          <IoMenu className="text-gray-400 text-3xl cursor-pointer" />
          <AdminSearch />
        </div>
        <div className="flex items-center justify-center gap-4">
          <IoSunnyOutline className="w-7 h-7 text-gray-400 hover:text-gray-300 cursor-pointer transition-all duration-150" />
          <AdminAvatar />
        </div>
      </div>
    </header>
  );
}
