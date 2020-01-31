import React from "react";
import styled from "styled-components";

const card= styled.div`  
border: 1px solid black;
margin: 2%;
padding: 3%;
`;

export default function CharacterCard( props ) {
  console.log("the props", props)
  return (
    <card>
      <img src={props.image} alt='rick & morty characters'/>
      <h3>Name: {props.name}</h3>
      <p>Species:{props.species}</p>
    </card>
  );
}
