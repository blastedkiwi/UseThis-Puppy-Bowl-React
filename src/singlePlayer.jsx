import React from "react";
// import { fetchSinglePlayer } from "./apiData";

//need to have the single player data to populate here
const SinglePlayer = ({ selectedPlayer }) => {
    return (
        <div>
            <p>ID: {selectedPlayer.id}</p>
            <p>Name: {selectedPlayer.name}</p>
            <p>Breed: {selectedPlayer.breed}</p>
            <p>Status: {selectedPlayer.status}</p>
            <img src="http://r.ddmcdn.com/w_912/s_f/o_1/cx_51/cy_0/cw_912/ch_1368/APL/uploads/2019/12/Anise-PBXVI.jpg"/>
        </div>
    )
}

export default SinglePlayer