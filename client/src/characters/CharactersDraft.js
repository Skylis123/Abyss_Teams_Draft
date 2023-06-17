import React from 'react'
import { useState, useEffect } from 'react'
import IndividualCharacterDraft from './IndividualCharacterDraft';
import { Card } from 'react-bootstrap';


export default function CharactersDraft(props) {
    let [playList, setPlayList] = useState([]);
    let positionTeamA = [1, 4, 5, 8];
    let positionTeamB = [2, 3, 6, 7];


    useEffect(() => {
        if (props.randomCharacterList.length > 0) {
            let auxPlayList = [];
            let auxPlayListCharacters = [];
            let randomCharacterLength = props.randomCharacterList.length;
            while (auxPlayList.length < 3) {    
                let randomIndex = Math.floor(Math.random() * randomCharacterLength);
                let randomCharacter = props.randomCharacterList[randomIndex];
                if (!auxPlayList.includes(randomCharacter)) {
                    auxPlayList.push(randomCharacter)
                }
            }
            for (let i = 0; i < auxPlayList.length; ++i) {
                auxPlayListCharacters[i] =
                    <IndividualCharacterDraft
                        key={auxPlayList[i]}
                        id={auxPlayList[i]}
                        randomCharacterList={props.randomCharacterList}
                        setRandomCharacterList={props.setRandomCharacterList}
                        teamA={props.teamA}
                        setTeamA={props.setTeamA}
                        teamB={props.teamB}
                        setTeamB={props.setTeamB}
                        positionTeamA={positionTeamA}
                        positionTeamB={positionTeamB}
                        counter={props.counter}
                        setCounter={props.setCounter}
                    />
            }
            setPlayList(auxPlayListCharacters);

        }
    }, [props.randomCharacterList, props.randomCharacterList.length]);



    return (
        <div className="card bg-transparent d-flex w-50 mx-auto " style={{border: "2px solid rgba(128, 128, 128, 0.5)", borderRadius: "10px", padding: "10px"}}>
            <div className="col d-flex justify-content-center" style={{border: "2px solid rgba(128, 128, 128, 0.5)", borderRadius: "10px", padding: "10px"}}>
                {playList.map((char, key) => {
                    return <label key={key}>{char}</label>
                })}
            </div>
            <div className="card-body">
                <div className="container-sm-2 ">
                    <div className="col text-white text-center" >First Team</div>
                    <div className= "col" style={{height: "80px", marginLeft: "200px"}}>
                        {props.teamA.map((char, key) => {
                            return <label key={key}>{char}</label>
                        })}
                    </div>
                </div>
                <div className="container-sm-2 ">
                    <div className="col text-white text-center">Second Team</div>
                    <div className="col" style={{height: "60px", marginLeft: "200px"}}>
                        {props.teamB.map((char, key) => {
                            return <label key={key}>{char}</label>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
