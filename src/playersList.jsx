import React from "react";
// import { fetchSinglePlayer } from "./apiData";
// import { getPlayers } from "./apiData";

const PlayersList = ({ players, fetchSinglePlayer }) => {
  // console.log({ fetchSinglePlayer });
  return (
    <div id="all-players-container" className="App">
      {players.map((player) => {
        // console.log(player);
        return (
          <div className="single-player-card" key={player.id}>
            <div className="header-info">
              <p className="pup-title">{player.name}</p>
              <p className="pup-number">#{player.id}</p>
            </div>
            <img src={player.imageUrl} />
            <button
              onClick={() => fetchSinglePlayer(player.id)}
              className="detail-button"
              data-id={player.id}>
              See details
            </button>
            <button className="delete-button" data-id={player.id}>
              Remove from roster
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlayersList;
