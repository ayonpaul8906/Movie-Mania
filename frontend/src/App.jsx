import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    {/* <Navbar/> */}

    <Routes>
      <Route path='/' element={<Movies/>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>

    </Routes>
    </>
  )
}

export default App
