
import { Outlet } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar'
import Home from './pages/Home'


function App() {
  return (
    <div className="app">

      <Navbar />
      <h2>Movies lib</h2>
      <Outlet />
    </div>
  )
}

export default App
