import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import App from './App.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
          <Route index element={<Home/>}/>
          <Route path='movie/:id' element={<Movie/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path="*" element={<div>404 - Not Found</div>}></Route>
      </Routes>
    </BrowserRouter>  
  </StrictMode>,
)
