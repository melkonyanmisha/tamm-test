import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link as MuiLink} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {observer} from "mobx-react-lite";

const Navbar = ({store}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <MuiLink component={RouterLink} to="/posts" variant="body2" sx={{flexGrow: 1, color: '#fff'}}>
                        {store.isAuth && 'Posts'}
                    </MuiLink>
                    {store.isAuth && <Button onClick={() => store.logout()} color="inherit">Logout</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default observer(Navbar);
