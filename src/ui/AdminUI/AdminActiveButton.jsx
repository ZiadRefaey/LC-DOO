export default function AdminActiveButton({ children, active, setActive }) {
  return (
    <button
      className={` px-3 py-2 rounded-lg ${
        active === children
          ? "bg-adminTertiary text-white cursor-not-allowed"
          : "hover:bg-gray-200 cursor-pointer "
      }  text-lg transition-all duration-200`}
      onClick={() => setActive(children)}
      disabled={active === children}
    >
      {children}
    </button>
  );
}
