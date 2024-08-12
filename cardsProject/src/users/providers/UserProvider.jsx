import { Typography } from '@mui/material';
import React, { useState } from 'react'
import { createContext } from 'react';
import { useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [user, setUser] = useState({ firstName: "Mor" })

    return (
        <div>
            <UserContext.Provider value={user}>
                {children}
                {user ? <Typography>Hello {user.firstName}</Typography> : null}
            </UserContext.Provider>
        </div>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useData must be used within a Provider')
    }
    return context
}
