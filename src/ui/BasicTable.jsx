import AdminTableHeader from "./AdminUI/AdminTableHeader";
import AdminTableRow from "./AdminUI/AdminTableRow";
import AdminTableUI from "./AdminUI/AdminTableUI";
import AdminTableData from "./AdminUI/AdminTableData";

export default function BasicTable({ data, columns }) {
  return (
    <AdminTableUI>
      <thead>
        <AdminTableRow>
          {columns.map((header, index) => (
            <AdminTableHeader key={index}>{header}</AdminTableHeader>
          ))}
        </AdminTableRow>
      </thead>
      <tbody>
        {data.map((object, index) => (
          <AdminTableRow key={index}>
            {Object.entries(object).map(([key, value]) => (
              <AdminTableData key={key}>{value}</AdminTableData>
            ))}
          </AdminTableRow>
        ))}
      </tbody>
    </AdminTableUI>
  );
}
