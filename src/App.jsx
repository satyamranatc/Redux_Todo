import React from 'react'
import "./App.css"

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

import Create from './Pages/Create.jsx'
import AllTasks from './Pages/AllTask.jsx'

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to={"/create"}>Create</Link></li>
            <li><Link to={"/allTasks"}>All Tasks</Link></li>
          </ul>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/allTasks" element={<AllTasks />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}