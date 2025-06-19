import React from 'react'

import NavBar from "./Components/NavBar.jsx"
import Home from "./Pages/Home.jsx"
import Create from "./Pages/Create.jsx"
import Display from "./Pages/Display.jsx"

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/display" element={<Display/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

