import { Outlet } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import { useContext, useEffect } from "react";
import { ScreenContext } from "../App";
import Footer from "./Footer";

export default function Root() {
  const screenWidth = useContext(ScreenContext);
  useEffect;
  return (
    <>
      {screenWidth.currentWidth > screenWidth.xl && <DesktopNavbar />}
      <main id="detail">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
