import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";
import Pagination from "./Pagination";
import axios from "axios";

function Movies({Watchlist, addToWatchlist, removeFromWatchlist}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_API_KEY;


  function goToNextPage(){
        setPage(page+1);
    }
    function goToPrevPage(){
        if(page>1){ 
            setPage(page-1);
        }
    }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results || []);
        setPage(response.data.page || 1);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  return (
    <div>
      <Navbar />
      <Banner />

      <div className="text-center w-full text-xl font-bold p-2 pt-6">
        Trending Movies
      </div>

      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movie, index) => {
          return (
            <Card
              key={index}
              poster_path={movie.poster_path}
              name={movie.original_title}
              movie={movie}
              Watchlist={Watchlist}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          );
        })}
      </div>

      <Pagination page={page} prev={goToPrevPage} next={goToNextPage}/>

    </div>
  );
}

export default Movies;
