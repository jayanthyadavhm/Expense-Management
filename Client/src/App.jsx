import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Product from "./Pages/Product"
import ExpenseUploadPage from "./Pages/Insights"
function App() {
 

  return (
    <>
   <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/about' element={<About/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/products' element={<Product/>}/>
     <Route path='/insights' element={<ExpenseUploadPage/>}/>

   </Routes>
    </>
  )
}

export default App