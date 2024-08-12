import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Button, Container } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routesModel';



export default function ErrorPage() {

    const navigate = useNavigate();

    return (
        <div>
            <PageHeader title="Error404" subtitle="Page not found" />

            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box component="img"
                    src="https://media.giphy.com/media/3o7TKz9bX9v9KzCnXK/giphy.gif"
                    alt="404"
                    sx={{
                        Width: '650px',
                        Height: '450px',
                    }}>
                </Box>
            </Container>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: '30px',
            }}>
                <Button variant="contained" color="error" href="/">Return to Home Page</Button>
                <br />
                <Button variant="contained" onClick={() => navigate("/")}>Return to Home Page</Button>
                <br />
                <Button variant="contained" onClick={() => navigate(ROUTES.FAV_CARDS)}>Return Fav Page</Button>
                <br />
                <Button variant="contained" onClick={() => navigate(ROUTES.MY_CARDS)}>Return My Card</Button>
                <br />
                <Button variant="contained" onClick={() => navigate(ROUTES.SANDBOX)}>Return to Sand Box</Button>
                <br />
                <Button variant="contained" onClick={() => navigate(ROUTES.LOGIN)}>Return to Login Page</Button>
            </Box>

        </div>

    )
}
