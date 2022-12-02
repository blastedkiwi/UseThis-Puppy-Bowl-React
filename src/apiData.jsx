import React from "react";
import { useEffect } from "react";

const cohortName = '2211-FTB-ET-WEB-FT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


const fetchAllPlayers = async () => {

    try {
      const response = await fetch (`${APIURL}players`)
      const data = await response.json();
      console.log('this is in api' , data.data.players);
      return data.data.players;
    }
    catch (error){
      console.error(error)
    }
}






export default fetchAllPlayers