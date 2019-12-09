import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { backendUrl } from '../../api';

export default class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            user: localStorage.getItem('user')
        };
    }

    logout = async () => {
        const res = await fetch(`${backendUrl}/users/signout`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (res.status == 200) {
            localStorage.clear();
            this.setState({
                user: localStorage.getItem('user')
            })
        }
        const json = await res.json();
        if (json.error) {
        } else {
            console.log(json);
        }
    }

    onClick = () => {
        this.logout();
    }

    componentDidMount() {
        this.setState({})
    }


    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        NYT's BESTREADS
          </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    {" "}
                                    BOOKS
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favourites">
                                    {" "}
                                    FAVOURITES
                </Link>

                            </li>
                            {this.state.user !== null ? <li className="nav-item nav-link" onClick={this.onClick} style={{ cursor: 'pointer' }}> {" "}
                                LOGOUT

                            </li> : <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        {" "}
                                        LOGIN
                </Link>
                                </li>}

                        </ul>
                    </div>
                </div>
            </nav >

        )
    }
}
