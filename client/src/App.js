import { useState, useEffect } from 'react'
import StartPage from './StartPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import UserPage from './user/UserPage';
import Characters from './characters/Characters';
import Draft from './draft/Draft';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logInStatus, setLogInStatus] = useState("");
  const [charactersCount, setCharactersCount] = useState(0);
  const [userUnlockedCharacters, setUserUnlockedCharacters] = useState([]);
  
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
            userUnlockedCharacters = {userUnlockedCharacters}
            setUserUnlockedCharacters = {setUserUnlockedCharacters}
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
            userUnlockedCharacters = {userUnlockedCharacters}
            setUserUnlockedCharacters = {setUserUnlockedCharacters}
          />}
        />
      </Routes>
    </Router>
  )
}

export default App;