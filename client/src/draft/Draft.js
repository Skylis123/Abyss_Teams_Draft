import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import CharactersDraft from '../characters/CharactersDraft';
import { Button } from 'react-bootstrap';


export default function Draft(props) {
  let navigate = useNavigate();
  let [randomCharacterList, setRandomCharacterList] = useState([]);
  let [restart, setRestart] = useState(false)

  const navigateUserPage = () => {
    navigate(`/user/${props.username}`);
  }

  const restartFunction = () => {
    setRestart(!restart);
  }

  useEffect(() => {
    setRandomCharacterList(props.userUnlockedCharacters)
  }, [props.userUnlockedCharacters, restart]);


  return (
    <div>
      <div>
        <Button className="btn btn-secondary" variant="secondary" onClick={navigateUserPage}>Back</Button>
        <Button className="btn btn-secondary" variant="secondary" onClick={restartFunction}>Restart</Button>
      </div>
      <div>
        <CharactersDraft
          randomCharacterList={randomCharacterList}
          setRandomCharacterList={setRandomCharacterList}
          restart={restart}
          setRestart={setRestart}
        />
      </div>
    </div>
  )
}


