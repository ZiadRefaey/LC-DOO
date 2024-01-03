import { useState } from "react";
import Stats from "../../features/dashboard/Stats";
import AdminActiveButton from "../../ui/AdminUI/AdminActiveButton";
import IncomeOutcome from "../../features/dashboard/IncomeOutcome";
import OrdersChart from "../../features/dashboard/OrdersChart";
import HighestSellingProducts from "../../features/dashboard/HighestSellingProducts";

export default function AdminDashboard() {
  const [active, setActive] = useState("1D");
  return (
    <>
      <div className="w-full flex items-center justify-between mb-10 ">
        <h1 className="text-3xl font-medium">Dashboard</h1>
        <div className="flex gap-2">
          <AdminActiveButton active={active} setActive={setActive}>
            1D
          </AdminActiveButton>
          <AdminActiveButton active={active} setActive={setActive}>
            7D
          </AdminActiveButton>
          <AdminActiveButton active={active} setActive={setActive}>
            30D
          </AdminActiveButton>
          <AdminActiveButton active={active} setActive={setActive}>
            90D
          </AdminActiveButton>
          <AdminActiveButton active={active} setActive={setActive}>
            Total
          </AdminActiveButton>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Stats />
        <IncomeOutcome />
        <OrdersChart />
        <HighestSellingProducts />
      </div>
    </>
  );
}
