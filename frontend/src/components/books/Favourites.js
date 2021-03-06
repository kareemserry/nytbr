import React, { Component } from "react";
import Spinner from "../common/Spinner";
import { GridList } from "@material-ui/core";
import Favourite from "./Favourite";
import { backendUrl } from '../../api';
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default class Favourites extends Component {
    constructor() {
        super();
        this.state = {
            books: null,
            session: localStorage.getItem("session")
        };
    }
    getFavourites = async () => {
        const res = await fetch(`${backendUrl}/books/fav/`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(res);
        if (res.status === 401) {
            this.props.history.push('/login');
        } else {
            res.json().then(json => {
                this.setState({
                    books: json
                });
                console.log(json);
            });
        }
    };
    componentDidMount() {
        this.getFavourites();
    }
    render() {
        return (<div>
            <Navbar />
            {this.state.books != null ? (
                <div>
                    {this.state.books.length > 0 ? (
                        <h3 style={{ textAlign: "center" }}>FAVOURITES</h3>
                    ) : (
                            <div />
                        )}
                    <GridList className="mt-5 mb-5" style={{ justifyContent: "center" }}>
                        {this.state.books.map((book, index) => (
                            <Favourite key={index} book={book} />
                        ))}
                    </GridList>
                </div>
            ) : (
                    <Spinner />)}
            <Footer />
        </div>
        );
    }
}
