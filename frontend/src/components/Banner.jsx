import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[65vh] bg-cover flex items-end' style={{backgroundImage: 'url(https://cdn.wallpapersafari.com/39/2/4SVm8Q.jpg)'}}>
        <div className='text-2xl bg-gray-400/60 font-bold p-3 w-full text-center text-white'>Avengers Endgame</div>
    </div>
  )
}

export default Banner
