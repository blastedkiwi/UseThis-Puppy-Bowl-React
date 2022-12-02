import React from "react";
import { players } from "./dummyPlayers";
// import getPlayers from "./apiData";

const PlayersList = ({players}) => {
// console.log('this is playerlist', {props})
   
    
    return (
      <div id='all-players-container' className="App">
            {
                players.map((player) => {
// console.log(player);
                return(
                    <div className="single-player-card">
                      <div className="header-info">
                        <p className="pup-title">{player.name}</p>
                        <p className="pup-number">#{player.id}</p>
                      </div>
                      <img src={player.imageUrl}/>
                      <button className="detail-button" data-id={player.id}>See details</button>
                      <button className="delete-button" data-id={player.id}>Remove from roster</button>
                    </div>
                )
                })
            }
    //   </div>
    
)}

export default PlayersList