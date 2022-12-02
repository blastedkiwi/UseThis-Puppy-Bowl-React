import React, { useState, useEffect } from 'react'
import './App.css'
import PlayersList from './playersList'
import fetchAllPlayers from './apiData'
// import SinglePlayer from './singlePlayer'

console.log("hello there");


const  App = () => {
  const [players, setPlayers] = useState([]);


  
  useEffect(() => {
    const getPlayers = async () =>{
      const response = await fetchAllPlayers()
      setPlayers(response);
      console.log(response);
    }
      getPlayers();
  },[]);

  // console.log('this is main' , players);

  return (
    <>
        <PlayersList players={players} key={players.idx}/>
    </>
  )
}

export default App