import React from "react";

function Card({ poster_path, name, movie, Watchlist, addToWatchlist, removeFromWatchlist }) {
  function doescontainMovie() {
    for (let i = 0; i < Watchlist.length; i++) {
      if (Watchlist[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-38 m-2 rounded-xl bg-center border-2 border-black bg-cover hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org//t/p/original/${poster_path})`,
      }}
    >
      {doescontainMovie() ? (
        <div onClick={()=>{removeFromWatchlist(movie)}} className="text-white h-7 w-7 m-1 bg-gray-900/60 rounded-lg flex items-center justify-center text-xl">
          <i class="fa-solid fa-trash"></i>
        </div>
      ) : (
        <div
          onClick={()=>{addToWatchlist(movie)}}
          className="text-red-600 h-7 w-7 m-1 bg-gray-900/60 rounded-lg flex items-center justify-center text-xl"
        >
          <i class="fa-solid fa-heart"></i>
        </div>
      )}

      <div className="text-white w-full text-xl text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default Card;
