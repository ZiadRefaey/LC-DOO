import { Link } from "react-router-dom";

export default function NavLink({ to, children, active }) {
  return (
    <Link
      to={to}
      className={`${
        active
          ? "text-black font-bold border-b-tertiary border-b-[2px]"
          : "text-lightGray font-regular"
      } text-xl hover:border-b-tertiary hover:border-b-[2px] `}
    >
      {children}
    </Link>
  );
}
