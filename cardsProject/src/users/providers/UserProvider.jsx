import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import { useContext } from 'react';
import { getToken, getUser } from '../services/localStorageService';

/* יצירת קנטקסט */
const UserContext = createContext();

/* יצירת פרוביידר */
export default function UserProvider({ children }) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(getToken());

    useEffect(() => {
        /* אם אין יוזר */
        if (!user) {
            const userFromLocalStorage = getUser();
            setUser(userFromLocalStorage);
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}

/* יצירת הוק מותאם אישית */
export const useCurrentUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useCurrentUser must be used within provider");
    }
    return context;
};

