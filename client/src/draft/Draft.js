import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import CharactersDraft from '../characters/CharactersDraft';


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
        <button className="navigateUserPage" onClick={navigateUserPage}> Back </button>
        <button className="restart" onClick={restartFunction}> Restart </button>
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
