import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';

export default function IndividualCharacterDraft(props) {
    const [characterImage, setCharacterImage] = useState(
        <img src={require(`/public/images/${props.id.toString()}.png`)}
            className="characterImage"
            alt=""
            style={{ width: "100px", height: "100px" }}
        />
    )
    const [characterRating, setCharacterRating] = useState(0);

    const removeRandomCharacterFromList = () => {
        if (props.counter <= 8) {
            if (props.positionTeamA.includes(props.counter)) {
                const removedCharacterList = props.randomCharacterList.filter((value) => value !== props.id);
                props.setRandomCharacterList(removedCharacterList);
                props.setTeamA([...props.teamA,
                <img src={require(`/public/images/${props.id.toString()}.png`)}
                    className="characterImage"
                    alt=""
                    style={{ width: "65px", height: "65px" }}
                    id={props.id}
                />])
                props.setCounter(props.counter + 1);
            } else {
                const removedCharacterList = props.randomCharacterList.filter((value) => value !== props.id);
                props.setRandomCharacterList(removedCharacterList);
                props.setTeamB([...props.teamB,
                <img src={require(`/public/images/${props.id.toString()}.png`)}
                    className="characterImage"
                    alt=""
                    style={{ width: "65px", height: "65px" }}
                    id={props.id}
                />])
                props.setCounter(props.counter + 1);
            }
        }
    }
    useEffect(() => {
        axios.post('http://localhost:4000/character/rating', {
            id: props.id
        }).then((response) => {
            setCharacterRating(response.data);
        }).catch("Error");
    })



    return (
        <div>
            <button className="btn btn-transparent individualCharacter" key={props.key} onClick={removeRandomCharacterFromList}>{characterImage} </button>
            <div>
                <label className="text-white"
                    style={{
                        marginLeft: "50px",
                    }}>
                    {characterRating}
                </label>
            </div>
        </div>
    )
}
