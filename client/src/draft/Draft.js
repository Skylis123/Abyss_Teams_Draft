import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import CharactersDraft from '../characters/CharactersDraft';
import { Button } from 'react-bootstrap';
import DraftCompletedTeams from './DraftCompletedTeams';



export default function Draft(props) {
  let navigate = useNavigate();
  let [randomCharacterList, setRandomCharacterList] = useState([]);
  let [restart, setRestart] = useState(false)
  let [counter, setCounter] = useState(1);
  let [teamA, setTeamA] = useState([]);
  let [teamB, setTeamB] = useState([]);

  const navigateUserPage = () => {
    navigate(`/user/${props.username}`);
  }

  const restartFunction = () => {
    setRestart(!restart);
    setTeamA([]);
    setTeamB([]);
    setCounter(1);
  }

  useEffect(() => {
    setRandomCharacterList(props.userUnlockedCharacters)
  }, [props.userUnlockedCharacters, restart]);

  // useEffect(() => {
  //   console.log(restart);
  //   console.log(counter);
  // }, [restart]);


  return (
    <div>
      <div>
        <Button className="btn btn-secondary" variant="secondary" onClick={navigateUserPage}>Back</Button>
        <Button className="btn btn-secondary" variant="secondary" onClick={restartFunction}>Restart</Button>
      </div>
      <div>
        {counter <= 8 ? (
          <CharactersDraft
            randomCharacterList={randomCharacterList}
            setRandomCharacterList={setRandomCharacterList}
            counter={counter}
            setCounter={setCounter}
            teamA={teamA}
            setTeamA={setTeamA}
            teamB={teamB}
            setTeamB={setTeamB}
          />
        ) : <DraftCompletedTeams
          username={props.username}
          setUsername={props.setUsername}
          teamA={teamA}
          setTeamA={setTeamA}
          teamB={teamB}
          setTeamB={setTeamB}
        />}

      </div>
    </div>
  )
}


