import React, { useState, useEffect } from 'react'
import './App.css'
import PlayersList from './playersList'
import fetchAllPlayers, { fetchSinglePlayer } from './apiData'
import SinglePlayer from './singlePlayer'

//console.log("hello there testing git");


const  App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  
  useEffect(() => {
    const getPlayers = async () => {
      const response = await fetchAllPlayers()
      setPlayers(response);
      //console.log(response);
    }
      getPlayers();
  },[]);

// console.log('this is main' , players);
// console.log(selectedPlayer)

  return (
    <>
        <PlayersList key={players.idx} players={players} fetchSinglePlayer={fetchSinglePlayer} 
        setSelectedPlayer={setSelectedPlayer}/>
        <SinglePlayer selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/>
    </>
  )
}

export default App