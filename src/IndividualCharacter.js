import React from 'react'
import { useState} from "react"
import  axios  from 'axios';

export default function IndividualCharacter(props) {
  const [characterImage, setCharacterImage] = useState(<img src={require(`./characters/${props.id.toString()}.png`)} className = "characterImage" alt = "" />) 

  const addToUserCharacterList = () => {
    axios.post('http://localhost:4000/addCharacter', {
          username: props.username,
          id : props.id
    }).then(() => {
          console.log("It Works");
    });
  }
  

  return (
    <div>
       <button className = "individualCharacter" onClick = {addToUserCharacterList}>{characterImage}</button>    
    </div>
  )
}
