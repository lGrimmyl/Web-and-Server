import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, AppBar, Toolbar, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@material-ui/core';
import axios from '../plugins/axios';
import bg from '../Images/bg1.png';
import bgc from '../Images/map.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the ArrowBackIcon from Material-UI

function Chat() {
  const [opacity, setOpacity] = useState(0.5); // Adjust the opacity value as needed
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Handle back button click
    navigate(-1); // Navigates back to the previous page using the react-router-dom's useNavigate hook
  };

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
      <AppBar position="static" style={{ backgroundColor: `rgba(43, 89, 162, ${opacity})`, height: '80px' }}>
        <Toolbar>
          <Button color="inherit" startIcon={<ArrowBackIcon />} onClick={handleBackClick}> </Button>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>Chat</Typography>
          <Button color="inherit" onClick={() => {navigate('/EventUp')}}>Events</Button>
          <Button color="inherit"onClick={() => {navigate('/Organizations')}}>Organizations</Button>
          <Button color="inherit"onClick={() => {navigate('/CampusMap')}}>Campus Map</Button>
        </Toolbar>
      </AppBar>

      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
<Card style={{
      width: 1250,
      height: 550,
      padding: 20,
      backgroundColor: `rgba(43, 89, 162, ${opacity})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <CardContent>
      <Typography variant="h4" component="h1" style={{ color: 'white', fontSize: 50 }}>
        No Active Users
      </Typography>
      <Typography variant="h4" component="h1" style={{ color: 'white', fontSize: 25 }}>
        Under Maintenance
      </Typography>
      <Typography variant="body1" component="p"></Typography>
    </CardContent>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
    <TextField
        variant="outlined"
        placeholder="Type your message"
        style={{ width: 1150, marginRight: 10 }}/>
      <Button variant="contained" color="primary">
        Send
      </Button>
    </div>
  </Card>   
  </div> 

      <h3
        style={{
          color: 'white',
          fontSize: 13,
          fontStyle: 'italic',
          display: 'flex',
          alignItems: 'center',
        }}
      ></h3>
    </div>
  );
}

export default Chat;
