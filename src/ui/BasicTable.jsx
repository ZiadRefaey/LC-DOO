import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import AdminTableHeader from "./AdminUI/AdminTableHeader";
import AdminTableRow from "./AdminUI/AdminTableRow";
import AdminTableUI from "./AdminUI/AdminTableUI";
import AdminTableData from "./AdminUI/AdminTableData";

export default function BasicTable({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <AdminTableUI>
      <thead>
        <AdminTableRow>
          {table.getHeaderGroups()[0].headers.map((header) => (
            <AdminTableHeader key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </AdminTableHeader>
          ))}
        </AdminTableRow>
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <AdminTableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <AdminTableData key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </AdminTableData>
            ))}
          </AdminTableRow>
        ))}
      </tbody>
    </AdminTableUI>
  );
}
