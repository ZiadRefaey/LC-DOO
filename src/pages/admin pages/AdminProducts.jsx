import ProductsTable from "../../features/Admin Products/ProductsTable";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";
import TableControl from "../../ui/AdminUI/TableControl";
import TableFooter from "../../ui/TableFooter";

export default function AdminProducts() {
  return (
    <>
      <AdminPageTitle>Products</AdminPageTitle>
      <AdminCard>
        <TableControl tabelTitle={"Products"} />
        <ProductsTable />
        <TableFooter />
      </AdminCard>
    </>
  );
}
