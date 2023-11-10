import React, { useState } from 'react';

/*import axios from 'axios';*/
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import Menu from './Menu';
import { Route,Routes,useNavigate } from 'react-router-dom';
import logo from '../Images/blaze_1.png';


const useStyles = makeStyles({
    container: {
    height: '100vh',
    width: '100vw',
  },
    label1: {
      top: 350,
      left: 50,
      color: 'rgba(0, 0, 0, 0.4)',
      width: '100%',
      alignItems: 'center',
      position: 'relative',
      '& .MuiInputBase-root': {
        opacity: 0.5,
        width: '58ch',
        display: 'flex'
      },
      '& .MuiSvgIcon-root': {
        marginRight: 10,
      },
    },
  
    button: {
      position: 'relative',
      top: 380,
      left: 50,
      fontFamily: 'Raleway',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      border: 'none',
      padding: 10,
      fontSize: 20,
      fontWeight: 5,
      boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
      width: '88%',
      backgroundColor: '#0077B6',
      '&:hover': {
        backgroundColor: '#034162',
    }
    },
  });
function Login() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [accessKey, setAccessKey] = useState('');
  const [loginError, setLoginError] = useState();
  const [but, setBut] = useState(true);
  const [value, setValue] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value === 'valid-access-key') {
      setLoginError(false)
      setAccessKey('')
      setBut(false)
      navigate("/Menu");
    } else {
      setLoginError(true)
      setAccessKey('Incorrect Access key')
      setBut(true)
    }
  };
  return (
            <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12} md={6} className={classes.container1}>
              
               <img src="https://i.ibb.co/PWfdt0h/ustplogo.png" className={classes.image1}/>
               <img src="https://i.ibb.co/Gsr8sYH/btwv.png" className={classes.image2}/>
              
            </Grid>
            <Grid item xs={12} md={6} className={classes.container2}>

            <div className={classes.label1}>
            <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <LockOpenIcon/>
                  </Grid>
                  
                  <TextField
                    id='Key'
                    label= 'Access Key' 
                    required
                    value={value}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    error={loginError}
                    helperText={accessKey}
                />
                  
              </Grid>
                    </div>
                    
                <Button
                variant='contained'
                onClick={handleSubmit}
               disabled={!value}
                className={classes.button}> Login </Button>
              

            </Grid>
          </Grid>

  );
}
export default Login;