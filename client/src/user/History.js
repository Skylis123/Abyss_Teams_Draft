import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react'
import CharactesHistory from '../characters/CharactesHistory';



export default function History(props) {
  let navigate = useNavigate();
  const navigateUserPage = () => {
    navigate(`/user/${props.username}`);
  }
  let [historyList, setHistoryList] = useState([]);
  let [currentUser, setCurrentUser] = useState(props.username)
  let [searchUserAux, setSearchUserAux] = useState('');

  useEffect(() => {
    axios.post('http://localhost:4000/user/historyList', {
      username: currentUser
    }).then((response) => {
      setHistoryList(response.data)
    }).catch('Error')
  }, [currentUser])

  const searchUser = () => {
    setCurrentUser(searchUserAux);
  }

  return (
    <div>
      <div>
        <Button className="btn btn-secondary" variant="secondary" onClick={navigateUserPage}>Back</Button>
      </div>
      <div div className="col-md-6"
        style={{
          width: "600px",
          height: "450px",
          overflow: "auto",
          marginRight: "140px",
          marginLeft: "400px",
          border: "2px solid rgba(128, 128, 128, 0.5)",
          borderRadius: "10px",
          padding: "10px"
        }}>
        {historyList.map((element, key) => (
          <div key={key}
            style={{
              marginLeft: "120px",
              marginBottom: "20px"
            }}
          >
            <div>
              <lable
                className="text-white">
                {element['username']}
              </lable>
              <lable className="text-white"
                style={{
                  marginLeft: "20px",
                }}>
                {element['date']}
              </lable>
              <lable className="text-white"
                style={{
                  marginLeft: "20px",
                }}>
                Team Rating : {element['rating']}
              </lable>
              <CharactesHistory
                element={element}
              />
            </div>
          </div>
        ))}
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
      <div>
        <input
          style={{
            marginLeft: '650px',
            marginTop: '20px',
            width: '100px',
            height: '30px'
          }}
          type="text"
          className="form-control"
          onChange={(event) => {
            setSearchUserAux(event.target.value);
          }} />
        <Button
          className="btn btn-secondary"
          variant="secondary"
          onClick={searchUser}
          style={{
            marginLeft: '646px',
            marginTop : '5px'
          }}
        >Search User
        </Button>
      </div>
    </div>
  )
}
