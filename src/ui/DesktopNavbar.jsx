import NavWrapper from "./NavWrapper";
import NavLinksWrapper from "./NavLinksWrapper";
import Search from "./Search";
import { useState } from "react";
import NavLogo from "./NavLogo";
import { useAuth } from "../services/apiAuth";
import ThemeSwitcher from "../components/ThemeSwitcher";
import AuthButtons from "../components/AuthButtons";
import AdminAvatar from "../components/AdminAvatar";
import { Popover } from "../components/Popover";
import ProfilePopoverModal from "../components/ProfilePopoverModal";

export default function DesktopNavbar() {
  const { fireStoreUser: user } = useAuth();
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
              <AdminAvatar profilePic={user.pfp} />
            </Popover.Trigger>
            <Popover.Content name={"users-nav-avatar"}>
              <ProfilePopoverModal />
            </Popover.Content>
          </Popover>
        )}
        {!user && <AuthButtons />}
      </div>
    </NavWrapper>
  );
}
