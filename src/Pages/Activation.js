import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CardContent, Container, FormControl,Card } from '@material-ui/core';
import axios from '../plugins/axios';




function Activation(){
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState('');
    const params = useParams();
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Container maxWidth>
                <Grid container style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card style={{ width: '400px' }}>
                            <CardContent>
                                <FormControl fullWidth>
                                    <h1 style={{textAlign: 'center'}}>Activate your Account</h1>   
                                    <Button 
                                        style={{margin:5}}
                                        variant='contained'
                                        size='large'
                                        onClick={()=> {
                                            axios.post('accounts/users/activation/',params).then(response => {
                                               if (response.status ===204) {
                                                    console.log('activated')
                                                    setFeedback('Your Acount has been activated')
                                                    setTimeout(function(){
                                                        navigate('/Login')
                                                    }, 3000);   
                                                    
                                               } else {
                                                    setFeedback('Failed Activation')
                                               }
                                            })   
                                        }}
                                    >
                                        Activate Account
                                    </Button>
                                    <h1 alignItems='center'>{feedback}</h1>
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
