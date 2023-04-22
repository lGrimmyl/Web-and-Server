import React from 'react';
import{ makeStyles } from '@material-ui/core/styles';
import { fontWeight } from '@mui/system';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Button, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    
        container: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fff'
    },
    headercontainer: {
        height: '8%',
        width: '40%',
        top: 100,
        left: 100,
        backgroundColor: '#D9E8FF',
        position: 'absolute'
    },
    headertxt1: {
        fontSize: 20,
        position: 'absolute', // add position property
        textAlign: 'center',

        left: 20,
        top: 30,
        flexDirection: 'row'
        
            
    },
    headertxt2: {
        fontSize: 18,
        position: 'absolute', // add position property
        top: 85,
        left: 55,           // move label to left
        fontWeight: 400,
        color: '#0077B6'

    },
    
    headertxt3: {
        fontSize: 40,
        fontWeight: 500,
        textAlign: 'center',
        position: 'relative',
        left: 100,
        top: 200,
        flexDirection: 'row'
        
            
       

    },
    contlabel1: {
        fontSize: 25,
        fontWeight: 700,
        color: '#0077B6',
        position: 'absolute',
        left: 25,
        top: 150,

    },
    buttonlogin: {
        bottom: 80,
        position: 'absolute',
        right: 60,
        color: '#fff',
        backgroundColor: '#0077B6',
        border: 'none',
        width: '20%',
        padding: 6,
        fontSize: 25,
        letterSpacing: 1,
        fontWeight: 500,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        '&:hover': {
            backgroundColor: '#034162',
          
        }

    },
    botcontainer: {
        top:450,
        left: 100,
        position: 'absolute',
        width: '30%',
        height: '60%',
        backgroundColor: '#fff'
    },
    label1: {
        position: 'absolute',
        top: 7,
        left: 15,
        fontSize: 20,
        fontWeight: 400,
        
    },
    cont1: {
        position: 'absolute',
        top: 40,
        left: 10,
      
        height: '6%',
        width: '70%',
        backgroundColor: '#5279F4',
        
    },
    label11: {
        positon: 'absolute',
        top: 10,
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 400,
        color: '#fff'
    },
    label2: {
        position: 'absolute',
        top: 76,
        left: 10,
        fontSize: 20,
        fontWeight: 400,
        
    },
    cont2: {
        position: 'absolute',
        top: 110,
        left: 10,
      
        height: '6%',
        width: '70%',
        backgroundColor: '#5279F4',
        
    },
    label22: {
        positon: 'absolute',
        top: 10,
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 400,
        color: '#fff'
    },
    label3: {
        position: 'absolute',
        top: 150,
        left: 10,
        fontSize: 20,
        fontWeight: 400,
        
    },
    cont3: {
        position: 'absolute',
        top: 189,
        left: 10,
      
        height: '6%',
        width: '70%',
        backgroundColor: '#5279F4',
        
    },
    label33: {
        positon: 'absolute',
        top: 10,
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 400,
        color: '#fff'
    },
    label4: {
        position: 'absolute',
        top: 230,
        left: 10,
        fontSize: 20,
        fontWeight: 400,
        
    },
    cont4: {
        position: 'absolute',
        top: 265,
        left: 10,
      
        height: '6%',
        width: '70%',
        backgroundColor: '#5279F4',
        
    },
    label44: {
        positon: 'absolute',
        top: 10,
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 400,
        color: '#fff'
    },
    image1: {
        top: 150,
        right: 50,
        position: 'absolute',
        height: '50%',
        width: '40%'
    },
    ell1: {
        position: 'absolute',
        bottom: 0,
        width: '8%',
        height: '8%',
        right: 500

    },
    ell2: {
        position: 'absolute',
        bottom: 100,
        width: '8%',
        height: '8%',
        right: 400

    },
    ell3: {
        position: 'absolute',
        bottom:50,
        width: '8%',
        height: '8%',
        right: 240

    },
    ell4: {
        position: 'absolute',
        bottom: 0,
        width: '8%',
        height: '8%',
        right: 80
    },
    ell5: {
        position: 'absolute',
        bottom: 100,
        width: '8%',
        height: '8%',
        right: 20


    },
    button: {
        backgroundColor: '#10C5A5',
        width: 500,
        bottom: 60,
        right: 80,
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
    }


  
});
 
function Confirmation({ term, campus, registrationID, registeredDate }) {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate("/Menu");
    };
    return (
        <div>
            <div className={classes.container}>
               <img src="https://i.ibb.co/7GwGTGz/twesra.png" className={classes.image1}/> 
               <img src="https://i.ibb.co/8Mxx4DM/Ellipse-18.png" className={classes.ell1}/> 
               <img src="https://i.ibb.co/cNNN0vs/Ellipse-17.png" className={classes.ell2}/> 
               <img src=" https://i.ibb.co/zr1pDRG/Ellipse-21.png" className={classes.ell3}/> 
               <img src=" https://i.ibb.co/3BJvsJ6/Ellipse-20.png" className={classes.ell4}/> 
               <img src=" https://i.ibb.co/N3n8wnv/Ellipse-19.png" className={classes.ell5}/>  

               <Button variant='contained' onClick={handleSubmit} className={classes.button} type="submit"> Back to Main Menu </Button>

                <div className= {classes.headercontainer}>
                    <label className= {classes.headertxt1}> Successfully Enrolled </label>
                    
                </div>
            
                         <div className= {classes.minicontainer}>
                            <label className = {classes.headertxt3}>
                               Student is now Enrolled!
                            </label>
                        </div>
                </div>


                <div className={classes.botcontainer}>
                        <label className={classes.label1}>Academic term</label>
                        
                    <div className={classes.cont1}>
                        <label className={classes.label11}>{term}</label>
                        <TextField
                            variant='standard'
                            type='Read Only'
                            defaultValue={'2022-2023 2nd Semester'}
                            color='info'
                            focused
                            InputProps={{
                                readOnly: true,
                              }}>  
                            </TextField>
                    </div>
                        <label className={classes.label2}>Campus</label>
                    <div className={classes.cont2}>
                        <label className={classes.label22}>{campus}</label>
                        <TextField
                            variant='standard'
                            type='Read Only'
                            defaultValue={'USTP CDO Campus'}
                            color='info'
                            focused
                            InputProps={{
                                readOnly: true,
                              }}>  
                            </TextField>
                    </div>
                        <label className={classes.label3}>Registration ID</label>
                    <div className={classes.cont3}>
                        <label className={classes.label33}>{registrationID}</label>
                        <TextField
                            variant='standard'
                            type='Read Only'
                            defaultValue={'2020303541'}
                            color='info'
                            focused
                            InputProps={{
                                readOnly: true,
                              }}>  
                            </TextField>
                    </div>
                        <label className={classes.label4}>Registered Date</label>
                    <div className={classes.cont4}>
                        <label className={classes.label44}>{registeredDate}</label>
                        <TextField
                            variant='standard'
                            type='Read Only'
                            defaultValue={'4/22/2023 9:48:05'}
                            color='info'
                            focused
                            InputProps={{
                                readOnly: true,
                              }}>  
                            </TextField>
                    </div>
            </div>
        </div>
  )
}

export default Confirmation;



