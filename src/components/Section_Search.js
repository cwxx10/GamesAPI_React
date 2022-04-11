import React, { useState } from "react";
import "../components/Section_Search.css";

const Section_Search = () => {
  const [gameTitle, setGameTitle] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);

  const SearchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setSearchedGames(data);
        console.log(data);
      });
  };
  return (
    <div className="section_search">
      <h1 className="search_h1">Search for a Game</h1>
      <input
        type="text"
        placeholder="Type the game here."
        onKeyDown={(event) => {
          if (event.keyCode === 13) SearchGame();
        }}
        onChange={(event) => {
          setGameTitle(event.target.value);
        }}
      />
      <button onClick={SearchGame} id="btn_search">
        <span>Search</span>
        <div className="liquid"></div>
      </button>

      <div className="games">
        {searchedGames.map((game, key) => {
          return (
            <div className="game" key={key}>
              {game.external}
              <img src={game.thumb}></img>
              <div className="cheapest">{game.cheapest} $</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section_Search;
