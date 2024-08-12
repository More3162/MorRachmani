import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import useCounter from '../hooks/useCounter';

export default function Timer() {
    const { counter, increment, handleReset } = useCounter();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isActive) return;

        const myInterval = setInterval(increment, 1000);

        return () => {
            clearInterval(myInterval);
        }
    }, [isActive])


    return (
        <div>
            <Typography>{counter}</Typography>
            <Button onClick={() => setIsActive(true)}>{isActive ? "Stop" : "Start"}</Button>
            <Button onClick={() => {
                handleReset();
                setIsActive(false);
            }}>Reset</Button>

        </div>
    )
}
