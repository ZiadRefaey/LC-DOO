import { Outlet, useLocation } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import { useContext } from "react";
import { ScreenContext } from "../App";
import Footer from "./Footer";
import AdminSidebar from "./AdminUI/AdminSidebar";
import AdminHeader from "./AdminUI/AdminHeader";
import AppLayout from "./AppLayout";
import { AuthProvider } from "../services/apiAuth";
export default function Root() {
  const location = useLocation();

  const screenWidth = useContext(ScreenContext);
  if (location.pathname.startsWith("/admin"))
    return (
      <AuthProvider>
        <div className=" bg-adminBg h-[100vh] grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] ">
          <AdminHeader />
          <AdminSidebar />
          <main className="w-full h-[95%] self-center overflow-y-scroll pr-7">
            <Outlet />
          </main>
        </div>
      </AuthProvider>
    );
  return (
    <>
      <AuthProvider>
        {screenWidth.currentWidth > screenWidth.xl && <DesktopNavbar />}
        <AppLayout id="detail">
          <Outlet />
        </AppLayout>
        <Footer />
      </AuthProvider>
    </>
  );
}
