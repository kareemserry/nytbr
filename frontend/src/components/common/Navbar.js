import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
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
                            <Link className="nav-link" to="#">
                                {" "}
                                BOOKS
                </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                {" "}
                                FAVOURITES
                </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
