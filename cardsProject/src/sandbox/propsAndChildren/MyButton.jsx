import { Button } from "@mui/material";
import React from "react";
export default function MyButton({ children }) {
    return (
        <Button
            sx={{
                color: "white",
                backgroundColor: "#4caf50",
                "&:hover": { backgroundColor: "black" },
            }}
        >
            {children}
        </Button>
    );
}