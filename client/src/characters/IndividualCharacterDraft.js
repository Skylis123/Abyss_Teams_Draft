import React from 'react'
import { useState, useEffect } from "react"


export default function IndividualCharacterDraft(props) {
    const [characterImage, setCharacterImage] = useState(
        <img src={require(`/public/images/${props.id.toString()}.png`)}
            className="characterImage"
            alt=""
            style={{ width: "100px", height: "100px" }}
        />
    )

    const removeRandomCharacterFromList = () => {
        if (props.counter <= 8) {
            console.log(props.counter);
            if (props.positionTeamA.includes(props.counter)) {
                const removedCharacterList = props.randomCharacterList.filter((value) => value !== props.id);
                props.setRandomCharacterList(removedCharacterList);
                props.setTeamA([...props.teamA,
                <img src={require(`/public/images/${props.id.toString()}.png`)}
                    className="characterImage"
                    alt=""
                    style={{ width: "65px", height: "65px" }}
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
                />])
                props.setCounter(props.counter + 1);  
            }
        }
    }


    return (
        <div>
            <button className="btn btn-transparent individualCharacter" key={props.key} onClick={removeRandomCharacterFromList}> {characterImage} </button>
        </div>
    )
}
