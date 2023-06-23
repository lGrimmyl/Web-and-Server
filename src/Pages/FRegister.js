import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CardContent, FormControl, Card } from '@material-ui/core';
import axios from '../plugins/axios';
import bg from '../Images/background.png';
import logo from '../Images/blaze_1.png';

function FRegister() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    "email": "",
    "password": "",
    "first_name": "",
    "last_name": "",
    "birthdate": "",
    "gender": ""
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
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '0px', marginBottom: '-30px' }}>
        <img src={logo} alt="Blaze Logo" style={{ width: '200px'}} />
        </div>
        <h1 style={{ marginTop: '30px', color: '#ffffff', fontSize: 50 }}>Welcome to Blaze!</h1>
      <FormControl>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              style={{ margin: '10px', width: '100%' }}
              variant="outlined"
              label="First Name"
              value={data.first_name}
              InputProps={{ style: { borderRadius: '20px', backgroundColor: '#FFFFFF' } }}
              inputProps={{ size: 'small' }}
              onChange={(event) => {
                setData({
                  ...data,
                  first_name: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ margin: '10px', width: '100%' }}
              variant="outlined"
              label="Email"
              value={data.email}
              InputProps={{ style: { borderRadius: '20px', backgroundColor: '#FFFFFF' } }}
              inputProps={{ size: 'small' }}
              onChange={(event) => {
                setData({
                  ...data,
                  email: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ margin: '10px', width: '100%' }}
              variant="outlined"
              label="Last Name"
              value={data.last_name}
              InputProps={{ style: { borderRadius: '20px', backgroundColor: '#FFFFFF' } }}
              inputProps={{ size: 'small' }}
              onChange={(event) => {
                setData({
                  ...data,
                  last_name: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ margin: '10px', width: '100%' }}
              variant="outlined"
              type='password'
              label="Password"
              value={data.password}
              InputProps={{ style: { borderRadius: '20px', backgroundColor: '#FFFFFF' } }}
              inputProps={{ size: 'small' }}
              onChange={(event) => {
                setData({
                  ...data,
                  password: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ margin: '10px', width: '100%' }}
              variant="outlined"
              label="Birthdate"
              value={data.birthdate}
              InputProps={{ style: { borderRadius: '20px', backgroundColor: '#FFFFFF' } }}
              inputProps={{ size: 'small' }}
              onChange={(event) => {
                setData({
                  ...data,
                  birthdate: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ margin: '10px', width: '100%' }}
              variant="outlined"
              label="Gender"
              value={data.gender}
              InputProps={{ style: { borderRadius: '20px', backgroundColor: '#FFFFFF' } }}
              inputProps={{ size: 'small' }}
              onChange={(event) => {
                setData({
                  ...data,
                  gender: event.target.value,
                });
              }}
            />
          </Grid>
        </Grid>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
          <Button
            style={{ borderRadius: '20px', backgroundColor: '#266AB3', margin: 5,  width: '400px', height: '50px', }}
            variant="contained"
            size="large"
            onClick={() => {
            axios
                .post('accounts/users/', data)
                .then(async (response) => {
                  console.log(response.data);
                  setFeedback("SignUp Complete. Please Confirm your acc in your email :D")
                  navigate('/Login');
                })
                .catch((error) => {
                  setFeedback('Invalid Sign Up. Please try again');
                });
            }}
          >
            Sign Up
          </Button>
        </div>
      </FormControl>

      <h3
        style={{
          color: 'white',
          fontSize: 13,
          fontStyle: 'italic',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {feedback}{' '}
      </h3>
    </div>
  );
}

export default FRegister;