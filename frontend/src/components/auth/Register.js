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
import { runInThisContext } from 'vm';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            password2: "",
            emailError: "",
            passwordError: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateData = () => {
        console.log(this.state.confirmPasswordError);
        if (this.state.email === '') {
            this.setState({
                emailError: 'empty'
            })
        }
        else {
            if (!this.validateEmail(this.state.email)) {
                this.setState({
                    emailError: 'invalid'
                })
            }
            else {
                this.setState({
                    emailError: ''
                })
            }
        }
        if (this.state.password === '') {
            this.setState({
                passwordError: 'empty'
            })
        }
        else {
            if (this.state.password.length < 6) {
                this.setState({
                    passwordError: 'less'
                })
            }
            else {
                this.setState({
                    passwordError: ''
                })
            }
        }
    }

    async onSubmit(e) {
        e.preventDefault();

        console.log(env);
        const newUser = {
            email: this.state.email,
            password: this.state.password,
        };

        this.validateData();
        if (this.state.emailError === '' && this.state.passwordError === '') {
            const body = JSON.stringify(newUser);
            const res = await fetch(`${backendUrl}/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: body
            });
            const json = await res.json();
            if (json.error) {
                if (res.status == 409) {
                    this.setState({
                        emailError: 'used'
                    })
                }
            } else {
                this.props.history.push("/login");
            }
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
                                    error={this.state.emailError !== ""}
                                    helperText={this.state.emailError === "empty" ?
                                        "Email Can't be Empty!" : this.state.emailError === "invalid" ?
                                            'Invalid Email!' : this.state.emailError === 'used' ? 'Email Already Used' : ''}
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
                                    error={this.state.passwordError !== ""}
                                    helperText={this.state.passwordError === "empty" ?
                                        "Password Can't be Empty!" : this.state.passwordError === "less" ?
                                            'Password must be 6 characters at least!' : ''}
                                    autoComplete="current-password"
                                    value={this.state.password}
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
