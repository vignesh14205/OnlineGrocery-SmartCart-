import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../component/Login'
import SignUp from '../component/Signup'
import Home1 from '../component/Home1'

export default function Navigator() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Login />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/Signup' element = {<SignUp />}></Route>
        <Route path='/home' element = {<Home1 />}></Route>
      </Routes>
    </div>
  )
}