import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import StorageIcon from '@mui/icons-material/Storage';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
const useStyles = makeStyles({



    container: {
        alignItems: 'center',
        height: '100vh',
        width: '100%'
    },

    containerngablue: {
        position: 'absolute',
        width: '70%',
        height: 513,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#D9E8FF',
        borderRadius: 33,
    },
    accessDataContainer: {
        display: 'flex',
        alignItems: 'center',

    },

    accessDataButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: 500,
        height: 60,
        top: 100,
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#FFFFFF',
        border: 'none',
        background: '#0077B6',
        fontSize: 20,
        borderRadius: 5,
        paddingLeft: 15,
    },
    accessDataIcon: {
        position: 'absolute',
        left: 35,
        fontSize: 30,
    },
    RegistrationButton: {
        position: 'absolute',
        width: 500,
        height: 60,
        left: '50%',
        transform: 'translateX(-50%)',
        top: 240,
        color: '#FFFFFF',
        border: 'none',
        background: '#0077B6',
        fontSize: 20,
        borderRadius: 5,
        paddingLeft: 15,
    },
    PersonAddIcon: {
        position: 'absolute',
        left: 35,
        fontSize: 30
    },
    logout: {
        color: '#fff',
        bottom: 80,
        width: 200,
        height: 30,
        right: 50,
        backgroundColor: '#0077B6',
        fontSize: 20,
        borderRadius: 5,
        border: 'none',
        position: 'absolute'

    },
    headertext: {
        fontSize: 40,
        position: 'absolute',
        top: 10,
        left: '50%',
        color: '#0077B6',
        transform: 'translateX(-50%)',


    },
    paratext: {
        fontSize: 18,
        position: 'absolute',
        top: 80,
        left: '50%',
        color: '#0077B6',
        transform: 'translateX(-50%)',
        textAlign: 'center'


    },
    bordersaubos: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    firstimg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 650
    },
    secondimg: {
        position: 'absolute',
        bottom: 0,
        left: 5,
        height: 550,
        width: '100%'
    },
    thirdimg: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 650
    }


});



function Menu() {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.container}>
                <h1 className={classes.headertext}> What would you like to access? </h1>
                <p className={classes.paratext}> You can check the number of students enrolled in a specific subject in the “Access Data” menu or proceed with registering in the “Registration Portal” menu.</p>
                <img src="https://i.ibb.co/qk5v8zZ/wwwaaa-1.png" className={classes.firstimg} />
                <img src="https://i.ibb.co/9r6M4MR/wwwaaa-4.png" className={classes.secondimg} />
                <img src="https://i.ibb.co/ZdMWPms/wwwaaa-5.png" className={classes.thirdimg} />

                <div className={classes.containerngablue}>
                    <Button onClick={()=> navigate("/Subject")} className={classes.accessDataButton}>
                        <StorageIcon className={classes.accessDataIcon} /> Access Data
                    </Button>

                    <Button onClick={()=> navigate("/Registration")} className={classes.RegistrationButton}>
                        <PersonAddIcon className={classes.PersonAddIcon} /> Registration Portal
                    </Button>
                    <Button onClick={()=> navigate("/")} className={classes.logout}>Logout</Button>
                    <img src="https://i.ibb.co/NTQP85D/Rectangle-42.png" className={classes.bordersaubos} />
                </div>


                
            </div>
        </div>
    );
}



export default Menu;