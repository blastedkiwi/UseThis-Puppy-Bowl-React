import React from "react";
// import { fetchSinglePlayer } from "./apiData";


//need to invoke fetchSingleUser as a function at the onClick here
const PlayersRow = ({player, fetchSinglePlayer }) => {
// console.log({fetchSinglePlayer});  
// why is this returning as undefined??
  // const { selectedPlayer } = {player};
  //tried to pass along another this here to check if this is what it needs to work... nope
  return (
        <div className="single-player-card">
          <div className="header-info">
            <p className="pup-title">{player.name}</p>
            <p className="pup-number">#{player.id}</p>
          </div>
            <img src={player.imageUrl}/>
            <button 
              onClick={()=> fetchSinglePlayer(player.id)}
              className="detail-button" data-id={player.id}>See details</button>
            <button className="delete-button" data-id={player.id}>Remove from roster</button>
        </div>
    );
};

export default PlayersRow;