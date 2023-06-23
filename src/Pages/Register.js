import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CardContent, FormControl, Card } from '@material-ui/core';
import axios from '../plugins/axios';
import bg from '../Images/background.png';
import logo from '../Images/blaze_1.png';



function Register() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [feedback, setFeedback] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >

<div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '-30px' }}>
        <img src={logo} alt="Blaze Logo" style={{ width: '250px'}} />
        </div>
        <h1 style={{ marginTop: '30px', color: '#ffffff', fontSize: 50 }}>Welcome to Blaze!</h1>
     
      <FormControl >
        <TextField
            style={{ margin: '10px', width: '400px' }} // Adjust the width here
            variant="outlined"
            label="Email"
            value={login.email}
            InputProps={{ style: { borderRadius: '20px', backgroundColor: '#FFFFFF' } }}
            inputProps={{ size: 'small' }}
          onChange={(event) => {
            setLogin({
              ...login,
              email: event.target.value,
            });
          }}
        />
        <TextField
         style={{ margin: '10px', width: '400px' }} // Adjust the width here
         variant="outlined"
         type='password'
         label="Password"
         value={login.password}
         InputProps={{ style: { borderRadius: '20px', backgroundColor: '#FFFFFF' } }}
         inputProps={{ size: 'small' }}
          onChange={(event) => {
            setLogin({
              ...login,
              password: event.target.value,
            });
          }}
        />

        <Button
          style={{ borderRadius: '20px', backgroundColor: '#266AB3', margin: 5, marginTop: 25 }}
          variant="contained"
          size="large"
          onClick={() => {
            axios
              .post('accounts/token/login', login)
              .then(async (response) => {
                console.log(response.data);
                localStorage.setItem('token', JSON.stringify(response.data.auth_token));
                setFeedback('');
                navigate('/Profile');
              })
              .catch((error) => {
                setFeedback('Invalid login. Please try again');
              });
          }}
        >
          Login
        </Button>
        <Button
          color="success"
          style={{ borderRadius: '20px', backgroundColor: '#266AB3', margin: 5, }}
          variant="contained"
          size="large"
          onClick={() => {
            navigate('/FRegister')
          }}
        >
          Create an Account
        </Button>
        
      </FormControl>

      <h3 style={{ color: 'white', fontSize: 13, fontStyle: 'italic', display: 'flex', alignItems: 'center' }}>
        {feedback}{' '}
      </h3>
    </div>
  );
}

export default Register;

