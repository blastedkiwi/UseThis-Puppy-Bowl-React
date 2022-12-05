import React from "react";
import PlayersRow from "./playersRow";

// import { players } from "./dummyPlayers";
// import getPlayers from "./apiData";

const PlayersList = ({players}) => {

// console.log('this is playerlist', {props})
const { fetchSinglePlayer, setSelectedPlayer } = {players};
    
    return (
      <div id='all-players-container' className="App">
            {
                players.map((player) => {
// console.log(player);
                return(
                  <PlayersRow player= {player} key={player.idx} fetchSinglePlayer={fetchSinglePlayer}
                  setSelectedPlayer={setSelectedPlayer} />
                    
                )
                })
            }
      </div>

    
)}

export default PlayersList