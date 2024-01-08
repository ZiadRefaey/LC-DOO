import Pagination from "./Pagination";

export default function TableFooter({ tableTitle, totalRows, table }) {
  function handleNextButton() {
    table.nextPage();
  }
  function handlePrevButton() {
    table.previousPage();
  }
  const pageIndex = table.getState().pagination.pageIndex + 1;
  const pagesCount = table.getPageCount();

  return (
    <div className="w-full flex items-end justify-between ">
      <p>
        Showing {tableTitle}{" "}
        {/* shows the starting row index of the current page */}
        {(table.getState().pagination.pageIndex + 1) *
          table.getState().pagination.pageSize -
          table.getState().pagination.pageSize +
          1}{" "}
        to {/* shows the ending row index of the current page */}
        {(table.getState().pagination.pageIndex + 1) *
          table.getState().pagination.pageSize}
        {/* Shows total rows number */}
        &nbsp;out of {totalRows}
      </p>
      <Pagination
        table={table}
        pagesCount={pagesCount}
        pageIndex={pageIndex}
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
        rounded={"rounded-full"}
        color={"hover:bg-adminSecondary text-black hover:text-adminTertiary"}
      />
    </div>
  );
}
