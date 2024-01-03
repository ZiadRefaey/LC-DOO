export default function AdminCard({ className, children }) {
  return (
    <div className={`${className} p-4 rounded-lg bg-adminPrimary`}>
      {children}
    </div>
  );
}
