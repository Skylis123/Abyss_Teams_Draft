import { useState, useEffect } from 'react'
import StartPage from './StartPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import UserPage from './UserPage';
import Characters from './Characters';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logInStatus, setLogInStatus] = useState("");
  const [charactersCount, setCharactersCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:4000/charactersCount')
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
        <Route path="/userpage/:id" element={
          <UserPage
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            logInStatus={logInStatus}
            setLogInStatus={setLogInStatus}
          />}
        />
        <Route path="/characters" element={
          <Characters
            username={username}
            setUsername={setUsername}
            charactersCount={charactersCount}
          />}
        />
      </Routes>
    </Router>
  )
}

export default App;