import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layOuts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> ,
      children: [
        {
            path: '/',
            element: <Navigate to="/home" replace />
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/add Product',
            element: <AddProduct></AddProduct>
        },
        {
            path: '/updateProduct',
            element: <UpdateProduct></UpdateProduct>
        },
      ]
    },
    
  ]);

  export default router