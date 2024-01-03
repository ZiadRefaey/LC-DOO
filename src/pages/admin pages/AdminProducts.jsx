import AdminTable from "../../ui/AdminUI/AdminTable";
import AdminCard from "../../ui/AdminUI/AdminCard";
import AdminTableHeader from "../../ui/AdminUI/AdminTableHeader";
import AdminTableRow from "../../ui/AdminUI/AdminTableRow";
import ProductsTableProduct from "../../features/Admin Products/ProductsTableProduct";
import AdminTableData from "../../ui/AdminUI/AdminTableData";
import Tag from "../../ui/Tag";
import ActionsGroup from "../../ui/AdminUI/ActionsGroup";
export default function AdminProducts() {
  const headers = [
    { header: <input type="checkbox" />, sortable: false },
    { header: "Product", sortable: true },
    { header: "Category", sortable: true },
    { header: "Added Date", sortable: true },
    { header: "Price", sortable: true },
    { header: "Quantity", sortable: true },
    { header: "Status", sortable: true },
    { header: "Actions", sortable: false },
  ];

  const fakeTableData = [
    {
      product: <ProductsTableProduct />,
      category: "Flaux leather",
      date: "01/01/2024",
      price: "250 L.E",
      quantity: 2,
      status: <Tag>Active</Tag>,
    },
    {
      product: <ProductsTableProduct />,
      category: "Flaux leather",
      date: "01/01/2024",
      price: "250 L.E",
      quantity: 2,
      status: <Tag>Deactive</Tag>,
    },
    {
      product: <ProductsTableProduct />,
      category: "Flaux leather",
      date: "01/01/2024",
      price: "250 L.E",
      quantity: 2,
      status: <Tag>Active</Tag>,
    },
    {
      product: <ProductsTableProduct />,
      category: "Flaux leather",
      date: "01/01/2024",
      price: "250 L.E",
      quantity: 2,
      status: <Tag>Active</Tag>,
    },
  ];
  return (
    <AdminCard>
      <AdminTable>
        <thead>
          <AdminTableRow
            cols={"grid-cols-[4rem,2.5fr,2fr,2fr,1fr,1fr,1fr,1.5fr]"}
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
              cols={"grid-cols-[4rem,2.5fr,2fr,2fr,1fr,1fr,1fr,1.5fr]"}
              key={index}
            >
              <AdminTableData>
                <input type="checkbox" />
              </AdminTableData>
              <AdminTableData>{dataRow.product}</AdminTableData>
              <AdminTableData>{dataRow.category}</AdminTableData>
              <AdminTableData>{dataRow.date}</AdminTableData>
              <AdminTableData>{dataRow.price}</AdminTableData>
              <AdminTableData>{dataRow.quantity}</AdminTableData>
              <AdminTableData>{dataRow.status}</AdminTableData>
              <AdminTableData>
                <ActionsGroup />
              </AdminTableData>
            </AdminTableRow>
          ))}
        </tbody>
      </AdminTable>
    </AdminCard>
  );
}
