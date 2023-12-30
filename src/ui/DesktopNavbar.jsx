import { Link } from "react-router-dom";
import NavWrapper from "./NavWrapper";
import { IoIosSunny } from "react-icons/io";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import NavLinksWrapper from "./NavLinksWrapper";
import Search from "./Search";
import { useState } from "react";
import logo from "../assets/Logo.png";

export default function DesktopNavbar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <NavWrapper>
      <div className="flex items-center justify-start transition-all duration-500 static">
        <li className="mr-3">
          <Link to="/" className=" ">
            <img src={logo} className="max-w-[250px]" alt="" />
          </Link>
        </li>
        <NavLinksWrapper isFocused={isFocused} />
      </div>
      <div
        className={`flex items-center justify-end gap-4 transition-all duration-500  ${
          isFocused ? "flex-grow" : "flex-grow-0"
        }`}
      >
        <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        <div className="group w-8 h-8 rounded-full cursor-pointer bg-lightOrange flex items-center justify-center hover:bg-darkOrange transition-all duration-150">
          <IoIosSunny className="w-6 h-6 text-darkOrange group-hover:text-lightOrange transition-all duration-150" />
        </div>

        <PrimaryButton size="small" isLink={"/signup"} className={"min-w-max"}>
          Sign Up
        </PrimaryButton>
        <SecondaryButton isLink={"/signin"} className={"text-sm"}>
          Sign in
        </SecondaryButton>
      </div>
    </NavWrapper>
  );
}
