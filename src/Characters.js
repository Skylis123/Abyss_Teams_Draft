import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import IndividualCharacter from './IndividualCharacter';

export default function Characters(props) {
  let navigate = useNavigate();  
  let [charactersList, setCharactersList] = useState([]);
  let auxCharacters = [];

  
  useEffect(()=> {
    let auxCharacters = [];
    for (let i = 1; i <= props.charactersCount; ++i) {
        auxCharacters[i] = < IndividualCharacter id = {i} username = {props.username} />
      }
      setCharactersList(auxCharacters);
  },[props.charactersCount]);


  const navigateUserPage = () => {
    navigate("/userpage");
  }
  return (
    <div>
      <div>
        <button className = "navigateUserPage" onClick = {navigateUserPage}> Back </button>
      </div>
      <div>
        {charactersList.map((chars, key)=>{
            return <label key = {key}>{chars}</label>
        })}
      </div>
    </div>
  )
}
