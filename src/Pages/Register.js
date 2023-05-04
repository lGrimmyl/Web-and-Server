import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CardContent,  FormControl,Card } from '@material-ui/core';
import axios from '../plugins/axios';

function Register(){
    const navigate = useNavigate()
    const [login,setLogin] = useState({
        'email' : '',
        'password' : '',
    })
    const [feedback, setFeedback] = useState('')
    const [errorPassword,setErrorPassword] = useState ('')
    
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#425c59', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginTop: '150px', color: '#ffcc9f', fontSize: 50 }}>IV OF HEARTS</h1>
            <Card style={{ width: '400px', height: '300px', backgroundColor: "#4b6966" }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FormControl fullWidth>
                        <TextField 
                            style={{margin:5}}
                            variant='outlined' 
                            label='Email'
                            value={login.email}
                            InputProps={{style: { color: 'white' }  }}
                            onChange={(event)=>{
                                setLogin({
                                    ...login,
                                    email: event.target.value   
                                })
                            }}>
                        </TextField>
                        <TextField 
                            style={{margin:5, color: 'white'}}
                            variant='outlined' 
                            label='Password'
                            value={login.password}
                            type='password'
                            InputProps={{style: { color: 'white' }  }}
                            onChange={(event)=>{
                                setLogin({
                                    ...login,
                                    password: event.target.value   
                                })
                            }}>
                        </TextField>

                        <Button 
                            style={{backgroundColor: '#ffcc9f', margin:5, marginTop: 25}}
                            variant='contained'
                            size='Large'
                            onClick={()=> {
                                axios.post('accounts/token/login',login).then(async (response) => {
                                    console.log(response.data) 
                                    localStorage.setItem('token', JSON.stringify(response.data.auth_token))
                                    setFeedback('')
                                    navigate('/Profile')
                                }).catch((error)=>{
                                    setFeedback('Invalid login. Please try again')
                                })
                                
                            }}> 
                            Login
                        </Button>
                        <Button 
                            color='success'
                            style={{backgroundColor: '#ffcc9f', margin:5}}
                            variant='contained'
                            size='Large'
                            onClick={()=>{}}>
                            Create Account
                        </Button>
                    </FormControl>

                    <h3 style={{ color: 'white', fontSize: 13, fontStyle: 'italic', display: 'flex', alignItems: 'center'}} >{feedback} </h3>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register;
