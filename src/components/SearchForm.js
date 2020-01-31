import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Character = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
export default function SearchForm() {

  const [characters, setCharacter] = useState([]);
  const [characterTerm, setcharacterTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  const handleChange = event => {
    setcharacterTerm(event.target.value);
  };

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("response1", response)
        setCharacter(response.data.results);
      })
      .catch(error => {console.log("There's an error", error);
    });

    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(characterTerm.toLowerCase());
    });
    setSearchResults(results);

  }, [characterTerm]);

  return (
    <section className="search-form">
     <form>
       <label htmlFor="title">Search:</label>
       <input id="title" type="text" name="title" onChange={handleChange} 
       value={characterTerm} />
     </form>
     <Character>
     {searchResults.map(char =>{
       console.log("characters", char)
       return ( 
       <CharacterCard {...char}/>
     )})}
     </Character>
    </section>
  );
}

