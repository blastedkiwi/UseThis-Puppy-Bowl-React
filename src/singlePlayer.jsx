import React from "react";
import { fetchSinglePlayer } from "./apiData";

const SinglePlayer = (props) => {
  console.log('this is props', props);
    const getPlayer = async () => {
      const response = await fetchSinglePlayer();
      setSelectedPlayer(response);
      console.log("this is main", selectedPlayer);
    };
    getPlayer();

  return (
    <div className="single-player-view">
      <div className="header-info">
        <p className="pup-title">title</p>
        <p className="pup-number">pup#</p>
      </div>
      <p>Team: </p>
      <p>Breed: </p>
      <img />
      <button id="see-all">Back to all players</button>
    </div>
  );
};

export default SinglePlayer;
