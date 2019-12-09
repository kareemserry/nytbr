import React, { Component } from 'react'
import { GridList, GridListTile, Container } from '@material-ui/core';
import Regular from './Regular';
import Spinner from '../common/Spinner'
import { backendUrl } from '../../api';

export default class Books extends Component {
    constructor() {
        super();
        this.state = {
            fiction: [],
            nonFiction: []
        };
    }
    getBooks = async () => {
        const res = await fetch(`${backendUrl}/books/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await res.json();
        if (json.error) {
            console.log(json.error);
        } else {
            this.setState({
                fiction: json.fiction,
                nonFiction: json.nonFiction
            })
            console.log(json);
        }
    }
    componentDidMount() {
        this.getBooks();
    }
    render() {
        return (
            this.state.fiction.length > 0 ? <div>
                {this.state.fiction.length > 0 ? <h3 style={{ textAlign: 'center' }}>FICTION</h3> : <div />}
                <GridList className="mt-5 mb-5" style={{ justifyContent: 'center' }}>
                    {this.state.fiction.map((book, index) => (
                        <Regular key={index} book={book} />
                    ))}
                </GridList>
                {this.state.nonFiction.length > 0 ? <h3 style={{ textAlign: 'center' }}>NON-FICTION</h3> : <div />}
                <GridList className="mt-5 mb-5" style={{ justifyContent: 'center' }}>
                    {this.state.nonFiction.map((book, index) => (
                        <Regular key={index} book={book} />
                    ))}
                </GridList>
            </div> : <Spinner />

        )
    }
}
