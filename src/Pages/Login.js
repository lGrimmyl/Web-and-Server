import React, { useState } from 'react';

/*import axios from 'axios';*/
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@material-ui/core/TextField';
import { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';


const useStyles = makeStyles({
    container: {
    height: '100vh', // Set the height to 50% of the viewport height
    width: '100vw',
    
  },
  container1: {
    backgroundColor: '#0077B6', // Add your own styling to container 1
    flex: 1,
    position: 'relative'

  },
 
  container2: {
    backgroundColor: '#E5E5E5', // Add your own styling to container 2
  },

  image1: {
    bottom: 100,
    left: 4,
    width: '100%',
    height: '75%',
    top: 10,
    position: 'relative'
  
    
  },
  image2: {
    width: '100%',
    height: '20%',
    
    left: 0,
    bottom: 0,
    position: 'absolute'
  

    
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
      color: '#fff',
      '&:hover': {
        backgroundColor: '#034162',
      
    }
    },
  });


 


function Login() {
  const classes = useStyles();
  

  const [accessKey, setAccessKey] = useState('');
  const [loginError, setLoginError] = useState();
  const [value, setValue] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value === 'valid-access-key') {
      setLoginError(false)
      setAccessKey('')
    } else {
      setLoginError(true)
      setAccessKey('Incorrect Access key')
    }
  };


  return (


            <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12} md={6} className={classes.container1}>
              
                <img src="https://i.ibb.co/CtLJwM2/c3.png" className={classes.image1}/>
                <img src="https://i.ibb.co/fxbL54R/c2.png" className={classes.image2}/>
              
              
            </Grid>
            <Grid item xs={12} md={6} className={classes.container2}>
            <form onSubmit={handleSubmit}>
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
                <button className={classes.button} type="submit"> Login </button>

              
        </form>
            </Grid>
          </Grid>

  );
}




export default Login;