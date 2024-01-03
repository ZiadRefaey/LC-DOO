import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
} from "recharts";
import AdminCard from "../../ui/AdminUI/AdminCard";
export default function IncomeOutcome() {
  const fakeData = [
    { date: "1st of jan", income: "1500", outcome: "1000" },
    { date: "2nd of jan", income: "2000", outcome: "800" },
    { date: "3rd of jan", income: "1800", outcome: "1200" },
    { date: "4th of jan", income: "2500", outcome: "800" },
    { date: "5th of jan", income: "2200", outcome: "1000" },
    { date: "6th of jan", income: "1200", outcome: "300" },
    { date: "7th of jan", income: "1800", outcome: "900" },
    { date: "8th of jan", income: "500", outcome: "470" },
    { date: "9th of jan", income: "2700", outcome: "900" },
    { date: "10th of jan", income: "3000", outcome: "550" },
    { date: "11th of jan", income: "1800", outcome: "600" },
    { date: "12th of jan", income: "2800", outcome: "2300" },
    { date: "13th of jan", income: "1500", outcome: "300" },
    { date: "14th of jan", income: "800", outcome: "700" },
    { date: "15th of jan", income: "900", outcome: "780" },
    { date: "16th of jan", income: "1500", outcome: "310" },
    { date: "17th of jan", income: "1200", outcome: "400" },
    { date: "18th of jan", income: "1300", outcome: "600" },
    { date: "19th of jan", income: "1600", outcome: "450" },
    { date: "20th of jan", income: "1100", outcome: "200" },
    { date: "21st of jan", income: "1800", outcome: "700" },
    { date: "22nd of jan", income: "2500", outcome: "1200" },
    { date: "23rd of jan", income: "2200", outcome: "800" },
    { date: "24th of jan", income: "3000", outcome: "1100" },
    { date: "25th of jan", income: "2800", outcome: "900" },
    { date: "26th of jan", income: "1500", outcome: "600" },
    { date: "27th of jan", income: "2000", outcome: "850" },
    { date: "28th of jan", income: "1700", outcome: "400" },
    { date: "29th of jan", income: "2400", outcome: "1300" },
    { date: "30th of jan", income: "2000", outcome: "700" },
  ];
  const maxYValue = Math.max(
    ...fakeData.map((entry) =>
      Math.max(Number(entry.income), Number(entry.outcome))
    )
  );
  console.log(maxYValue);
  return (
    <AdminCard className="bg-primary flex flex-col items-center justify-start min-h-[30rem] w-full p-6 col-span-4">
      <div className="w-full flex items-center justify-between mb-4 pl-5">
        <h1 className="text-xl">Income/Outcome overview</h1>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={fakeData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3dd9ad" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3dd9ad" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff5b5b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff5b5b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis domain={[0, maxYValue + 500]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />

          <Area
            type="monotone"
            dataKey="income"
            stroke="#3dd9ad"
            fillOpacity={1}
            strokeWidth={3}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="outcome"
            stroke="#ff5b5b"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </AdminCard>
  );
}
