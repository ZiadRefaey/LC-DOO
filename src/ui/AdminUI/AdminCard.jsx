export default function AdminCard({ className, children, padding = "p-4" }) {
  return (
    <div
      className={`${className} ${padding} rounded-lg bg-adminPrimary shadow-lg`}
    >
      {children}
    </div>
  );
}
