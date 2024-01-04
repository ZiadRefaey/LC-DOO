import PageNumber from "./PageNumber";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PaginationPages({ rounded, color }) {
  return (
    <ul className="flex items-center justify-center gap-4 mt-20 ">
      <button>
        <FaChevronLeft className="w-[20px] h-[20px] text-lightGray hover:text-black transition-all duration-200 " />
      </button>
      <div className="flex items-center justify-center gap-1">
        <PageNumber rounded={rounded} color={color}>
          1
        </PageNumber>
        <PageNumber rounded={rounded} color={color}>
          2
        </PageNumber>
        <PageNumber rounded={rounded} color={color}>
          3
        </PageNumber>
      </div>
      <button>
        <FaChevronRight className="w-[20px] h-[20px] text-lightGray hover:text-black transition-all duration-200" />
      </button>
    </ul>
  );
}
