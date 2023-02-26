import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import jsons from "./server/products.json";
const Main = React.lazy(()=>import("./main"));
const Contact =React.lazy(()=>import("./contact")) ; 
const Products = React.lazy(()=>import("./products"));

const Safety = React.lazy(()=>import("./products_children/safety")); 
const ProductData =React.lazy(()=>import("./products_children/product_data")) ;
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Suspense fallback= {<div>Loading...</div>}><Main /></Suspense>,
    },
    {
      path: "/contact",
      element: <Suspense fallback= {<div>Loading...</div>}><Contact /></Suspense>,
    },
    {
      path: "/products",
      element: <Suspense fallback= {<div>Loading...</div>}><Products /></Suspense>,
      loader: ()=>{return jsons},
      children:[
        {
          path: ":id",
          element: <Suspense fallback= {<div>Loading...</div>}><ProductData /></Suspense>,
          loader: ({params})=>{return params.id}
        },
        {
          path: "safety",
          element: <Suspense fallback= {<div>Loading...</div>}><Safety /></Suspense> 
        }
      ]
    },
  ],
  
);
