import Sidebar from './component/sidebar';
import Navbar from './component/navbar';
import Main from './component/main';
import {HomeOutlined,PlusOutlined ,ShoppingCartOutlined, BellOutlined} from '@ant-design/icons'
import './App.css';

import ProductPage from './component/product_page';

import { Space, Table, Tag } from 'antd';
import Cart from './component/cart';
import CartPage from './component/cart_page';

import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Form from './component/form';
import { useState } from 'react';



const router = createBrowserRouter([
  {
    path:"/",
    element:<>
      <h3>Products</h3>
      <ProductPage/>
    </>
  },
  {
    path:"/cart",
    element:<>
      <h3>Cart Products</h3>
      <CartPage/>
    </>
  },
  {
    path:"/about-us",
    element:<h1>Pending</h1>
  },
  {
    path:"/add",
    element:<>
      <h2>Add Product</h2>
      <Form/>
    </>
  },
])


function App() {

  const [cartItems,setCartItems] = useState([])
  const navigate = useNavigate()


const addToCart=(cartData)=>{
    const data = [...cartItems]

    const cart = {
        name:cartData.name,
        qty:1,
        price:cartData.price,
        category:cartData.category,
        image:cartData.image,
        id:data.length + 1
    }

    if(!data.includes(cart)){
        data.push(cart)
        setCartItems(data)
        alert("Product added to cart o")
    }
}

  return (
    <div id="my-app">
      <div id="my-nav">
      <div className='LOGO'>
        CogTn
      </div>
      <div className='notify'>
        < BellOutlined/> 
      </div>
      
      
      </div>

      <div id="main">
        <div id="my-menu">
          <div className="menu-icon" onClick={()=>{navigate("/")}}><HomeOutlined /></div>           
          <div className="menu-icon" onClick={()=>{navigate("/cart")}}><ShoppingCartOutlined /></div>
          <div className="menu-icon" onClick={()=>{navigate("/add")}}><PlusOutlined /></div>
        </div>
        <div id="my-content">
          {/* <h3>Products</h3>
          <ProductPage/> */}
          {/* <CartPage/> */}
          {/* <RouterProvider router={router}/> */}
          <Routes>
            <Route exact path="/" element={
            <>
              <h3>Products</h3>
              <ProductPage addToCart={addToCart}/>
            </>}/>
            <Route exact path="/cart" element={
              <>
              <h3>Cart Products</h3>
              <CartPage cartItems={cartItems} setCartItems={setCartItems}/>
            </>
            }/>
            <Route exact path="/about-us" element={
              <>
              <h2>Add Product</h2>
              <Form/>
            </>
            }/>
            <Route exact path="/add" element={<>
      <h2>Add Product</h2>
      <Form/>
    </>}/>
          </Routes>
        </div>
      </div>
      <div id="my-menu-small">
          <div className="menu-icon" onClick={()=>{navigate("/")}}><HomeOutlined /></div>           
          <div className="menu-icon" onClick={()=>{navigate("/cart")}}><ShoppingCartOutlined /></div>
          <div className="menu-icon" onClick={()=>{navigate("/add")}}><PlusOutlined /></div>
        </div>
  
    </div>
  );
}

export default App;
