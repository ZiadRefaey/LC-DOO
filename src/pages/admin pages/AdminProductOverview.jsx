import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminProductImageSection from "../../features/Admin Products/AdminProductImageSection";
import productImg from "../../assets/Beige.png";
import AdminProductDetails from "../../features/Admin Products/AdminProductDetails";
import BasicTable from "../../ui/BasicTable";
import data from "../../services/product_overview_mockdata.json";

export default function AdminProductOverview() {
  const columns = [
    { id: "id", header: "ID" },
    { id: "price", header: "Price" },
    { id: "costs", header: "Costs" },
    { id: "revenue", header: "Revenue" },
  ];
  return (
    <>
      <AdminPageTitle>Product</AdminPageTitle>
      <AdminCard padding="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <AdminProductImageSection productImg={productImg} />
          <AdminProductDetails />
        </div>
        <BasicTable columns={columns} data={data} />
      </AdminCard>
    </>
  );
}
