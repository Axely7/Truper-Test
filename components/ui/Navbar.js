import { AppBar, Toolbar, Typography } from '@mui/material'
import { UserContext } from '../../contexts/UserContext'
import React, { useContext } from 'react'

export const Navbar = () => {

    const user = useContext(UserContext);
    console.log(user);
  

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <Typography variant='h6'>{ user.name }</Typography>
        </Toolbar>
    </AppBar>
  )
}
