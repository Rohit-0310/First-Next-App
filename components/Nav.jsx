import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';


const Nav = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link href='/'>
                        <Button color="inherit">Home Page</Button>
                    </Link>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Registration</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default Nav