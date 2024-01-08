import { useMemo, useState } from "react";
import TableControl from "../../ui/AdminUI/TableControl";
import TableFooter from "../../ui/TableFooter";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import TableRenderer from "./TableRenderer";
export default function DataTableContainer({ tableTitle, COLUMNS, MockData }) {
  const totalRows = MockData.length;
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => MockData, [MockData]);
  const [globalFilter, setGlobalFilter] = useState();
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <TableControl
        table={table}
        tableTitle={tableTitle}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <TableRenderer table={table} />
      <TableFooter table={table} totalRows={totalRows} />
    </>
  );
}
