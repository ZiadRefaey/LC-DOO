import { FaMoneyBill } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaCalculator, FaShoppingCart } from "react-icons/fa";
import AdminStatCard from "../../ui/AdminUI/AdminStatCard";

export default function Stats() {
  return (
    <>
      <AdminStatCard
        icon={<FaMoneyBill className="w-[50%] h-auto text-green-700" />}
        title={"Revenues"}
        value={"3500 L.E"}
        bgColor={"bg-green-300"}
      />
      <AdminStatCard
        icon={<FaCalculator className="w-[50%] h-auto text-red-700" />}
        title={"Expenses"}
        value={"1500 L.E"}
        bgColor={"bg-red-300"}
      />
      <AdminStatCard
        icon={<FaShoppingCart className="w-[50%] h-auto text-blue-700" />}
        title={"Orders"}
        value={"250"}
        bgColor={"bg-blue-300"}
      />
      <AdminStatCard
        icon={<IoPeopleSharp className="w-[50%] h-auto text-purple-700" />}
        title={"Customers"}
        value={"50 "}
        bgColor={"bg-purple-300"}
      />
    </>
  );
}
