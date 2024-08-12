import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';


export default function SignupPage() {

    const user = null;
    if (user) return <Navigate to={ROUTES.ROOT} replace />


    /*     const [data, setData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            Password: "",
        }); */

    /*     const handleChange = (e) => {
            let targetName = e.target.name;
            setData((prev) => ({ ...prev, [targetName]: e.target.value }));
        }
    
        const checkIfUserExists = () => {
            // check if user exists
            // if user exists - move to home page
            // if user does not exist - sign up
    
            useEffect(() => {
                checkIfUserExists();
            }, [data.email, data.Password]);
            return true;
        }
    
        if (checkIfUserExists(true)) {
            return <Navigate to={ROUTES.ROOT} replace />
    
        } */


    return (
        <div>
            welcome to sign up page

            {/*             <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                    label="First Name"
                    name="firstName"
                    vairant="outlined"
                    value={data.firstName}
                    onChange={handleChange}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    vairant="outlined"
                    value={data.lastName}
                    onChange={handleChange}
                />
                <TextField
                    label="email"
                    name="email"
                    vairant="outlined"
                    value={data.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    name="Password"
                    vairant="outlined"
                    value={data.Password}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary">Sign Up</Button>
            </Container> */}
        </div>
    )
}
