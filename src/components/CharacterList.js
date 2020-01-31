import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Character = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`


export default function CharacterList() {
  const [characters, setCharacter] = useState([]);
  console.log("anything")
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log("results", response.data.results)
      setCharacter(response.data.results);
    })
    .catch(error => {console.log("There was an error", error);
  })
}, []);


  return (
    <Character>
     {characters.map(char =>{
       console.log("characters", char)
       return ( 
       <CharacterCard {...char}/>
     )})}
    </Character>
  );
}
