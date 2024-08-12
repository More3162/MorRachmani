import React from 'react'
import PageHeader from '../components/PageHeader'
import { Typography } from '@mui/material'
import { Container } from '@mui/material'




export default function AboutPage() {
    return (
        <div>
            <PageHeader title="About" subtitle="This is the about page" />
            <Typography variant="h5" component="h2"> About page content </Typography>

            <Container sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Container sx={{ flex: 1, mr: 2 }}>
                    <Typography variant="h6">About Page</Typography>
                    <Typography variant="body1" paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas, similique quos ducimus quaerat aperiam quibusdam recusandae voluptas consequuntur quam qui nam reiciendis porro? Assumenda facere esse incidunt sit illum vel qui totam praesentium corrupti. Ducimus asperiores maxime laudantium corporis nisi eligendi magni id sequi! Aliquam cupiditate, quas maxime deleniti sunt accusamus amet aut molestias, beatae nulla sequi eaque reiciendis id, iste nobis. Aliquid, blanditiis repellat molestias modi necessitatibus cum non dolor enim ullam minima recusandae deserunt! Quia odit, tempora dolore fuga assumenda atque iusto. Neque cum mollitia officiis officia sit asperiores obcaecati voluptatem reprehenderit, eos consequatur, sint vel nulla? Neque consequatur error unde enim consequuntur dolorum ea quasi sint ad vel dicta corporis atque provident beatae sunt cupiditate numquam nisi voluptatum aspernatur adipisci, et ullam recusandae? Quas pariatur modi ratione laudantium.
                    </Typography>
                </Container>
                <Container sx={{ flex: 1 }}>
                    <img src={"/images/cardImge.png"} alt="card Imge" sx={{ width: '650px', height: '450px' }} />
                </Container>



            </Container>
        </div>
    );
}
