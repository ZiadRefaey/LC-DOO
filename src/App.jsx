import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./ui/Root";
import ErrorPage from "./pages/ErrorPage";
import { createContext, useEffect, useState } from "react";
import Homepage from "./pages/user pages/Homepage";
import Products from "./pages/user pages/Products";
import ProductOverview from "./pages/user pages/ProductOverview";
import Cart from "./pages/user pages/Cart";
import Wishlist from "./pages/user pages/Wishlist";
import SignIn from "./pages/user pages/SignIn";
import SignUp from "./pages/user pages/SignUp";
import ContactUs from "./pages/user pages/Contactus";
import AdminDashboard from "./pages/admin pages/AdminDashboard";
import AdminProducts from "./pages/admin pages/AdminProducts";
import AdminOrders from "./pages/admin pages/AdminOrders";
import AdminCustomers from "./pages/admin pages/AdminCustomers";

export const ScreenContext = createContext(null);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductOverview /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/products", element: <AdminProducts /> },
      { path: "/admin/orders", element: <AdminOrders /> },
      { path: "/admin/customers", element: <AdminCustomers /> },
    ],
  },
]);

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update screenWidth when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const screenSizes = {
    small: 640,
    medium: 767,
    large: 1024,
    xl: 1280,
    currentWidth: screenWidth,
  };
  return (
    <>
      <ScreenContext.Provider value={screenSizes}>
        <RouterProvider router={router} />
      </ScreenContext.Provider>
    </>
  );
}

export default App;
