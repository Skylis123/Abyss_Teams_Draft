import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';


export default function IndividualCharacter(props) {
  const [characterImage, setCharacterImage] = useState(<img src={require(`/public/images/${props.id.toString()}.png`)} className="characterImage" alt="" style={{ width: "65px", height: "65px" }} />)
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
        console.log(props.procEffect);
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
        console.log(props.procEffect);
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

  return (
    <div>
      <button className="btn btn-transparent individualCharacter" onClick={addToUserCharacterList}>{characterImage}</button>
      <input type="checkbox" checked={isChecked} disabled={true} />
    </div>
  )
}
