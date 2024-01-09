import ProductsTableProduct from "../../features/Admin Products/ProductsTableProduct";
import AdminCard from "../../ui/AdminUI/AdminCard";
import BasicTable from "../../ui/BasicTable";
import Tag from "../../ui/Tag";
import data from "../../services/project_overview_mockdata.json";
import PrimaryButton from "../../ui/PrimaryButton";
export default function AdminProjectOverview({
  ProjectTitle = "Black flaux leather bag, white fur coat and brown school bag",
}) {
  const columns = [
    {
      id: "id",
      header: "Porduct ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },

    {
      id: "product",
      header: "Product",
      cell: (props) => (
        <ProductsTableProduct>{props.getValue()}</ProductsTableProduct>
      ),
    },
    {
      id: "color",
      header: "Color",
    },
    { id: "price", header: "Price" },
    { id: "quantity", header: "Quantity" },
    {
      id: "total",
      header: "Total",
    },
  ];

  return (
    <>
      <AdminCard className={"mb-10"} padding="p-6">
        <h1 className="text-2xl font-semibold text-gray-700">{ProjectTitle}</h1>
        <Tag className={"mt-6 mb-10"}>Finished</Tag>
        <h2 className="text-lg mb-3 text-gray-600 font-medium ">
          Project Description:
        </h2>
        <p className="text-md text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          obcaecati, earum nisi labore quas qui mollitia omnis ex ipsam sit
          illum accusantium, natus soluta cum nihil! Molestias, odit distinctio.
          Aperiam debitis dolor ea illo a nulla similique beatae quae
          perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Praesentium, aliquam.
        </p>
        <div className="flex items-center justify-between w-full max-w-[800px]">
          <div>
            <h3 className="text-lg text-gray-600 font-medium ">Request Date</h3>
            <p className="text-md text-gray-600 mb-10">16/1/2024</p>
          </div>
          <div>
            <h4 className="text-lg text-gray-600 font-medium ">Total</h4>
            <p className="text-md text-gray-600 mb-10">750 EGP</p>
          </div>
          <div>
            <h3 className="text-lg text-gray-600 font-medium ">Tasks</h3>
            <p className="text-md text-gray-600 mb-10">5</p>
          </div>
        </div>
      </AdminCard>
      <AdminCard className={"mb-10"}>
        <BasicTable data={data} columns={columns} />
      </AdminCard>
      <div className="w-full flex items-center justify-end">
        <PrimaryButton color={"bg-adminTertiary"}>Ship Order</PrimaryButton>
      </div>
    </>
  );
}
