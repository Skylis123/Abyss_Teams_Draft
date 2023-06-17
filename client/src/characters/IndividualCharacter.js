import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';


export default function IndividualCharacter(props) {
  const [characterImage, setCharacterImage] = useState(
    <img src={require(`/public/images/${props.id.toString()}.png`)} 
    className="characterImage" 
    alt="" 
    style={{ width: "65px", height: "65px" }} 
    />
  )

  const [characterName, setCharacterName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const addToUserCharacterList = () => {
    if (!isChecked) {
      axios.post('http://localhost:4000/addCharacter', {
        username: props.username,
        id: props.id
      }).then(() => {
        console.log("Character added to the list");
        setIsChecked(true);
        props.setProcEffect(!props.procEffect);
      }).catch((error) => {
        console.log("Error adding character to user list");
      });
    } else {
      axios.post('http://localhost:4000/removeCharacter', {
        username: props.username,
        id: props.id
      }).then(() => {
        console.log("Character removed from the list");
        setIsChecked(false);
        props.setProcEffect(!props.procEffect);
      }).catch((error) => {
        console.log("Error removing character from the list");
      });
    }
  }

  useEffect(() => {
    axios.post('http://localhost:4000/charactersCheck', {
      username: props.username,
      id: props.id
    }).then((response) => {
      setIsChecked(response.data);
    }).catch((error) => {
      console.log("Error");
    })
  },);

  useEffect(()=> {
    axios.post('http://localhost:4000/characters/Name',{
      id: props.id
    }).then((response)=>{
      setCharacterName(response.data);
    }).catch((error) => {
      console.log("Unable to get characters name")
    })
  })



  return (
    <div>
      <button className="btn btn-transparent individualCharacter" onClick={addToUserCharacterList}>{characterImage}</button>
      <div className="text-center flex fs-6 text-white">{characterName}</div>
    </div>
  )
}
