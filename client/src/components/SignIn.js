import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react-lite';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Alert, Link as MuiLink, Snackbar} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Context} from "../index";

const defaultTheme = createTheme();

const SignIn = () => {
    const store = useContext(Context);
    const [signInForm, setSignInForm] = useState({email: '', password: ''});
    const [open, setOpen] = React.useState(false);

    const onFormChange = (e) => {
        setSignInForm({...signInForm, [e.target.name]: e.target.value});
    };
    const handleClick = () => {
        if (store.error) {
            setOpen(true);
        }
    };

    const handleClose = (event) => {
        setOpen(false);
    };
    const clickHandler = async () => {
        await store.login(signInForm);
        handleClick();
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{mt: 1}}>
                        <TextField
                            onChange={onFormChange}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={onFormChange}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            onClick={clickHandler}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <MuiLink component={RouterLink} to="/sign-up" variant="body2">
                                    Don't have an account? Sign Up
                                </MuiLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                        {store.error}
                    </Alert>
                </Snackbar>
            </Container>
        </ThemeProvider>
    );
}

export default observer(SignIn);
