import AdminCard from "./AdminCard";

export default function AdminStatCard({ bgColor, icon, title, value }) {
  return (
    <AdminCard className={"grid grid-cols-[5.6rem,1fr]"}>
      <div
        className={`${bgColor} bg-opacity-30 rounded-full w-[4.2rem] h-[4.2rem] flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="flex items-staart justify-center flex-col">
        <p className="text-lg leading-tight text-gray-700 ">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </AdminCard>
  );
}
