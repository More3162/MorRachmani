import { Box, IconButton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../providers/CustomThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function RightNavbar() {

    const { user } = useCurrentUser();

    const { isDark, toggleDarkMode } = useTheme();

    return (
        <Box
            sx={{
                display: { xs: "none", md: "inline-flex" },
                alignItems: "center",
            }}
        >
            <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            {/* אם יש לי משתמש הצג את לוג אם אין הציג את לא מחובר */}
            {user ? <Logged /> : <NotLogged />}
        </Box>
    );
}
