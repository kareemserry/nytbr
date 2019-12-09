import React, { Component } from "react";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { backendUrl } from '../../api';

const MyCard = styled(Card)({
  maxWidth: 345
});
const MyMedia = styled(CardMedia)({
  height: 300
});

export default class Regular extends Component {
  constructor() {
    super();
  }


  addToFavourites = async () => {
    const favourites = {
      isbn: this.props.book.isbns[0].isbn13,
    };
    const body = JSON.stringify(favourites);
    const res = await fetch(`${backendUrl}/books/fav`, {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body
    });
    if (res.status === 400) {
      var json = await res.json();
      console.log(json);
    } else {

    }
  }

  onClick() {
    this.addToFavourites();
  }

  render() {
    const book = this.props.book;
    return (
      <MyCard style={{ padding: 5 }}>
        <CardActionArea
          onClick={event => {
            window.location.href = book.amazon_product_url;
          }}
        >
          <MyMedia image={book.book_image} title={book.title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textAlign: "center" }}
            >
              {book.title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              style={{ textAlign: "center" }}
            >
              {book.author}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ textAlign: "justify" }}
            >
              {book.description}
            </Typography>
            <Typography
              gutterBottom
              variant="h4"
              style={{ textAlign: "center" }}
            >
              <br></br>
              {book.rank}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton
          aria-label="favourite"
          onClick={event => {
            this.onClick();
          }}
        >
          <Favorite />
        </IconButton>
      </MyCard>
    );
  }
}
