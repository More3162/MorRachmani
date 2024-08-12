import { Box } from '@mui/material'
import React from 'react'

export default function MyMessage({ children }) {

    return (
        <div>
            <Box sx={{ backgroundColor: "red", padding: 2, borderRadius: 2, borderBlock: "black", width: "25%" }}>
                {children}
            </Box>
        </div>
    )
}
