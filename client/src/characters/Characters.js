import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import IndividualCharacter from './IndividualCharacter';
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default function Characters(props) {
  let navigate = useNavigate();
  let [userCharactersList, setUserCharactersList] = useState([]);
  let [charactersList, setCharactersList] = useState([]);
  let [procEffect, setProcEffect] = useState(true)
  let [characterListPool, setCharacterListPool] = useState([]);
  let [characterListPoolUnlocked, setCharacterListPoolUnlocked] = useState([]);

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
    }).catch((error) => {
      console.log("Error");
    })
  }, [props.username, procEffect]);

  useEffect(() => {
    let ids = charactersList.map(char => char.props.id);
    let filteredIdsPool = ids.filter(id => !userCharactersList.includes(id));
    let filterIdsPoolUnlocked = ids.filter(id => userCharactersList.includes(id));
    setCharacterListPool(filteredIdsPool);
    setCharacterListPoolUnlocked(filterIdsPoolUnlocked)
  }, [charactersList, procEffect, userCharactersList]);



  return (
    <div>
      <div>
        <Button className="btn btn-secondary mr-4" variant="secondary" onClick={navigateUserPage}>Back</Button>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className='col'>
            <label className="text-white" style={{ marginLeft: "250px" }}>Characters Pool</label>
          </div>
          <div className='col'>
            <label className="text-white" style={{ marginLeft: "300px" }}>Characters Unlocked</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" style={{ width: "600px", height: "450px", overflow: "auto", marginRight: "140px", marginLeft: "30px", border: "2px solid rgba(128, 128, 128, 0.5)", borderRadius: "10px", padding: "10px" }}>
            <div>
              {characterListPool.map((idc, key) => {
                return <label key={idc}>{charactersList[idc]}</label>
              })}
            </div>
          </div>
          <div className="col-md-6" style={{ width: "600px", height: "450px", overflow: "auto", border: "2px solid rgba(128, 128, 128, 0.5)", borderRadius: "10px", padding: "10px" }}>
            <div>
              {characterListPoolUnlocked.map((id, key) => {
                return <label key={id}>{charactersList[id]}</label>
              })}
            </div>
            <style>
              {`
                ::-webkit-scrollbar {
                  width: 10px;
                  height: 10px;
                }
                ::-webkit-scrollbar-thumb {
                  background-color: transparent;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );





}
