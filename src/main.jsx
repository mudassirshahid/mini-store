import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/Services/Services.jsx";
import Products from "./components/Products/Products.jsx";
import Watches from "./components/Watches/Watches.jsx";
import Sale from "./components/Sale/Sale.jsx";
import Blog from "./components/Blog/Blog.jsx";
import { AppProvider } from "./components/UseContext/UseContext.jsx";
import { ThemeProvider } from "./ThemeContext/ThemeContext.jsx";
import { ProductProvider } from "./ProductContext.jsx/ProductContext.jsx";
import LoginApi from "./components/LoginApiAxios/LoginApi.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Services />} />
      {/* <Route path="products" element={localStorage.getItem('token') ? <Products /> : <Navigate to="/login"  replace={true} />} /> */}
      <Route path="products" element={<Products />} />
      <Route path="watches" element={<Watches />} />
      <Route path="sale" element={<Sale />} />
      <Route path="blog" element={<Blog />} />
      <Route path="login" element={<LoginApi />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // For user context
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
  
  //For darkmode
  // <ThemeProvider>
  //   <RouterProvider router = {router} />
  // </ThemeProvider>
);
