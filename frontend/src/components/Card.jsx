import React from "react";

function Card({poster_path, name}) {
  return (
    <div
      className="h-[40vh] w-38 m-2 rounded-xl bg-center border-2 border-black bg-cover hover:scale-110 duration-300 hover:cursor-pointer flex items-end"
      style={{ backgroundImage:`url(https://image.tmdb.org//t/p/original/${poster_path})` }}
    >

      <div className="text-white w-full text-xl text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default Card;
