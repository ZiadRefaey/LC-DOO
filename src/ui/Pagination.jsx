import PageNumber from "./PageNumber";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({
  table,
  pagesCount,
  handlePrevButton,
  handleNextButton,
  pageIndex,
}) {
  let pages = [];
  // makes the pagination 1 2 3 4 5 ... last page if the current page is 3 or less
  if (pageIndex < 4) {
    //reset the pagination buttons
    pages = [];
    for (let i = 1; i < 6; i++) {
      pages.push(
        <PageNumber table={table} key={i} pageIndex={pageIndex}>
          {i}
        </PageNumber>
      );
    }
    pages.push(<span>...</span>);
    pages.push(<PageNumber table={table}>{pagesCount}</PageNumber>);
  } else if (pagesCount <= pageIndex + 2) {
    //reset the pagination buttons
    pages = [];
    pages.push(<PageNumber table={table}>1</PageNumber>);
    pages.push(<span>...</span>);
    for (let i = pagesCount - 4; i <= pagesCount; i++) {
      pages.push(
        <PageNumber table={table} key={i} pageIndex={pageIndex}>
          {i}
        </PageNumber>
      );
    }
  } else {
    //resets buttons
    pages = [];
    //adds the first page followed by 3 dots
    pages.push(<PageNumber table={table}>1</PageNumber>);
    pages.push(<span>...</span>);
    //adds the current page along with 2 before and after current page
    for (let i = pageIndex - 2; i < pageIndex + 3; i++) {
      pages.push(
        <PageNumber table={table} key={i} pageIndex={pageIndex}>
          {i}
        </PageNumber>
      );
    }
    //adds 3dots followed by the last page
    pages.push(<span>...</span>);
    pages.push(<PageNumber table={table}>{pagesCount}</PageNumber>);
  }
  return (
    <ul className="flex items-center justify-center gap-4 mt-20 ">
      <button onClick={handlePrevButton}>
        <FaChevronLeft className="w-[20px] h-[20px] text-lightGray hover:text-black transition-all duration-200 " />
      </button>
      <ul className="flex items-center justify-center gap-1">{pages}</ul>
      <button onClick={handleNextButton}>
        <FaChevronRight className="w-[20px] h-[20px] text-lightGray hover:text-black transition-all duration-200" />
      </button>
    </ul>
  );
}
