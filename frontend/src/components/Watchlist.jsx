import React, { useState } from "react";
import Navbar from "./Navbar";
import genreids from "../utility/genre";
import { useEffect } from "react";

function Watchlist({ Watchlist, setWatchlist, removeFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All"]);
  const [currGenre, setCurrGenre] = useState("All");

  let handlesearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    Watchlist.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchlist([...Watchlist]);
  };

  let sortDecreasing = () => {
    Watchlist.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchlist([...Watchlist]);
  };

  useEffect(() => {
    let genre = Watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    genre = new Set(genre);
    setGenreList(["All", ...genre]);
  }, [Watchlist]);

  return (  
    <div>
      <>
        <Navbar />

        <div className="flex flex-wrap justify-center my-4 text-gray-600 font-bold text-xl">
          {genreList.map((genre) => {
            return (
              <div
                onClick={() => handleFilter(genre)}
                className={
                  currGenre === genre
                    ? "h-[3rem] w-[9rem] flex justify-center bg-blue-400 rounded-xl items-center text-white font-bold m-4 hover:cursor-pointer"
                    : "h-[3rem] w-[9rem] flex justify-center bg-gray-400/50 rounded-xl items-center text-gray-600 font-bold m-4 hover:cursor-pointer"
                }
              >
                {genre}
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-center p-2 ">
          <input
            type="search"
            placeholder="Search Movies"
            onChange={handlesearch}
            value={search}
            className="bg-gray-100 border-2 h-[2rem] w-[15rem] px-3 border-black rounded-xl"
          />
        </div>

        <div className="border border-gray-300 m-8 rounded-lg overflow-hidden">
          <table className="w-full text-gray-600 text-center">
            <thead className="border-b-2 border-gray-300">
              <tr className="text-lg">
                <th>Title</th>
                <div className="flex justify-center">
                  <div
                    className="p-2 hover:cursor-pointer"
                    onClick={sortIncreasing}
                  >
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                  <th className="p-2">Ratings</th>
                  <div
                    className="p-2 hover:cursor-pointer"
                    onClick={sortDecreasing}
                  >
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
                <th>Popularity</th>
                <th>Genre</th>
              </tr>
            </thead>

            <tbody>
              {Watchlist.filter((movie) => {
                if (currGenre === "All") {
                  return true;
                } else {
                  return genreids[movie.genre_ids[0]] === currGenre;
                }
              }).
              filter((movie) => {
                return movie.title.toLowerCase().includes(search.toLowerCase());
              }).map((movie, index) => {
                return (
                  <tr className="border-b-2 border-gray-300">
                    <td className="p-2 m-2 flex items-center">
                      <img
                        className="w-[8rem] h-[8rem]"
                        src={`https://image.tmdb.org//t/p/original/${movie.poster_path}`}
                      />
                      <div className="mx-10 text-xl">
                        {movie.original_title}
                      </div>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{genreids[movie.genre_ids[0]]}</td>

                    <td className="text-red-800 hover:cursor-pointer font-semibold text-lg" onClick={() => removeFromWatchlist(movie)}>
                      Delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}

export default Watchlist;
