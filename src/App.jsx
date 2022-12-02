import React, { useState, useEffect } from 'react'
import './App.css'
import PlayersList from './playersList'
// import { players } from './dummyPlayers'
import getPlayers from './apiData'
// import SinglePlayer from './singlePlayer'



// const NavBar = (props) => {
//   const players = props.players

//   return (
//     <nav>
//       <ul>
//         <li>Name: {players[0].name}</li>
//         <li>About {players[0].breed}</li>
//       </ul>
//     </nav>
//   )
// }



const  App = () => {
  const [players, setPlayers] = useState([]);

  // const getPlayers = async () => {
  //   try {
  //     const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players')
  //     const data = await response.json();
  //     setPlayers(data);
  //   }
  //   catch (error){
  //     console.error(error)
  //   }
  // }
  
  useEffect(() => {
    getPlayers(setPlayers)
  },[]);

  // console.log('this is main' , players);

  return (
    <>
      {/* <div id='all-players-container' className="App"> */}
        <PlayersList players={players}/>
      {/* </div> */}
    </>
  )
}

export default App