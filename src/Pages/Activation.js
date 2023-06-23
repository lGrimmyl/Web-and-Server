import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import bg from '../Images/bg1.png';
import { CardContent, Container, FormControl,Card } from '@material-ui/core';
import axios from '../plugins/axios';




function Activation(){
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState('');
    const params = useParams();
    
    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Container maxWidth>
                <Grid container style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card style={{width: '400px', height: '250px', backgroundColor: "#132848"}}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <FormControl fullWidth>
                                    <h1 style={{textAlign: 'center', color: '#FFF' }}>Activate your Account</h1>   
                                    <Button 
                                        style={{backgroundColor: '#266AB3', margin:5, marginTop: 25}}
                                        variant='contained'
                                        size='large'
                                        onClick={()=> {
                                            axios.post('accounts/users/activation/',params).then(response => {
                                                    console.log('activated')
                                                    setFeedback('Your Acount has been activated')
                                                    setTimeout(function(){
                                                        navigate('/Login')
                                                    }, 3000);   
                                            }).catch((error)=>{
                                                setFeedback('The Account already activated or failed activation')
                                            })   
                                        }}
                                    >
                                        Activate Account
                                    </Button>
                                    <h3 style={{color: 'white', fontSize: 15, fontStyle: 'italic', display: 'flex', textAlign: 'center'}}>{feedback}</h3>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid> 
            </Container>
        </div>
    )
}
    
export default Activation;
