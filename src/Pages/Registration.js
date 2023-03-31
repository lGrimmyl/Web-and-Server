
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  },
  containerngablue: {
    position: 'absolute',
    width: '85%',
    height: '80vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#D9E8FF',
    borderRadius: 33,
  },
  headertext: {
    fontSize: 30,
    color: '#0077B6',
    paddingLeft: 30,
    paddingTop: 30,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'

  },
  label: {
    fontSize: 20,
    color: '#001440',
    paddingLeft: 30,
    paddingTop: 40,
    fontWeight: 150,
    fontFamily: 'Raleway',

  },
  textField1: {
    backgroundColor: '#fff',
    width: 500,
    position: 'absolute',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0077B6'
    }
  },
  textField2: {
    backgroundColor: '#fff',
    width: 500,
    position: 'absolute',
    top: 30,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0077B6'
    }
  },
  textField3: {
    backgroundColor: '#fff',
    width: 500,
    position: 'absolute',
    top: 60,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0077B6'
    }
  },
  textField4: {
    backgroundColor: '#fff',
    width: 500,
    position: 'absolute',
    top: 90,
   
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0077B6'
    }
  },
  textField5: {
    backgroundColor: '#fff',
    width: 500,
    position: 'absolute',
    top: 120,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0077B6'
    }
  },
  button: { 
    backgroundColor: '#10C5A5',
    width: 500,
    top: 620,
    position: 'absolute',
    fontSize: 20,
    fontWeight: 5,
    boxShadow: '0 3px 5px 2px rgba(16, 197, 165, 1)',
    border: 'none',
    padding: 10,
    color: '#fff',
    fontFamily: 'Raleway',
    '&:hover': {
        backgroundColor: '#008870',

  },
},
  formcontainer: {
    display: 'flex',
    marginTop: 34,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 30,
    top: 180,
    zIndex: 1,
    
  },
  boyimg: {
    top: 150,
    right: 60,
    position: 'absolute',
    height: '60%',
    width: '40%'
  },
  elfirstimg: {
    top: 150,
    left: 20,
    position: 'absolute',
    height: '35%',
    width: '25%',
    zIndex: -1,
  },
  elsecimg: {
    top: 50,
    right: 8,
    position: 'absolute',
    height: '20%',
    width: '15%',
    zIndex: -1,
  },
  elthirdimg: {
    position: 'absolute',
    right: 0  ,
    bottom: 11,
    zIndex: -1,
    height: '40%',
    width: '30%',
  }


});

function Registration() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [FName, setAccessKey] = useState('');
  const [LName, AccessKey] = useState('');
  const [IDName, AccessKey2] = useState('');
  const [EName, AccessKey3] = useState('');
  const [NName, AccessKey4] = useState('');
  const [loginError, setLoginError] = useState();
  const [Fvalue, setValue] = useState("");
  const [Lvalue, Value2] = useState("");
  const [IDvalue, Value3] = useState("");
  const [Evalue, Value4] = useState("");
  const [Nvalue, Value5] = useState("");
  const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Fvalue >= 10) {
      setLoginError(false)
      setAccessKey('')
      navigate("/Menu");
    } 
    else if (Lvalue >= 10) {
      setLoginError(false)
      AccessKey('')
      navigate("/Menu");
    } 
    else if (IDvalue >= 10) {
      setLoginError(false)
      AccessKey2('')
      navigate("/Menu");
    } 
    else if (Evalue >= 10) {
      setLoginError(false)
      AccessKey3('')
      navigate("/Menu");
    } 
    else if (Nvalue >= 10) {
      setLoginError(false)
      AccessKey4('')
      navigate("/Menu");
    } 
    else {
      setLoginError(true)
      setAccessKey('Incorrect Input, Please provide a proper input')
    }
  };
  
  return (
    <div>
            <img src="https://i.ibb.co/QnCYhPm/Ellipse-14.png" className={classes.elfirstimg}/>
            <img src="https://i.ibb.co/JxwMg2Y/Ellipse-16.png" className={classes.elsecimg}/>
            <img src="https://i.ibb.co/5FLWtFQ/Ellipse-15.png" className={classes.elthirdimg}/>
      <div className={classes.containerngablue}>
        <h1 className={classes.headertext}>ADD STUDENT</h1>
        <label className={classes.label}>Enroll A New Student</label>
            <div className={classes.formcontainer}>
            <TextField
                id="outlined-textarea"
                label="First Name"
                required
                value={Fvalue}
                placeholder="Enter Your First Name"
                multiline
                type="text"
                onChange={(e) => setValue(e.target.value)}
                className={classes.textField1}
                error={loginError}
                helperText={FName}
            />

            <TextField
                id="outlined-textarea"
                label="Last Name"
                value={Lvalue}
                placeholder="Enter Your Last Name"
                multiline
                type="text"
                onChange={(e) => Value2(e.target.value)}
                className={classes.textField2}
                error={loginError}
                helperText={LName}
            />
            <TextField
                id="outlined-textarea"
                label="ID Number"
                value={IDvalue}
                type="number"
                onChange={(e) => Value3(e.target.value)}
                error={loginError}
                helperText={IDName}
                placeholder="Enter Your ID Number"
                multiline
                className={classes.textField3}
                        />
            <TextField
                id="outlined-textarea"
                label="Email"
                value={Evalue}
                type="text"
                onChange={(e) => Value4(e.target.value)}
                error={loginError}
                helperText={EName}
                placeholder=" Enter Your Email"
                multiline
                className={classes.textField4}
                    />
            <TextField
                id="outlined-textarea"
                label="Phone Number"
                placeholder=" Enter Your Phone Number"
                value={Nvalue}
                type="number"
                onChange={(e) => Value5(e.target.value)}
                error={loginError}
                helperText={NName}
                multiline
                className={classes.textField5}
                    />
                <button className={classes.button} variant='contained'
                onClick={handleSubmit}> Begin New Enrollment </button>
                <img src="https://i.ibb.co/bBcQQSv/blueboy.png" className={classes.boyimg}/>
                
                </div>
              
            </div>
            
           
           
            
           
           
        </div>
      
      );
    }
    
    export default Registration;