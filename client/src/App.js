import { useState, useEffect } from 'react'
import StartPage from './StartPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import UserPage from './user/UserPage';
import Characters from './characters/Characters';
import Draft from './draft/Draft';
import History from './user/History';
import CharactersDetail from './characters/CharactersDetail';
import IndividualCharacterId from './characters/IndividualCharacterId';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logInStatus, setLogInStatus] = useState("");
  const [charactersCount, setCharactersCount] = useState(0);
  const [userUnlockedCharacters, setUserUnlockedCharacters] = useState([]);
  const [individualCharacterId, setIndiviualCharacterId] = useState(0);

  useEffect(() => {
    fetch('http://localhost:4000/characters/Count')
      .then(response => response.json())
      .then(data => {
        setCharactersCount(data);
      })
      .catch(error => console.log(error));
  }, []);



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/authentication" replace={true} />} />
        <Route path="/authentication" element={
          <StartPage
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            logInStatus={logInStatus}
            setLogInStatus={setLogInStatus}
          />}
        />
        <Route path="/user/:username" element={
          <UserPage
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            logInStatus={logInStatus}
            setLogInStatus={setLogInStatus}
            userUnlockedCharacters={userUnlockedCharacters}
            setUserUnlockedCharacters={setUserUnlockedCharacters}
          />}
        />
        <Route path="/user/:username/characters/" element={
          <Characters
            username={username}
            setUsername={setUsername}
            charactersCount={charactersCount}
          />}
        />
        <Route path="/user/:username/draft/" element={
          <Draft
            username={username}
            setUsername={setUsername}
            charactersCount={charactersCount}
            userUnlockedCharacters={userUnlockedCharacters}
            setUserUnlockedCharacters={setUserUnlockedCharacters}
          />}
        />
        <Route path="/user/:username/history/" element={
          <History
            username={username}
            setUsername={setUsername}
          />}
        />
        <Route path="/user/:username/charactersDetail/" element={
          <CharactersDetail
            username={username}
            setUsername={setUsername}
            charactersCount={charactersCount}
            setCharactersCount={setCharactersCount}
            individualCharacterId={individualCharacterId}
            setIndiviualCharacterId={setIndiviualCharacterId}

          />}
        />
        <Route path="/user/:username/individualCharacterId/" element={
          <IndividualCharacterId
            individualCharacterId={individualCharacterId}
            username = {username}
          />}
        />
      </Routes>
    </Router>
  )
}

export default App;