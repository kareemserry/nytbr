import React, { Component } from "react";
import { styled } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from "@material-ui/core/Snackbar";
import { backendUrl } from "../../api";

export default class LinkDiscord extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      message: ""
    };
  }

  async tryLinkDiscord() {
    const res = await fetch(`${backendUrl}/discord`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ discordID: this.props.match.params.id })
    });
    if (res.status == 401) {
      console.log(401);
      this.setState({
        message: "You must be logged in first!",
        error: true
      });
      return;
    }
    if (res.status == 400) {
      const json = await res.json();
      this.setState({
        error: true,
        message: json.error
      });
      return;
    }
    if (res.status == 200) {
      this.setState({
        error: false,
        message: "Discord linked! You can now use all the discord commands."
      });
    }
  }

  componentDidMount() {
    this.tryLinkDiscord();
  }

  render() {
    return (
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "10px",
          color: `${this.state.error ? "#C00" : "#0C0"}`
        }}
      >
        {this.state.message}
      </h1>
    );
  }
}
