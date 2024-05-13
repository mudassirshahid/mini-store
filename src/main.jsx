import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'
import Products from './components/Products/Products.jsx'
import Watches from './components/Watches/Watches.jsx'
import Sale from './components/Sale/Sale.jsx'
import Blog from './components/Blog/Blog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='products' element={<Products />} />
      <Route path='watches' element={<Watches />} />
      <Route path='sale' element={<Sale />} />
      <Route path='blog' element={<Blog />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
