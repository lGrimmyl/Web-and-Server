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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Card style={{ width: '400px' }}>
                <CardContent>
                    <FormControl fullWidth>
                        <TextField 
                            style={{margin:5}}
                            variant='outlined' 
                            label='Email'
                            value={login.email}
                            onChange={(event)=>{
                                setLogin({
                                    ...login,
                                    email: event.target.value   
                                })
                            }}>
                        </TextField>
                        <TextField 
                            style={{margin:5}}
                            variant='outlined' 
                            label='Password'
                            value={login.password}
                            onChange={(event)=>{
                                setLogin({
                                    ...login,
                                    password: event.target.value   
                                })
                            }}>
                        </TextField>

                        <Button 
                            style={{margin:5}}
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
                            style={{margin:5}}
                            variant='contained'
                            size='Large'
                            onClick={()=>{}}>
                            Create Account
                        </Button>
                    </FormControl>

                    <h3>{feedback}</h3>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register;
