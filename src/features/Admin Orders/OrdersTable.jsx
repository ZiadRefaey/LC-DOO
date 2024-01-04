import Tag from "../../ui/Tag";
import AdminTableRow from "../../ui/AdminUI/AdminTableRow";
import AdminTableHeader from "../../ui/AdminUI/AdminTableHeader";
import AdminTableData from "../../ui/AdminUI/AdminTableData";
import AdminTable from "../../ui/AdminUI/AdminTable";
import ActionsGroup from "../../ui/AdminUI/ActionsGroup";
export default function OrdersTable() {
  const headers = [
    { header: <input type="checkbox" />, sortable: false },
    { header: "Order ID", sortable: true },
    { header: "Date", sortable: true },
    { header: "Payment Status	", sortable: true },
    { header: "Total", sortable: true },
    { header: "Payment Method", sortable: true },
    { header: "Order Status", sortable: true },
    { header: "Actions", sortable: false },
  ];

  const fakeTableData = [
    {
      orderid: <p className="font-semibold text-gray-500">#1245</p>,
      date: "August 05 2018 10:29 PM",
      paymentStatus: <Tag>Payment Failed</Tag>,
      total: "250 L.E",
      paymentMethod: "Cash on delivery",
      orderStatus: <Tag>Delivered</Tag>,
    },
    {
      orderid: <p className="font-semibold text-gray-500">#1245</p>,
      date: "August 05 2018 10:29 PM",
      paymentStatus: <Tag>Awaiting Authorization</Tag>,
      total: "250 L.E",
      paymentMethod: "Cash on delivery",
      orderStatus: <Tag>Shipped</Tag>,
    },
    {
      orderid: <p className="font-semibold text-gray-500">#1245</p>,
      date: "August 05 2018 10:29 PM",
      paymentStatus: <Tag>Unpaid</Tag>,
      total: "250 L.E",
      paymentMethod: "Cash on delivery",
      orderStatus: <Tag>Cancelled</Tag>,
    },
    {
      orderid: <p className="font-semibold text-gray-500">#1245</p>,
      date: "August 05 2018 10:29 PM",
      paymentStatus: <Tag>Paid</Tag>,
      total: "250 L.E",
      paymentMethod: "Cash on delivery",
      orderStatus: <Tag>Shipped</Tag>,
    },
    {
      orderid: <p className="font-semibold text-gray-500">#1245</p>,
      date: "August 05 2018 10:29 PM",
      paymentStatus: <Tag>Paid</Tag>,
      total: "250 L.E",
      paymentMethod: "Cash on delivery",
      orderStatus: <Tag>Processing</Tag>,
    },
    {
      orderid: <p className="font-semibold text-gray-500">#1245</p>,
      date: "August 05 2018 10:29 PM",
      paymentStatus: <Tag>Paid</Tag>,
      total: "250 L.E",
      paymentMethod: "Cash on delivery",
      orderStatus: <Tag>Shipped</Tag>,
    },
  ];
  return (
    <AdminTable>
      <thead>
        <AdminTableRow
          cols={"grid-cols-[4rem,1.5fr,2fr,2fr,1fr,1.5fr,1fr,1fr]"}
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
            cols={"grid-cols-[4rem,1.5fr,2fr,2fr,1fr,1.5fr,1fr,1fr]"}
            key={index}
          >
            <AdminTableData>
              <input type="checkbox" />
            </AdminTableData>
            <AdminTableData>{dataRow.orderid}</AdminTableData>
            <AdminTableData>{dataRow.date}</AdminTableData>
            <AdminTableData>{dataRow.paymentStatus}</AdminTableData>
            <AdminTableData>{dataRow.total}</AdminTableData>
            <AdminTableData>{dataRow.paymentMethod}</AdminTableData>
            <AdminTableData>{dataRow.orderStatus}</AdminTableData>
            <AdminTableData>
              <ActionsGroup />
            </AdminTableData>
          </AdminTableRow>
        ))}
      </tbody>
    </AdminTable>
  );
}
