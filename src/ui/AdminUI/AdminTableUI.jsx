export default function AdminTableUI({ children }) {
  return (
    <table className="overflow-x-auto w-full table-layout-auto">
      {children}
    </table>
  );
}
