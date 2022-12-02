import React from "react";
import { useEffect } from "react";

const cohortName = '2211-FTB-ET-WEB-FT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


const getPlayers = async (setPlayers) => {

    try {
      const response = await fetch (`${APIURL}players`)
      const data = await response.json();
      setPlayers(data);
      console.log('this is in api' , data);
    }
    catch (error){
      console.error(error)
    }
}






export default getPlayers