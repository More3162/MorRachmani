import React from 'react'
import { Button } from "@mui/material";
import { TextField } from "@mui/material";


export default function EventComponents() {

    const handleClick = (name) => {
        console.log("Hello World!");
    }; // this is a function

    const handleClickData = (name) => {
        console.log("The Name is: " + name);
    }; // this is a function

    const handleEventClick = () => { };



    return (
        <div>
            <Button variant='contained' onClick={() => handleClick}>
                Click
            </Button>

            <Button variant='contained' onClick={() => handleClickData("Mor")}>
                Print My name
            </Button>

            <Button variant='contained' onClick={handleEventClick}>
                Get the Event
            </Button>

            <TextField onChange={(e) => console.log(e.target.value)}
                onMouseOver={() => { console.log("hello you just hover!") }}
            />

        </div>

    )
}
