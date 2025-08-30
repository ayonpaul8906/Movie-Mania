import React from 'react'

function Pagination({page, next, prev}) {
    
  return (
    <div className='w-full flex justify-center p-2 bg-gray-600/60 '>
      <div className='p-2 pb-0 hover:cursor-pointer' onClick={prev}><i class="fa-solid fa-backward"></i></div>
      <div className='p-2 pb-0 hover:cursor-pointer font-bold'>{page}</div>
      <div className='p-2 pb-0 hover:cursor-pointer' onClick={next}><i class="fa-solid fa-forward"></i></div>
    </div>
  )
}

export default Pagination
