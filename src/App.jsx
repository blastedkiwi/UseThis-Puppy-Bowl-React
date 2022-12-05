import React, { useState, useEffect } from "react";
import "./App.css";
import PlayersList from "./playersList";
import NewPlayer from "./newPlayer";
import SinglePlayer from "./singlePlayer";
import { fetchAllPlayers, fetchSinglePlayer } from "./apiData";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [players, setPlayers] = useState([]);
  // const [selectedPlayer, setSelectedPlayer] = useState({});

  useEffect(() => {
    const getPlayers = async () => {
      const response = await fetchAllPlayers();
      setPlayers(response);
      // console.log(response);
    };
    getPlayers();
  }, []);

  // useEffect(() => {
  //   const getPlayer = async () => {
  //     const response = await fetchSinglePlayer();
  //     setSelectedPlayer(response);
  //     console.log("this is main", selectedPlayer);
  //   };
  //   getPlayer();
  // });

  // console.log(players);

  return (
    <>
      <NewPlayer />
      <PlayersList players={players} fetchSinglePlayer={fetchSinglePlayer} />
      <SinglePlayer playerId={players} fetchSinglePlayer={fetchSinglePlayer} />
    </>
  );
};

export default App;
