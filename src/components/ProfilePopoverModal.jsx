import { Link } from "react-router-dom";
import { useAuth } from "../services/apiAuth";

export default function ProfilePopoverModal() {
  const { logout } = useAuth();
  return (
    <>
      <Link
        to={"/userprofile/1"}
        className="bg-primary px-2 py-1 hover:bg-adminSecondary transition-all duration-200 min-w-[12rem] rounded-xl border border-1 border-gray-300 text-center"
      >
        View profile
      </Link>
      <button
        onClick={() => logout()}
        className="bg-danger px-2 min-w-[12rem] text-white rounded-xl py-1 transition-all duration-200 hover:bg-opacity-90"
      >
        Logout
      </button>
    </>
  );
}
