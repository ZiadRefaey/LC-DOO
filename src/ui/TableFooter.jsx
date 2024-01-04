import PaginationPages from "./PaginationPages";

export default function TableFooter({ tableTitle }) {
  return (
    <div className="w-full flex items-end    justify-between ">
      <p>Showing {tableTitle} 1 to 10 out of 12</p>
      <PaginationPages
        rounded={"rounded-full"}
        color={"hover:bg-adminSecondary text-black hover:text-adminTertiary"}
      />
    </div>
  );
}
