import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../component/Login'
import SignUp from '../component/Signup'
import Home from '../component/Home'
import Home1 from '../component/Home1'
import Home2 from '../component/Home2'
import Home3 from '../component/Home3'
import Home4 from '../component/home4'
import Cart from '../component/Cart'
export default function Navigator() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element = {<Login />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/Signup' element = {<SignUp />}></Route>
        <Route path='/home' element = {<Home />}></Route>
        <Route path='/home1' element = {<Home1 />}></Route>
        <Route path='/home2' element = {<Home2 />}></Route>
        <Route path='/home3' element = {<Home3 />}></Route>
        <Route path='/home4' element = {<Home4 />}></Route>
        <Route path='/cart' element = {<Cart />}></Route>
        {/* <Route path="/cart" element={<Cart cart={Cart} />} /> */}
       
      </Routes>
      
    </div>
  )
}