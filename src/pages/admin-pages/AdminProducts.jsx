import ProductsTableProduct from "../../features/Admin Products/ProductsTableProduct";
import ActionsGroup from "../../ui/AdminUI/ActionsGroup";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";
import Tag from "../../ui/Tag";
import productsMockData from "../../services/Products_MOCK_DATA.json";
import DataTableContainer from "../../features/Admin/DataTableContainer";

export default function AdminProducts() {
  const ProductsColumns = [
    {
      id: "check",
      header: "Check",
      cell: () => <input type="checkbox" />,
    },
    {
      accessorKey: "product",
      header: "Product",
      cell: (props) => (
        <ProductsTableProduct>{props.getValue()}</ProductsTableProduct>
      ),
    },
    { accessorKey: "category", header: "Category" },
    {
      accessorKey: "date",
      header: "Date",
    },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "quantity", header: "Quantity" },
    {
      accessorKey: "status",
      header: "Status",
      cell: (props) => <Tag>{props.getValue()}</Tag>,
    },
    { id: "action", header: "Actions", cell: <ActionsGroup /> },
  ];
  return (
    <>
      <AdminPageTitle>Products</AdminPageTitle>
      <AdminCard>
        <DataTableContainer
          tableTitle={"Products"}
          COLUMNS={ProductsColumns}
          MockData={productsMockData}
        />
      </AdminCard>
    </>
  );
}
