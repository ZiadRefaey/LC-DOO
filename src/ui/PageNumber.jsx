export default function PageNumber({
  pageIndex,
  children,
  rounded = "rounded-md",
  table,
}) {
  return (
    <li
      className={`min-w-[40px] h-[40px] ${
        pageIndex === Number(children)
          ? "text-white bg-adminTertiary"
          : "hover:text-black hover:bg-adminSecondary"
      }  ${rounded}  cursor-pointer flex items-center justify-center`}
    >
      <button
        className="w-full h-full"
        onClick={() => table.setPageIndex(Number(children - 1))}
      >
        {children}
      </button>
    </li>
  );
}
