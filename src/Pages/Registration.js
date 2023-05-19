
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Subject from './Subject';
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
  const handleSubmit = async (event) => {
 
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var idNumber = document.getElementById("idNumber").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
  
    if (firstName === "" || lastName === "" || idNumber === "" || email === "" || phoneNumber === "") {
      alert("Please fill in all fields");
      return false;
    }
    
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      alert("First Name should only contain letters");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      alert("Last Name should only contain letters");
      return false;
    }
    
    
    if (idNumber.length < 10) {
      alert("Invalid ID Number");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Invalid Email Address");
      return false;
    }
    
    if (phoneNumber.length < 11) {
      alert("Invalid Phone Number");
      return false;
    }
    else
      navigate('/Subject')
    return true;
  }
 
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
                id="firstName"
                label="First Name"
                required
                placeholder="Enter Your First Name"
                multiline
                type="text"
                className={classes.textField1}
            />

            <TextField
                required
                id="lastName"
                label="Last Name"
                placeholder="Enter Your Last Name"
                multiline
                type="text"
                className={classes.textField2}
            />
            <TextField
                required
                id="idNumber"
                label="ID Number"
                type="number"
                placeholder="Enter Your ID Number"
                multiline
                className={classes.textField3}
                        />
            <TextField
                required
                id="email"
                label="Email"
                type="text"
                placeholder=" Enter Your Email"
                multiline
                className={classes.textField4}
                    />
            <TextField
                required
                id="phoneNumber"
                label="Phone Number"
                placeholder=" Enter Your Phone Number"
                type="number"
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