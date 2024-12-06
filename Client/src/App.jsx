import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
function App() {
 

  return (
    <>
   <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/about' element={<About/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>

   </Routes>
    </>
  )
}

export default App