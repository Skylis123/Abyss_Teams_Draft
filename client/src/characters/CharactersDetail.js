import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import IndividualCharacterList from './IndividualCharacterList';

export default function CharactersDetail(props) {
    let navigate = useNavigate();
    const navigateUserPage = () => {
        navigate(`/user/${props.username}`);
    }

    let [charactersList, setCharactersList] = useState([]);

    useEffect(() => {
        let auxCharacters = [];
        for (let i = 1; i <= props.charactersCount; ++i) {
            auxCharacters[i] = < IndividualCharacterList
                id={i}
                individualCharacterId={props.individualCharacterId}
                setIndiviualCharacterId={props.setIndiviualCharacterId}
                username={props.username}
            />
        }
        setCharactersList(auxCharacters);
    }, []);

    return (
        <div>
            <div>
                <Button className="btn btn-secondary" variant="secondary" onClick={navigateUserPage}>Back</Button>
            </div>
            <div div className="col-md-6"
                style={{
                    width: "576px",
                    height: "448px",
                    overflow: "auto",
                    marginRight: "140px",
                    marginLeft: "400px",
                    border: "2px solid rgba(128, 128, 128, 0.5)",
                    borderRadius: "10px",
                    padding: "10px"
                }}>
                {charactersList.map((id, key) => {
                    return <label key={key}>{id}</label>
                })}
            </div>
            <style>
                {`
                ::-webkit-scrollbar {
                  width: 10px;
                  height: 10px;
                }
                ::-webkit-scrollbar-thumb {
                  background-color: transparent;
                }
              `}
            </style>
        </div>
    )
}
