import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import fetch from "node-fetch";
import { backendUrl, env } from '../../api';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmit(e) {
        e.preventDefault();

        console.log(env);
        const newUser = {
            email: this.state.email,
            password: this.state.password,
        };
        const body = JSON.stringify(newUser);
        const res = await fetch(`http://localhost:5000/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        });
        const json = await res.json();
        if (json.error) {
            console.log(json.error);
        } else {
            console.log(json);
        }
    }


    render() {

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '8'
                }}>
                    <Avatar className="mb-2" style={{ backgroundColor: "rgb(52,58,64)" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="mb-3">
                        Sign up
        </Typography>
                    <form style={{ width: '100%', marginTop: '3' }} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password2"
                                    label="Confirm Password"
                                    type="password"
                                    id="password2"
                                    autoComplete="confirm-password"
                                    value={this.state.password2}
                                    onChange={this.onChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.onSubmit}
                            className="mt-3"

                        >
                            Sign Up
                    </Button>
                        <Grid container justify="center" className="mt-3">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}
