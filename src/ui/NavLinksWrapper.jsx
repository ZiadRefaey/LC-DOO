import { useEffect, useState } from "react";
import NavLink from "./NavLink";

export default function NavLinksWrapper({ isFocused }) {
  const [isVisible, setIsVisible] = useState(!isFocused);

  useEffect(() => {
    let timeoutId;

    // If isFocused becomes true, set a timeout to remove the "hidden" class after 0.25s
    if (!isFocused) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 250);
    } else {
      // If isFocused becomes false, immediately hide the component
      setIsVisible(true);
    }

    // Clear the timeout if the component unmounts or if isFocused changes before the timeout
    return () => clearTimeout(timeoutId);
  }, [isFocused]);
  return (
    <div
      className={`flex items-center justify-start gap-4 ${
        isVisible ? "hidden" : ""
      }`}
    >
      <li>
        <NavLink to={"/"} active={true}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </div>
  );
}
