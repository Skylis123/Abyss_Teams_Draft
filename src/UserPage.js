import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Mainpage(props) {
  let navigate = useNavigate();

  const navigateCharactersPage = () => {
    navigate("/characters");
  }
  const navigateDraftPage = () => {
    navigate("/draft");
  }
  const navigateAuthenticationPage = () => {
    props.setUsername("");
    props.setPassword("");
    props.setLogInStatus("");
    navigate("/authentication");
  }

  return (
    <div>
       <button className = "charactersPage" onClick = {navigateCharactersPage}>Characters</button>
       <button className = "draftPage" onClick = {navigateDraftPage}>Draft</button>
       <button className = "singOut" onClick = {navigateAuthenticationPage}>Sign out</button>
    </div>
  )
}
