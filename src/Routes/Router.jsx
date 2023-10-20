import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layOuts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import SignUp from "../Pages/SignUp/SignUp";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRotes/PrivateRoutes";


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
            element: <Home></Home>,
            loader:() => fetch('product.json')
        },
        {
            path: '/add Product',
            element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
        },
        {
            path: '/updateProduct/:id',
            element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
          path: '/brandDetails/:brand_name',
          element: <BrandDetails></BrandDetails>,
          loader: () => fetch('http://localhost:5000/products')
        },
        {
          path: '/products/:id',
          element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: '/productsCart',
          element: <PrivateRoutes><Cart></Cart></PrivateRoutes> ,
          loader: () => fetch('http://localhost:5000/cartProducts')
        },
        {
          path: '/login',
          element: <Login></Login>
        }
        
      ]
    },
    
  ]);

  export default router