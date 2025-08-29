import React from 'react'
import { Link } from 'react-router-dom' 

function Navbar() {
  return (
    <div className='flex border space-x-10 p-4 items-center'>
        <img className='h-10 w-10' src="logo.png" />

        <Link to="/" className='text-blue-500 font-bold text-2xl'>Home</Link>
        <Link to="/watchlist" className='text-blue-500 font-bold text-2xl'>Watchlist</Link>
      
    </div>
  )
}

export default Navbar
