import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";
import Tag from "../../ui/Tag";
import OrdersMockData from "../../services/Orders_MOCK_DATA.json";
import ActionsGroup from "../../ui/AdminUI/ActionsGroup";
import DataTableContainer from "../../features/Admin/DataTableContainer";

export default function AdminOrders() {
  const OrdersColumns = [
    {
      id: "check",
      header: "Check",
      cell: () => <input type="checkbox" />,
    },
    {
      accessorKey: "orderid",
      header: "Order ID",
      cell: (props) => (
        <p className="font-semibold text-gray-500">#{props.getValue()}</p>
      ),
    },
    { accessorKey: "date", header: "Date" },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: (props) => <Tag>{props.getValue()}</Tag>,
    },
    { accessorKey: "total", header: "Total" },
    { accessorKey: "method", header: "Payment Method" },
    {
      accessorKey: "orderStatus",
      header: "Order Status",
      cell: (props) => <Tag>{props.getValue()}</Tag>,
    },
    { id: "action", header: "Actions", cell: <ActionsGroup /> },
  ];

  return (
    <>
      <AdminPageTitle>Orders</AdminPageTitle>
      <AdminCard>
        <DataTableContainer
          tableTitle={"Orders"}
          COLUMNS={OrdersColumns}
          MockData={OrdersMockData}
        />
      </AdminCard>
    </>
  );
}
