import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, AppBar, Toolbar, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@material-ui/core';
import axios from '../plugins/axios';
import bg from '../Images/bg1.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the ArrowBackIcon from Material-UI

function Organizations() {
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
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>ORGANIZATIONS</Typography>
          <Button color="inherit"onClick={() => {navigate('/EventUp')}}>Events</Button>
          <Button color="inherit"onClick={() => {navigate('/CampusMap')}}>Campus Map</Button>
          <Button color="inherit"onClick={() => {navigate('/Chat')}}>Chat</Button>
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
      
<Card style={{ width: 1350, padding: 20, marginBottom: 30, borderRadius: 30, background: '#F7BA7B' }}>
    <CardContent>
      {/* Add content inside the card */}
      <Typography variant="h4" component="h1" style={{ marginBottom: 20 }}>
        ORGANIZATION 1
      </Typography>
      <Typography variant="body1" component="p">
        Sample of Organization
      </Typography>
    </CardContent>
    </Card>

    <Card style={{width: 1350, padding: 20, marginBottom: 30, borderRadius: 30, background: '#FA7470' }}>
    <CardContent>
      {/* Add content inside the card */}
      <Typography variant="h4" component="h1" style={{ marginBottom: 20 }}>
        ORGANIZATION 2
      </Typography>
      <Typography variant="body1" component="p">
        Sample of Organization
      </Typography>
    </CardContent>
    </Card>

    <Card style={{ width: 1350, padding: 20, marginBottom: 30, borderRadius: 30, background: '#467FD7' }}>
    <CardContent>
      {/* Add content inside the card */}
      <Typography variant="h4" component="h1" style={{ marginBottom: 20 }}>
        ORGANIZATION 3
      </Typography>
      <Typography variant="body1" component="p">
        Sample of Organization
      </Typography>
    </CardContent>
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

export default Organizations;
