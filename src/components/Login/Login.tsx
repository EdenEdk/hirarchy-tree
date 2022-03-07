import React, {useState} from 'react';
import './Login.css';
import {Button, TextField, Typography} from '@mui/material';
import {encode} from '../../utils/utils';
import {getUserIdBySecret} from '../../services/Users.api';

interface LoginProps{
  loginClicked: (userId:number)=>void;
}

export function Login({loginClicked}:LoginProps){
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(){
    const userSecret = encode(userName, password);
    const userId = await getUserIdBySecret(userSecret);
    loginClicked(userId);
  }

  return (
    <div className="login">
      <Typography variant="h3">Please Login</Typography>
      <div className="login-box">
        <TextField label="Email Address" variant="outlined" onChange={(event => setUserName(event.target.value))} />
        <TextField label="Password" variant="outlined" onChange={(event => setPassword(event.target.value))} />
        <Button className="login-button" variant="outlined" onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}
