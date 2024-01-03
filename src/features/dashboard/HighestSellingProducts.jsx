import {
  PieChart,
  Tooltip,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import AdminCard from "../../ui/AdminUI/AdminCard";

export default function HighestSellingProducts() {
  const fakeData = [
    { title: "pants", value: 1500 },
    { title: "bag", value: 1200 },
    { title: "skirt", value: 1100 },
    { title: "woman bag", value: 2500 },
    { title: "scarf", value: 900 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A855F7"];
  const renderTooltipContent = ({ payload }) => {
    if (payload && payload.length > 0) {
      const { title, value } = payload[0].payload;
      return (
        <div className="p-4 rounded-lg bg-adminPrimary border border-gray-400">{`${title}: ${value}`}</div>
      );
    }
    return null;
  };
  return (
    <AdminCard className={" col-span-2"}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={fakeData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {fakeData.map((entry, index) => (
              <Cell key={`cell-${5}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
            formatter={(value, entry, index) => fakeData[index]?.title}
          />
          <Tooltip content={renderTooltipContent} />
        </PieChart>
      </ResponsiveContainer>
    </AdminCard>
  );
}
