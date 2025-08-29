import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Card from './Card'

function Movies() {
  return (
    <div>
        <Navbar />
        <Banner />

        <div className='text-center w-full text-xl font-bold p-2 pt-6'>Trending Movies</div>
  
        <div className='flex flex-row flex-wrap justify-around'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      
    </div>
  )
}

export default Movies
