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
            element: <AddProduct></AddProduct>
        },
        {
            path: '/updateProduct/:id',
            element: <UpdateProduct></UpdateProduct>,
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
          element: <ProductDetails></ProductDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: '/productsCart',
          element: <Cart></Cart> ,
          loader: () => fetch('http://localhost:5000/cartProducts')
        }
        
      ]
    },
    
  ]);

  export default router