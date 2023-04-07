import React from 'react'
import { useState, useEffect } from 'react'
import IndividualCharacterDraft from './IndividualCharacterDraft';


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
        <div>
            <div>
                {playList.map((char, key) => {
                    return <label key={key}>{char}</label>
                })}
            </div>
            <div>
                {teamA.map((char, key) => {
                    return <label key={key}>{char}</label>
                })}
            </div>
            <div>
                {teamB.map((char, key) => {
                    return <label key={key}>{char}</label>
                })}
            </div>
        </div>
    )
}

