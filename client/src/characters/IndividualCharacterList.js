import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function IndividualCharacterList(props) {
    let navigate = useNavigate();

    const [characterImage, setCharacterImage] = useState(
        <img src={require(`/public/images/${props.id.toString()}.png`)}
            className="characterImage"
            alt=""
            style={{ width: "65px", height: "65px" }}
        />
    )

    const [characterName, setCharacterName] = useState("");

    useEffect(() => {
        axios.post('http://localhost:4000/characters/Name', {
            id: props.id
        }).then((response) => {
            setCharacterName(response.data);
        }).catch((error) => {
            console.log("Unable to get characters name")
        })
    },[]);

    const individualCharacterListDetails = () => {
        props.setIndiviualCharacterId(props.id)
        navigate(`/user/${props.username}/individualCharacterId`);
    }

    return (
        <div>
            <button className="btn btn-transparent individualCharacter" onClick={individualCharacterListDetails}>{characterImage}</button>
            <div className="text-center flex fs-6 text-white">{characterName}</div>
        </div>
    )
}
