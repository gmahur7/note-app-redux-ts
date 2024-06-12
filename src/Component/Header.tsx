import React, { FunctionComponent } from 'react'
import { AppBar,Toolbar, Typography } from '@mui/material'
import logo from '../Images/logo.jpg'

const Header: FunctionComponent = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <img src={logo} alt="" id="headerlogo" />
                <Typography>Make Your Own Notes</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header