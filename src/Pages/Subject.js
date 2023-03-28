import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({



    container: {
        height: '100vh',
        width: '100vw',

    },

    containerngablue: {
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '20%',
        top: 0,
        backgroundColor: '#D9E8FF',
    },
    container2: {

        height: '30vhw',
        width: '40vh',
        backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    label1: {
        position: 'absolute',
        fontSize: 50,
        color: '#0077B6',
        fontWeight: 500,
        left: 15,

    },
    label2: {
        position: 'absolute',
        fontSize: 15,
        color: '#0077B6',
        paddingTop: 78,
        left: 15,

    },
    minicon: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 15,
        width: '90%',
        height: '30%',
        top: 110,
    },
    label3: {
        fontSize: 28,
        fontWeight: 500,
        textAlign: 'center',
        position: 'relative',
        left: 40,
        top: 10,
        flexDirection: 'row'
    },
    bookicon: {
        position: 'relative',
        top: 11,
        left: 25,


    }, schedulebutton: {
        position: 'absolute',
        left: 100,
        backgroundColor: '#0077B6',
        width: '25%',
        height: '5%',
        top: 650,
        color: 'white',
        fontSize: 30,
        borderRadius: 5,
        border: 'none',
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        '&:hover': {
            backgroundColor: '#034162',
        }
    },
    sectionbutton: {
        position: 'absolute',
        backgroundColor: '#0077B6',
        width: '25%',
        height: '5%',
        top: 650,
        color: 'white',
        fontSize: 30,
        borderRadius: 5,
        border: 'none',
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        left: '50%',
        transform: 'translateX(-50%)',
        '&:hover': {
            backgroundColor: '#034162',
        },



    },
    backbutton: {
        position: 'absolute',
        right: 100,
        backgroundColor: '#0077B6',
        width: '25%',
        height: '5%',
        top: 650,
        color: 'white',
        fontSize: 30,
        borderRadius: 5,
        border: 'none',
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        '&:hover': {
            backgroundColor: '#034162',
        }
    },
    imgsaubos: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: '30%',
        width: '80%'

    }





});



function Subject() {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.container}>


                <img src="https://i.ibb.co/pJzvNpj/imgbr2.png" className={classes.imgsaubos} />
                <Button  onClick={()=> navigate("/Schedule")} className={classes.schedulebutton}>Check Schedule</Button>
                <Button onClick={()=> navigate("/Section")}className={classes.sectionbutton}>Check Section</Button>
                <Button onClick={()=> navigate("/Menu")} className={classes.backbutton}>Back to Menu</Button>

                <div className={classes.containerngablue}>
                    <label className={classes.label1}>Subject</label>
                    <label className={classes.label2}>School Year 2022-2023</label>


                    <div className={classes.minicon}>
                        <MenuBookIcon className={classes.bookicon} />
                        <label className={classes.label3}>BS Information Technology</label>

                    </div>

                </div>

            </div>
        </div>
    );
}



export default Subject;
