import React from 'react'
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";

export default function StartPage(props) {
    let navigate = useNavigate();


    const addUser = () => {
        axios.post('http://localhost:4000/register', {
          username: props.username,
          password : props.password
        }).then(() => {
          console.log("It Works");
        });
      };
    
      const logIn = () => {
        axios.post('http://localhost:4000/login', {
          username: props.username,
          password : props.password
        }).then((response) => {
            if(response.data.message){
              props.setLogInStatus(response.data.message)
            } else {
              navigate("/userpage");
            }
        });
      };

  return (
    <div>
      <div> 
        <label>Username</label>
        <input 
          type = "text" 
          onChange = {(event) =>{
            props.setUsername(event.target.value);
        }}/>
        <label>Password</label>
        <input 
          type = "text" 
          onChange = {(event) =>{
            props.setPassword(event.target.value);
        }}/>
      </div>
      <div>
        <button className = "singUp" onClick = {addUser}>Sing Up</button>
        <button className = "logIn" onClick = {logIn}>Log In</button>
      </div>
      <div>
        {props.logInStatus}
        {props.charactersCount}
      </div>
    </div>
  )
}
