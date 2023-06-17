import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function IndividualCharacterId(props) {
    let navigate = useNavigate();
    const navigateCharactersDetails = () => {
        navigate(`/user/${props.username}/charactersDetail`);
    };

    let [characterDetails, setCharactersDetails] = useState([]);
    let [characterImage, setCharacterImage] = useState([
        <img
            src={require(`/public/images/${props.individualCharacterId.toString()}.png`)}
            className="characterImage"
            alt=""
            style={{ width: '200px', height: '200px' }}
        />
    ]);

    useEffect(() => {
        axios
            .post('http://localhost:4000/characters/Details', {
                id: props.individualCharacterId
            })
            .then((response) => {
                setCharactersDetails(response.data);
            })
            .catch((error) => {
                console.log('Unable to get character details');
            });
    }, []);

    return (
        <div>
            <div>
                <Button className="btn btn-secondary" variant="secondary" onClick={navigateCharactersDetails}>
                    Back
                </Button>
            </div>
            <div>{characterImage}</div>
            {characterDetails.length > 0 &&
                <div className="text-white" >
                    <div><label> Name : {characterDetails[0]['character_name']}</label></div>
                    <div><label>Attack : {characterDetails[0]['attack']}</label></div>
                    <div><label>Defense : {characterDetails[0]['defense']}</label></div>
                    <div><label>Elemental Skill : {characterDetails[0]['elemental_skill']}</label></div>
                    <div><label>Elemental Burst : {characterDetails[0]['elemental_burst']}</label></div>
                    <div><label>Energy : {characterDetails[0]['energy']}</label></div>
                    <div><label>Passive : {characterDetails[0]['passive']}</label></div>
                    <div><label>Rating : {characterDetails[0]['character_rating']}</label></div>
                </div>
            }
        </div>
    );
}
