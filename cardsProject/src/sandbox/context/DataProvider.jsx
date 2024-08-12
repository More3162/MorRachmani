import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'


/* יצירת הקונטקסט */
export const MyContext = createContext()

/* זו הפונקציה שאותה נשים בדף "סבא" */
/* הפונקציה רק מקיפה את הילד  */
export default function DataProvider({ children }) {

    /* המידע שהולך לשלוח */
    const data = {
        data1: 100,
        data2: "Hello World",
    }


    return (
        /* הגדרה שלה */
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}

/* הגדרת הוק חדש */
export const useData = () => {
    /* מביאה את המידע */
    const context = useContext(MyContext)
    /* אם אין לי מידע - האתר יקרוס */
    if (!context) {
        throw new Error('useData must be used within a Provider')
    }
    return context
}
