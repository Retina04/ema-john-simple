import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartLoaderProducts from './Loaders/cartProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';
const router =createBrowserRouter([
  {
    path:'/' ,
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },{
        path:'orders',
        element:<Orders></Orders>,
        loader: cartLoaderProducts
       
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
       
      },
      {
        path:'checkout',
        element:<CheckOut></CheckOut>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
