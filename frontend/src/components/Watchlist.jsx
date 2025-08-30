import React from 'react'
import Navbar from './Navbar'

function Watchlist() {
  return (
    <div>
      <>
        <Navbar />

        <div className='flex flex-wrap justify-center my-4 text-gray-600 font-bold text-xl'>
          <div className='h-[3rem] w-[9rem] flex justify-center bg-blue-400 rounded-xl items-center text-white font-bold m-4'>All</div>
          <div className='h-[3rem] w-[9rem] flex justify-center bg-gray-400/50 rounded-xl items-center text-white font-bold m-4'>Action</div>
          <div className='h-[3rem] w-[9rem] flex justify-center bg-gray-400/50 rounded-xl items-center text-white font-bold m-4'>Thriller</div>
        </div>

        <div className='w-full flex justify-center p-2 '>
          <input type="search" placeholder='Search Movies' className='bg-gray-100 border-2 h-[2rem] w-[15rem] px-3 border-black rounded-xl' />
        </div>

        <div className='border border-gray-300 m-8 rounded-lg overflow-hidden'>
          <table className='w-full text-gray-600 text-center'>
            <thead className='border-b-2 border-gray-300'>
              <tr>
                <th>Title</th>
                <th>Ratings</th>
                <th>Popularity</th>
                <th>Genre</th>
              </tr>
            </thead>

            <tbody>
              <tr className='border-b-2 border-gray-300'>
                <td className='p-2 m-2 flex items-center'>
                  <img className='w-[8rem] h-[8rem]' src={`https://m.media-amazon.com/images/I/81vRg6RVaFL.jpg`}/>
                  <div className='mx-10 text-xl'>Joker</div>
                </td>
                <td>8.5</td>
                <td>9</td>
                <td>Thriller</td>

                <td className='text-red-800 hover:cursor-pointer'>Delete</td>
              </tr>
            </tbody>
          </table>
        </div>



    </>
    </div>
  )
}

export default Watchlist
