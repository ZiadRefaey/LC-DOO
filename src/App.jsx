import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./ui/Root";
import ErrorPage from "./pages/ErrorPage";
import { createContext, useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import ProductOverview from "./pages/ProductOverview";
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
