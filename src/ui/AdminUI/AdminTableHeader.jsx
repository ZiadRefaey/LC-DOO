export default function AdminTableHeader({ children, className, onClick }) {
  return (
    <th
      onClick={onClick}
      className={`bg-adminSecondary text-sm text-start  ${className} p-4 cursor-pointer`}
    >
      {children}
    </th>
  );
}
