import React from 'react'
import NavBarLink from '../../../routes/components/NavBarLink'
import { Avatar, IconButton } from '@mui/material'
import ROUTES from '../../../routes/routesModel'

export default function LogoIcon() {


    return (
        <>
            <NavBarLink to={ROUTES.ROOT}>
                <IconButton>
                    <Avatar src="/images/man.png" alt="man" />
                </IconButton>
            </NavBarLink>
        </>
    )
}
