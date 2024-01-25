import { IoIosSunny } from "react-icons/io";

export default function ThemeSwitcher() {
  return (
    <div className="group w-8 h-8 rounded-full cursor-pointer bg-lightOrange flex items-center justify-center hover:bg-darkOrange transition-all duration-150">
      <IoIosSunny className="w-6 h-6 text-darkOrange group-hover:text-lightOrange transition-all duration-150" />
    </div>
  );
}
