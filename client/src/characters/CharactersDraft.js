import React from 'react'
import { useState, useEffect } from 'react'
import IndividualCharacterDraft from './IndividualCharacterDraft';
import { Card } from 'react-bootstrap';


export default function CharactersDraft(props) {
    let [playList, setPlayList] = useState([]);
    let [counter, setCounter] = useState(1);
    let [teamA, setTeamA] = useState([]);
    let [teamB, setTeamB] = useState([]);
    let positionTeamA = [1, 4, 5, 8];
    let positionTeamB = [2, 3, 6, 7];


    useEffect(() => {
        if (props.randomCharacterList.length > 0) {
            let auxPlayList = [];
            let auxPlayListCharacters = [];
            let randomCharacterLength = props.randomCharacterList.length;
            console.log(randomCharacterLength);
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
                        teamA={teamA}
                        setTeamA={setTeamA}
                        teamB={teamB}
                        setTeamB={setTeamB}
                        positionTeamA={positionTeamA}
                        positionTeamB={positionTeamB}
                        counter={counter}
                        setCounter={setCounter}
                    />
            }
            setPlayList(auxPlayListCharacters);

        }
    }, [props.randomCharacterList, props.randomCharacterList.length]);

    useEffect(() => {
        setTeamA([]);
        setTeamB([]);
        setCounter(1);
    }, [props.restart])

    return (
        <div class="card bg-transparent d-flex w-50 mx-auto " style={{border: "2px solid rgba(128, 128, 128, 0.5)", borderRadius: "10px", padding: "10px"}}>
            <div class="col d-flex justify-content-center" style={{border: "2px solid rgba(128, 128, 128, 0.5)", borderRadius: "10px", padding: "10px"}}>
                {playList.map((char, key) => {
                    return <label key={key}>{char}</label>
                })}
            </div>
            <div class="card-body">
                <div class="container-sm-2 ">
                    <div class="col text-white text-center" >First Team</div>
                    <div class= "col" style={{height: "80px", marginLeft: "200px"}}>
                        {teamA.map((char, key) => {
                            return <label key={key}>{char}</label>
                        })}
                    </div>
                </div>
                <div class="container-sm-2 ">
                    <div class="col text-white text-center">Second Team</div>
                    <div class="col" style={{height: "60px", marginLeft: "200px"}}>
                        {teamB.map((char, key) => {
                            return <label key={key}>{char}</label>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
