import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import GameCard from './GameCard';
//f88defa2
const API_URL = 'http://www.omdbapi.com?apikey=f88defa2';


const App = () => {

const [games , setGames]= useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchGames =async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setGames(data.Search);
  }
  useEffect(() => {
    searchGames('Far Cry');
  }, []);
  return (
    <div className="App"> 
      <h1> GameWorld </h1>

      <div className="search">
      <input placeholder='search for games' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
      <img src='' alt='search' onClick={() => searchGames(searchTerm)}/>
      </div>
      {
        games?.length>0
        ?(
            <div className="container">
              {games.map((games) => (
                <GameCard games={games}/>
                ))}
            </div>
            ):
        (
          <div className="empty">
            <h2>No Games Found</h2>
          </div>
          )
      }
    </div>
  );
}

export default App;
