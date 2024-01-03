import { IoSearch } from "react-icons/io5";

export default function AdminSearch() {
  return (
    <div className="flex items-center justify-center">
      <div className=" rounded-l-md bg-gray-600 flex items-center justify-start p-2 gap-2 min-w-[300px]">
        <IoSearch className="text-placeholder" />
        <input
          className="bg-inherit outline-none border-none text-white w-full"
          placeholder="search"
        />
      </div>
      <button className="rounded-r-md px-5 text-lg bg-adminTertiary text-white py-[6px] hover:bg-opacity-70 transition-all duration-200">
        Search
      </button>
    </div>
  );
}
