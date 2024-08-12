import { Box } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'
import ROUTES from '../../../routes/routesModel'
import NavBarItem from '../../../routes/components/NavBarItem'
import LogoIcon from '../logo/LogoIcon'



export default function LeftNavBar() {
    return (
        <Box>
            <LogoIcon />
            <Logo />
            <NavBarItem to={ROUTES.CARDS} label={"Cards"} />
            <NavBarItem to={ROUTES.ABOUT} label={"About"} />
            <NavBarItem to={ROUTES.SANDBOX} label={"sandbox"} />
        </Box>
    )
}
