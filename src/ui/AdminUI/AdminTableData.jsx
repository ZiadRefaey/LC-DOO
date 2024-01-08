export default function AdminTableData({ className, children }) {
  return (
    <td
      className={`bg-adminPrimary group-hover:bg-inherit flex items-center justify-start ${className} transition-all duration-200 px-4 py-2 cursor-pointer border-b border-gray-400`}
    >
      {children}
    </td>
  );
}
