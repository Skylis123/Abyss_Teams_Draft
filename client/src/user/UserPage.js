import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'

export default function Mainpage(props) {
  let navigate = useNavigate();

  const navigateCharactersPage = () => {
    navigate(`/user/${props.username}/characters`);
  }
  const navigateDraftPage = () => {
    navigate(`/user/${props.username}/draft`);
  }
  const navigateAuthenticationPage = () => {
    props.setUsername("");
    props.setPassword("");
    props.setLogInStatus("");
    navigate("/authentication");
  }

  useEffect(() => {
    axios.post('http://localhost:4000/userCharactersList', {
      username: props.username,
    }).then((response) => {
      props.setUserUnlockedCharacters(response.data);
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [props.username]);


  return (
    <div className="d-flex flex-column align-items-center">
      <Button className="my-3 btn-block" variant="secondary" onClick={navigateCharactersPage}>Characters</Button>
      <Button className="my-3 btn-block" variant="secondary" onClick={navigateDraftPage}>Draft</Button>
      <Button className="my-3 btn-block" variant="secondary" onClick={navigateAuthenticationPage}>Sign out</Button>
    </div>
  )
}
