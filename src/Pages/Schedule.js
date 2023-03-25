import React from 'react';
import{ makeStyles } from '@material-ui/core/styles';
import { fontWeight } from '@mui/system';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';



const useStyles = makeStyles({ 
    container: {
        height: '100vh', // Set the height to 50% of the viewport height
        width: '100vw',
        backgroundColor: '#fff'

    },
    leftcontainer: {
        height: '100%',
        width: '30%',
        backgroundColor: '#0077B6',
        position: 'absolute',
    },
    label1: {
        fontSize: 40,
        color: '#FFFFFF',
        position: 'absolute',
        left: 25,
        top: 20,
       


    },
    label2: {
        fontSize: 20,
        color: '#FFFFFF',
        position: 'absolute',
        left: 27,
        top: 85,
        opacity: 0.85
        
    },
    buttonsched: {

        height: '6%',
        width: '70%',
        left: 50,
        top: 200,
        position: 'absolute',
        boxShadow: '0 1px 1px 1px rgba(16, 197, 165, 1)',
        border: 'none',
        padding: 10,
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#10C5A5',
        fontFamily: 'Raleway',
        '&:hover': {
            backgroundColor: '#24B198',
         }
        },
    buttonsub: {
        marginTop: 100,
        height: '6%',
        width: '70%',
        left: 50,
        top: 200,
        position: 'absolute',
        boxShadow: '0 1px 1px 1px rgba(16, 197, 165, 1)',
        border: 'none',
        padding: 10,
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#10C5A5',
        fontFamily: 'Raleway',
        '&:hover': {
            backgroundColor: '#24B198',
         }
        },
     buttonback: {
        marginTop: 200,
        height: '6%',
        width: '70%',
        left: 50,
        top: 200,
        position: 'absolute',
        boxShadow: '0 1px 1px 1px rgba(16, 197, 165, 1)',
        border: 'none',
        padding: 10,
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#10C5A5',
        fontFamily: 'Raleway',
        '&:hover': {
            backgroundColor: '#24B198',
         }
        },  
     image1: {
        width: '70%',
        height: '30%',
        
        left: 24,
        bottom: 10,
        position: 'absolute'     
    }, 

    //2nd container

    containerngablue: {
        position: "absolute",
        width: "70%",
        height: '90%',
        top: "50%",
        left: "30%", // add this line to position it beside the leftcontainer
        transform: "translateY(-50%)", // add this line to center it vertically
        backgroundColor: "#D9E8FF",
        borderRadius: 33,
      },
      label3: {
        marginTop: 30,
        fontSize: 25,
        left: 10,
        position: 'absolute',
        color: '#8B8B8B'
      },
      containerngawhite: {
        position: "absolute",
        width: "67%",
        height: '75%',
        top: "50%",
        left: '32%', // add this line to position it beside the leftcontainer
        transform: "translateY(-50%)", // add this line to center it vertically
        backgroundColor: "#fff",
        borderRadius: 33,
      },
      label4: {
        marginTop: 30,
        fontSize: 25,
        left: 360,
        position: 'absolute',
        
       
      },
      label8: {
        marginTop: 30,
        fontSize: 25,
        left: 720,
        position: 'absolute',
        fontWeight: 600,
       
      },
      label5: {
        marginTop: 30,
        left: 30,
        fontSize: 20,
        position: 'absolute',
        fontWeight: 500,
        color: 'black'
    },
    label6: {
        marginTop: 30,
        left: 130,
        fontSize: 20,
        position: 'absolute',
        fontWeight: 500,
        color: 'black'
    },
    label10: {
        marginTop: 20,
        left: 330,
        fontSize: 20,
        position: 'absolute',
        fontWeight: 500,
        color: 'black'
    },
    label11: {
        marginTop: 48,
        left: 300,
        fontSize: 15,
        position: 'absolute',
        fontWeight: 500,
        color: 'black'
    },
    label9: {
        marginTop: 28,
        left: 450,
        fontSize: 20,
        position: 'absolute',
        fontWeight: 500,
        color: 'black'
    },
    label12: {
        marginTop: 28,
        left: 560,
        fontSize: 20,
        position: 'absolute',
        fontWeight: 500,
        color: 'black'
    },
    label13: {
        marginTop: 28,
        left: 760,
        fontSize: 20,
        position: 'absolute',
        fontWeight: 500,
        color: 'black'
    }
    

        
});

function Schedule() {
    const classes = useStyles(); 
  
    return (
        <div>
            <div className={classes.container}>
            <div className = {classes.leftcontainer}>
                <label className= {classes.label1}> Schedule</label>
                <label className= {classes.label2}> School Year 2022-2023</label>
    
                <button className={classes.buttonsched} type="submit"> Check Schedule </button>
                <button className={classes.buttonsub} type="submit"> Check Subject </button>
                <button className={classes.buttonback} type="submit"> Back to Menu </button>
                <img src="https://i.ibb.co/PWfdt0h/ustplogo.png" className={classes.image1}/>
                </div>
                <div className= {classes.containerngablue}>
                    <label className= {classes.label3}> Course & Section Selected: </label>
                    <label className= {classes.label4}>BS in Information Technology   -  </label>
                    <label className= {classes.label8}> IT3R5</label>
                </div>
                <div className= {classes.containerngawhite}>
                   <label className={classes.label5}> Code</label>
                   <label className={classes.label6}>  Subject Title</label>
                 <label className={classes.label9}>  Section</label>
                 <label className={classes.label10}>  Unit </label>
                 <label className={classes.label11}>  Lec Lab Credit </label>
                 <label className={classes.label12}>  Schedule & Room</label>
                 <label className={classes.label13}>  Faculty</label>

                 



                </div>
            </div>
        </div>
    );

    }
export default Schedule;