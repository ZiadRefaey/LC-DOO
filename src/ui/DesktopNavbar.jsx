import { Link } from "react-router-dom";
import NavWrapper from "./NavWrapper";
import { IoIosSunny } from "react-icons/io";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import NavLinksWrapper from "./NavLinksWrapper";
import Search from "./Search";
import { useState } from "react";

export default function DesktopNavbar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <NavWrapper>
      <div className="flex items-center justify-start transition-all duration-500 ">
        <li>
          <Link
            to="/"
            className="inria-font text-5xl font-thin text-tertiary cursor-pointer mr-6 "
          >
            L&CDOO
          </Link>
        </li>
        {/* {isFocused ? null : <NavLinksWrapper />} */}
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

        <PrimaryButton size="small" isLink={"/singup"} className={"min-w-max"}>
          Sign Up
        </PrimaryButton>
        <SecondaryButton className={"text-sm"}>Sign in</SecondaryButton>
      </div>
    </NavWrapper>
  );
}
