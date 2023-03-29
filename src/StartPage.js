import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function StartPage(props) {
  let navigate = useNavigate();


  const addUser = () => {
    axios.post('http://localhost:4000/register', {
      username: props.username,
      password: props.password
    }).then(() => {
      console.log("It Works");
    });
  };

  const logIn = () => {
    axios.post('http://localhost:4000/login', {
      username: props.username,
      password: props.password
    }).then((response) => {
      if (response.data.message) {
        props.setLogInStatus(response.data.message)
      } else {
        navigate(`/userpage/id:${props.username}`);
      }
    });
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => {
            props.setUsername(event.target.value);
          }} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(event) => {
            props.setPassword(event.target.value);
          }} />
      </div>
      <div className="form-group">
        <button className="btn btn-secondary mr-2" onClick={addUser}>Sing Up</button>
        <button className="btn btn-secondary" onClick={logIn}>Log In</button>
      </div>
      <div className="mt-3">
        {props.logInStatus}
      </div>
    </div>
  )
}
