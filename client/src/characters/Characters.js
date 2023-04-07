import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import IndividualCharacter from './IndividualCharacter';
import axios from 'axios';


export default function Characters(props) {
  let navigate = useNavigate();
  let [userCharactersList, setUserCharactersList] = useState([]);
  let [charactersList, setCharactersList] = useState([]);
  let [procEffect, setProcEffect] = useState(true)

  const navigateUserPage = () => {
    navigate(`/user/${props.username}`);
  }

  useEffect(() => {
    let auxCharacters = [];
    for (let i = 1; i <= props.charactersCount; ++i) {
      auxCharacters[i] = < IndividualCharacter id={i} username={props.username} procEffect={procEffect} setProcEffect={setProcEffect} />
    }
    setCharactersList(auxCharacters);
  }, [props.username, props.charactersCount, procEffect]);

  useEffect(() => {
    axios.post('http://localhost:4000/userCharactersList', {
      username: props.username,
    }).then((response) => {
      setUserCharactersList(response.data);
      console.log(response.data)
    }).catch((error) => {
      console.log("Error");
    })
  }, [props.username, procEffect]);


  return (
    <div>
      <div>
        <button className="navigateUserPage" onClick={navigateUserPage}> Back </button>
      </div>
      <div>
        {charactersList.map((chars, key) => {
          return <label key={key}>{chars}</label>
        })}
      </div>
      <div>
        {userCharactersList.map((id, key) => {
          return <label key={id}>{charactersList[id]}</label>
        })}
      </div>
    </div>
  )
}
