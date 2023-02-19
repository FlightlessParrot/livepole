import { createBrowserRouter } from "react-router-dom";
import Main from "./main";
import Contact from "./contact";
import Products from "./products";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/products",
      element: <Products />,
    },
  ],
  
);
