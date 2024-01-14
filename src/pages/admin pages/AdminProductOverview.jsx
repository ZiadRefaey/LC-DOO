import AdminPageTitle from "../../ui/AdminUI/AdminPageTitle";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminProductImageSection from "../../features/Admin Products/AdminProductImageSection";
import productImg from "../../assets/Beige.png";
import AdminProductDetails from "../../features/Admin Products/AdminProductDetails";
import BasicTable from "../../ui/BasicTable";

export default function AdminProductOverview() {
  const columns = ["ID", "Name", "Price", "Costs", "Revenue"];
  const data = [
    {
      id: "1",
      name: "Flaux leatherr bag",
      price: "250",
      costs: 150,
      revenue: "4",
    },
    {
      id: "2",
      name: "Flaux leatherr bag",
      price: "150",
      costs: 150,
      revenue: "1",
    },
    {
      id: 3,
      name: "Flaux leatherr bag",
      price: "200",
      costs: 150,
      revenue: "2",
    },
    {
      id: "4",
      name: "Flaux leatherr bag",
      price: "180",
      costs: 150,
      revenue: "1",
    },
  ];

  console.log(data);

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
