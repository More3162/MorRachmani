import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Container } from '@mui/material'

export default function
    () {

    return (
        <div>
            <PageHeader title="Favorite Cards" subtitle="Here you can find all your favorite cards" />
            <Container sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Container sx={{ flex: 1, mr: 2 }}>
                    <h2>Favorite Cards</h2>
                    <p>Here you can find all your favorite cards</p>
                </Container>
                <Container sx={{ flex: 1 }}>
                    <img src={"/images/cardImge.png"} alt="card Imge" sx={{ width: '650px', height: '450px' }} />
                </Container>
            </Container>
        </div>
    )
}
