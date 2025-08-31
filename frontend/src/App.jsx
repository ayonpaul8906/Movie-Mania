import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {Routes, Route} from 'react-router-dom'

function App() {
  // Rename state variable to watchlist (camelCase)
  const [watchlist, setWatchlist] = useState([]);

  function addToWatchlist(movie) {
    let newWatchlist = [...watchlist, movie];
    localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  }

  function removeFromWatchlist(movie) {
    let filterWatchlist = watchlist.filter(m => m.id !== movie.id);  
    setWatchlist(filterWatchlist);
    console.log(filterWatchlist);  
  }

  useEffect(() => {
    let existingWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(existingWatchlist);
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Movies 
            Watchlist={watchlist} 
            addToWatchlist={addToWatchlist} 
            removeFromWatchlist={removeFromWatchlist}
          />
        }/>
        <Route path='/watchlist' element={
          <Watchlist 
            Watchlist={watchlist}
            removeFromWatchlist={removeFromWatchlist}
          />
        }/>
      </Routes>
    </>
  )
}

export default App