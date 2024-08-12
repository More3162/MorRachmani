import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function MyUseStateComponent() {
    const [toggle, setToggle] = useState(true);

    const [count, setCount] = useState(0);

    const handelClickPlus = () => {
        setCount((prev) => prev + 1);
    }
    const handelClickMinus = () => {
        setCount((prev) => prev - 1);
    }

    const [text, setText] = useState("");

    return (
        <div>
            <Button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >Click me
            </Button>

            <Typography >{toggle ? "Hello" : "Bye"}</Typography>

            <div>
                <Typography>{count}</Typography>
                <Button onClick={handelClickPlus}>+</Button>
                <Button onClick={handelClickMinus}>-</Button>
            </div>

            <div>
                <TextField onChange={(e) => setText(e.target.value)} />
                <Button variant="contained" color="primary" onClick={() => console.log(text)}>Click Me</Button>
            </div>

        </div>
    );
}
