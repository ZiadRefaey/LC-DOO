import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import AdminCard from "../../ui/AdminUI/AdminCard";

export default function OrdersChart() {
  const fakeOrderData = [
    { day: "Monday", totalOrders: 120 },
    { day: "Tuesday", totalOrders: 150 },
    { day: "Wednesday", totalOrders: 90 },
    { day: "Thursday", totalOrders: 200 },
    { day: "Friday", totalOrders: 180 },
    { day: "Saturday", totalOrders: 250 },
    { day: "Sunday", totalOrders: 170 },
  ];
  return (
    <AdminCard className={" col-span-2"}>
      <div className="w-full flex items-center justify-between mb-4 pl-5">
        <h1 className="text-xl">Total customers overview</h1>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={fakeOrderData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalOrders"
            fill="#8790f6"
            activeBar={<Rectangle fill="#536de6" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </AdminCard>
  );
}
