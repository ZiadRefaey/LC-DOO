import OrdersTable from "../../features/Admin Orders/OrdersTable";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";
import TableControl from "../../ui/AdminUI/TableControl";
import TableFooter from "../../ui/TableFooter";

export default function AdminOrders() {
  return (
    <>
      <AdminPageTitle>Orders</AdminPageTitle>
      <AdminCard>
        <TableControl tabelTitle={"Orders"} />
        <OrdersTable />
        <TableFooter />
      </AdminCard>
    </>
  );
}
