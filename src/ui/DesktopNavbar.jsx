import NavWrapper from "./NavWrapper";
import NavLinksWrapper from "./NavLinksWrapper";
import Search from "./Search";
import { useState } from "react";
import NavLogo from "./NavLogo";
import { useAuth } from "../services/apiAuth";
import ThemeSwitcher from "../components/ThemeSwitcher";
import AuthButtons from "../components/AuthButtons";
import AdminAvatar from "./AdminUI/AdminAvatar";
import { Popover } from "../components/Popover";
import { Link } from "react-router-dom";

export default function DesktopNavbar() {
  const { user, logout } = useAuth();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <NavWrapper>
      <div className="flex items-center justify-start transition-all duration-500 static">
        <NavLogo />
        <NavLinksWrapper isFocused={isFocused} />
      </div>
      <div
        className={`flex items-center justify-end gap-4 transition-all duration-500  ${
          isFocused ? "flex-grow" : "flex-grow-0"
        }`}
      >
        <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        <ThemeSwitcher />
        {user && (
          <Popover>
            <Popover.Trigger name={"users-nav-avatar"}>
              <AdminAvatar />
              <div>
                {user.email}
                <br></br>
                {user.uid}
              </div>
            </Popover.Trigger>
            <Popover.Content name={"users-nav-avatar"}>
              <Link
                to={"/"}
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
            </Popover.Content>
          </Popover>
        )}
        {!user && <AuthButtons />}
      </div>
    </NavWrapper>
  );
}
