import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

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
    <div className="d-flex flex-column align-items-center">
      <Button className="my-3 btn-block" variant="secondary" onClick={navigateCharactersPage}>Characters</Button>
      <Button className="my-3 btn-block" variant="secondary" onClick={navigateDraftPage}>Draft</Button>
      <Button className="my-3 btn-block" variant="secondary" onClick={navigateAuthenticationPage}>Sign out</Button>
    </div>
  )
}
