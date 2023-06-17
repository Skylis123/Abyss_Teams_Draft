import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function DraftCompletedTeams(props) {
  let [stars, setStars] = useState();
  let [teamRating, setTeamRating] = useState(0);
  let [finalRating, setFinalRating] = useState(0);
  let [historyCheckBoolean, setHistoryCheckBoolean] = useState(false);


  useEffect(() => {
    props.teamA.forEach(character => {
      axios.post('http://localhost:4000/character/rating', {
        id: character.props.id
      }).then((response) => {
        setTeamRating(teamRating => teamRating + response.data);
      }).catch("Error");
    });
    props.teamB.forEach(character => {
      axios.post('http://localhost:4000/character/rating', {
        id: character.props.id
      }).then((response) => {
        setTeamRating(teamRating => teamRating + response.data);
      }).catch("Error");
    });
  }, []);

  const finalRatingValue = () => {
    setFinalRating((teamRating * stars).toFixed(1));
    setHistoryCheckBoolean(true);
  }

  let addToHistory = () => {
    let currentDate = new Date();
    let fDate = currentDate.toLocaleString();
    axios.post('http://localhost:4000/user/history', {
      username: props.username,
      date: fDate,
      teamA_1: props.teamA[0].props.id,
      teamA_2: props.teamA[1].props.id,
      teamA_3: props.teamA[2].props.id,
      teamA_4: props.teamA[3].props.id,
      teamB_1: props.teamB[0].props.id,
      teamB_2: props.teamB[1].props.id,
      teamB_3: props.teamB[2].props.id,
      teamB_4: props.teamB[3].props.id,
      rating: finalRating
    }).then((response) => {
      console.log("Done")
    }).catch("Error")
  }


  return (
    <div className="card bg-transparent d-flex mx-auto "
      style={{
        border: "2px solid rgba(128, 128, 128, 0.5)",
        borderRadius: "10px",
        padding: "10px",
        width: "35%"
      }}>
      <div className="col " style={{
        border: "2px solid rgba(128, 128, 128, 0.5)",
        borderRadius: "10px",
        padding: "10px"
      }}>
        <div className="col"
          style={{
            height: "80px",
            marginLeft: "100px",
            marginBottom: "10px"
          }}>
          {props.teamA.map((char, key) => {
            return <label key={key}>{char}</label>
          })}
        </div>
        <div className="col"
          style={{
            height: "80px",
            marginLeft: "100px",
            marginBottom: "10px"
          }}>
          {props.teamB.map((char, key) => {
            return <label key={key}>{char}</label>
          })}
        </div>
        <label className="text-white"
          style={{
            marginLeft: "150px",
          }}>
          Team Rating :{teamRating}
        </label>
      </div>
      <div>
        <label
          className='text-white'
          style={{
            marginLeft: "100px",
            marginRight: "3px",
          }}>
          Stars Earned
        </label>
        <input
          style={{
            marginBottom: "10px",
            marginTop: "20px",
            marginRight: "3px",
            width: "10%",
            borderRadius: "5px",
          }}
          type="text"
          className="stars"
          onChange={(event) => {
            setStars(event.target.value);
          }}
        />
        <Button className="btn btn-secondary"
          variant="secondary"
          style={{
            fontSize: "0.62rem",
            padding: "6px 10px",
            borderRadius: "5px",
            marginTop: "-5px"
          }}
          onClick={finalRatingValue}
        >Done</Button>
      </div>
      <div>
        <label
          className='text-white'
          style={{
            marginLeft: "100px",
            marginRight: "3px",
          }}>
          Final Rating : {finalRating}
        </label>
      </div>
      <div>
        {historyCheckBoolean && (
          <Button className="btn btn-secondary"
            variant="secondary"
            style={{
              marginLeft: "190px",
              fontSize: "0.62rem",
              padding: "6px 10px",
              borderRadius: "5px",
              marginTop: "10px"
            }}
            onClick={addToHistory}
          > Add to History</Button>
        )}
      </div>
    </div>
  )
}
