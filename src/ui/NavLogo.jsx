import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function NavLogo() {
  return (
    <li className="mr-3">
      <Link to="/" className=" ">
        <img src={logo} className="max-w-[250px]" alt="" />
      </Link>
    </li>
  );
}
