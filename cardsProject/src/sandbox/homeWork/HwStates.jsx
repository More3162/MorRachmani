import { Button, Divider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function HwStates() {

    const [text, setText] = useState("");

    const [toggleText, setToggleText] = useState(true);

    const [myList, setMyList] = useState([]);
    const [addTxt, setAddTxt] = useState("");



    return (
        <div>

            <div>
                <TextField value={text} onChange={(e) => setText(e.target.value)} />
                <Button variant="contained" color="primary" onClick={() => console.log(text)}>Click Me</Button>
            </div>
            <Divider></Divider>
            <div>
                {toggleText && <Typography sx={{ mt: 5 }} >Hello</Typography>}
                {/*                 <Typography sx={{ mt: 5, display: toggleText ? "block" : "none" }} >
                    Hello
                </Typography> */}
                <Button onClick={() => setToggleText((prev) => !prev)}>Show Text</Button>
            </div>
            <Divider></Divider>
            <div>
                <TextField sx={{ mt: 5 }}
                    value={addTxt}
                    onChange={(e) => setAddTxt(e.target.value)}>

                </TextField>
                <Button sx={{ mt: 5 }}
                    onClick={() => {
                        setMyList(prev => [...prev, addTxt]);
                        setAddTxt("")
                    }}>
                    Add</Button>

                <Button sx={{ mt: 5 }}
                    onClick={() => {
                        setMyList([]);
                    }}>
                    Clear</Button>

                <ul>
                    {myList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div >
            <Divider></Divider>

            <div>
                <TextField></TextField>
                <Button></Button>
            </div>

        </div >
    )
}
