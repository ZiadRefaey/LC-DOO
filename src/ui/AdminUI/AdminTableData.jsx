export default function AdminTableData({ className, children }) {
  return (
    <td
      className={`bg-adminPrimary group-hover:bg-inherit ${className} transition-all duration-200 px-4 py-2 border-b border-gray-400`}
    >
      {children}
    </td>
  );
}
