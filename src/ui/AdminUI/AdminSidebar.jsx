import AdminNavLink from "./AdminNavLink";
import { SiGoogleanalytics } from "react-icons/si";
import { GiAmpleDress } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { FaScissors, FaPeopleGroup } from "react-icons/fa6";

export default function AdminSidebar() {
  return (
    <nav className="flex items-center justify-center h-[95%] self-center sticky top-2 flex-col  mx-8 shadow-md bg-adminPrimary w-auto p-2">
      <ul className="flex flex-col items-center w-full h-full justify-start gap-3 ">
        <AdminNavLink
          LinkPath={"/admin/dashboard"}
          LinkTitle={"Dashboard"}
          icon={<SiGoogleanalytics />}
        />
        <AdminNavLink
          LinkPath={"/admin/products"}
          LinkTitle={"Products"}
          icon={<GiAmpleDress />}
        />
        <AdminNavLink
          LinkPath={"/admin/orders"}
          LinkTitle={"Orders"}
          icon={<MdAttachMoney />}
        />
        <AdminNavLink
          LinkPath={"/admin/projects"}
          LinkTitle={"Projects"}
          icon={<FaScissors />}
        />
        <AdminNavLink
          LinkPath={"/admin/customers"}
          LinkTitle={"Customers"}
          icon={<FaPeopleGroup />}
        />
      </ul>
    </nav>
  );
}
