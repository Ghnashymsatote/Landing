import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import  Landing from "./Component/landing"
import Login from "./Component/Login"
import Forgot from "./Component/forgotpass"
import Middle from "./Component/Mid"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/forgot' element={<Forgot/>}></Route>
          <Route path='/Middle' element={<Middle/>}></Route>
        </Routes>
        </BrowserRouter>
   
    </>
  )
}

export default App
