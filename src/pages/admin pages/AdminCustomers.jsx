import ActionsGroup from "../../ui/AdminUI/ActionsGroup";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";
import NamedAvatar from "../../ui/AdminUI/NamedAvatar";
import Tag from "../../ui/Tag";
import MockData from "../../services/MOCK_DATA.json";
import DataTableContainer from "../../features/Admin/DataTableContainer";

export default function AdminCustomers() {
  const customersColumns = [
    {
      cell: () => <input type="checkbox" />,
      header: "Check",
    },

    {
      accessorKey: "customer",
      header: "Customer",
      cell: (props) => <NamedAvatar>{props.getValue()}</NamedAvatar>,
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "createDate",
      header: "Create Date",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (props) => <Tag>{props.getValue()}</Tag>,
    },

    {
      accessorKey: "action",
      header: "Actions",
      cell: () => <ActionsGroup />,
    },
  ];

  return (
    <>
      <AdminPageTitle>Customers</AdminPageTitle>
      <AdminCard>
        <DataTableContainer
          tableTitle={"Customers"}
          COLUMNS={customersColumns}
          MockData={MockData}
        />
      </AdminCard>
    </>
  );
}
