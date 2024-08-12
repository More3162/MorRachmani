import { Button } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material'


export default function EventComponent2() {


    const handelEdit = (event) => {
        console.log(event.target.value);
    }


    return (
        <div>

            <Button variant='contained' onClick={(e) => { console.log(e.target.innerText) }} >
                Click Me
            </Button>
        </div >
    )
}
