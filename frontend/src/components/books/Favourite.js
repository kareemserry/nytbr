import React, { Component } from "react";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const MyCard = styled(Card)({
  maxWidth: 345
});
const MyMedia = styled(CardMedia)({
  height: 300
});

export default class Favourite extends Component {
  constructor() {
    super();
  }

  render() {
    const book = this.props.book;
    return (
      <MyCard style={{ padding: 5 }}>
        <CardActionArea
          onClick={event => {
            window.location.href = book.previewLink;
          }}
        >
          <MyMedia image={book.imageLinks.thumbnail} title={book.title} />
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
              {book.subtitle}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              style={{ textAlign: "center" }}
            >
              {book.authors.join(" - ")}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ textAlign: "justify" }}
            >
              {book.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton
          aria-label="favourite"
          onClick={event => {
            console.log("todo: remove from favourites");
          }}
        >
          <Delete />
        </IconButton>
      </MyCard>
    );
  }
}
