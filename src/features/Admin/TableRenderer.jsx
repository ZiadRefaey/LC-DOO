import AdminTableRow from "../../ui/AdminUI/AdminTableRow";
import AdminTableHeader from "../../ui/AdminUI/AdminTableHeader";
import { flexRender } from "@tanstack/react-table";
import AdminTableData from "../../ui/AdminUI/AdminTableData";
import AdminTableUI from "../../ui/AdminUI/AdminTableUI";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

export default function TableRenderer({ table }) {
  return (
    <AdminTableUI>
      <thead>
        <AdminTableRow>
          {table.getHeaderGroups()[0].headers.map((header) => (
            <AdminTableHeader
              key={header.id}
              onClick={header.column.getToggleSortingHandler()}
              sortable={header.sortable}
            >
              <div className="flex items-center justify-between gap-4 w-full ">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {{
                  asc: (
                    <div className="flex items-center justify-center flex-col  text-sm">
                      <FaSortUp className="-mb-[14px]" />
                      <FaSortDown className="m-0 opacity-30" />
                    </div>
                  ),
                  desc: (
                    <div className="flex items-center justify-center flex-col  text-sm">
                      <FaSortUp className="-mb-[14px] opacity-30" />
                      <FaSortDown className="m-0 " />
                    </div>
                  ),
                }[String(header.column.getIsSorted())] || <FaSort />}
              </div>
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
