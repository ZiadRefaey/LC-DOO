import CustomersTable from "../../features/Admin Customers/CustomersTable";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";
import TableControl from "../../ui/AdminUI/TableControl";
import TableFooter from "../../ui/TableFooter";

export default function AdminCustomers() {
  return (
    <>
      <AdminPageTitle>Customers</AdminPageTitle>
      <AdminCard>
        <TableControl tabelTitle={"Customers"} />
        <CustomersTable />
        <TableFooter />
      </AdminCard>
    </>
  );
}
