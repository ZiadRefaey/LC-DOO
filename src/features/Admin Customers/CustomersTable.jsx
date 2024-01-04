import Tag from "../../ui/Tag";
import AdminTableRow from "../../ui/AdminUI/AdminTableRow";
import AdminTableHeader from "../../ui/AdminUI/AdminTableHeader";
import AdminTableData from "../../ui/AdminUI/AdminTableData";
import AdminTable from "../../ui/AdminUI/AdminTable";
import ActionsGroup from "../../ui/AdminUI/ActionsGroup";
import CustomersTableCustomer from "./CustomersTableCustomer";
export default function CustomersTable() {
  const headers = [
    { header: <input type="checkbox" />, sortable: false },
    { header: "Customer", sortable: true },
    { header: "Phone", sortable: true },
    { header: "Email", sortable: true },
    { header: "Location", sortable: true },
    { header: "Create Date", sortable: true },
    { header: "Status", sortable: true },
    { header: "Actions", sortable: false },
  ];

  const fakeTableData = [
    {
      customer: <CustomersTableCustomer />,
      phone: "+20 1010 923 960",
      email: "ziad.refaey1@gmail.com",
      location: "Egypt",
      createDate: "01/01/2024",
      status: <Tag>Blocked</Tag>,
    },

    {
      customer: <CustomersTableCustomer />,
      phone: "+20 1010 923 960",
      email: "ziad.refaey1@gmail.com",
      location: "Egypt",
      createDate: "01/01/2024",
      status: <Tag>Active</Tag>,
    },
    {
      customer: <CustomersTableCustomer />,
      phone: "+20 1010 923 960",
      email: "ziad.refaey1@gmail.com",
      location: "Egypt",
      createDate: "01/01/2024",
      status: <Tag>Blocked</Tag>,
    },

    {
      customer: <CustomersTableCustomer />,
      phone: "+20 1010 923 960",
      email: "ziad.refaey1@gmail.com",
      location: "Egypt",
      createDate: "01/01/2024",
      status: <Tag>Active</Tag>,
    },
    {
      customer: <CustomersTableCustomer />,
      phone: "+20 1010 923 960",
      email: "ziad.refaey1@gmail.com",
      location: "Egypt",
      createDate: "01/01/2024",
      status: <Tag>Blocked</Tag>,
    },

    {
      customer: <CustomersTableCustomer />,
      phone: "+20 1010 923 960",
      email: "ziad.refaey1@gmail.com",
      location: "Egypt",
      createDate: "01/01/2024",
      status: <Tag>Active</Tag>,
    },
  ];
  return (
    <AdminTable>
      <thead>
        <AdminTableRow
          cols={"grid-cols-[4rem,1.5fr,2fr,2fr,1fr,1.5fr,1fr,1fr]"}
        >
          {headers.map((header) => (
            <AdminTableHeader key={header.header} sortable={header.sortable}>
              {header.header}
            </AdminTableHeader>
          ))}
        </AdminTableRow>
      </thead>
      <tbody>
        {fakeTableData.map((dataRow, index) => (
          <AdminTableRow
            cols={"grid-cols-[4rem,1.5fr,2fr,2fr,1fr,1.5fr,1fr,1fr]"}
            key={index}
          >
            <AdminTableData>
              <input type="checkbox" />
            </AdminTableData>
            <AdminTableData>{dataRow.customer}</AdminTableData>
            <AdminTableData>{dataRow.phone}</AdminTableData>
            <AdminTableData>{dataRow.email}</AdminTableData>
            <AdminTableData>{dataRow.location}</AdminTableData>
            <AdminTableData>{dataRow.createDate}</AdminTableData>
            <AdminTableData>{dataRow.status}</AdminTableData>
            <AdminTableData>
              <ActionsGroup />
            </AdminTableData>
          </AdminTableRow>
        ))}
      </tbody>
    </AdminTable>
  );
}
