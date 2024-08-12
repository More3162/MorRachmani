import { Typography } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function LoginPage() {

    let user = null;

    if (user) {
        return <Navigate to={ROUTES.ROOT} replace />
    }


    return (
        <div>
            <Typography variant="h1">Welcome to the Login Page</Typography>


        </div>
    )
}
