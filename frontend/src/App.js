import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Regular from "./components/books/Regular";
import Favourite from "./components/books/Favourite";
import Books from "./components/books/Books";
import Favourites from "./components/books/Favourites";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route
        exact
        path="/wip/book"
        render={props => <Regular {...props} book={tempBook} />}
      />
      <Route
        exact
        path="/wip/favourite"
        render={props => <Favourite {...props} book={tempFavourite} />}
      />
      <Route exact path="/" component={Books} />
      <Route exact path="/favourites" component={Favourites} />
      <Footer />
    </Router>
  );
}

const tempFavourite = {
  title: "The Rise of Magicks",
  subtitle: "Chronicles of The One",
  authors: ["Nora Roberts"],
  publisher: "St. Martin's Press",
  publishedDate: "2019-11-26",
  description:
    "The #1 New York Times bestselling author of Year One and Of Blood and Bone concludes her stunning new trilogy praised as “A match for end-of-the-world classics like Stephen King’s The Stand.” After the sickness known as the Doom destroyed civilization, magick has become commonplace, and Fallon Swift has spent her young years learning its ways. Fallon cannot live in peace until she frees those who have been preyed upon by the government or the fanatical Purity Warriors, endlessly hunted or locked up in laboratories, brutalized for years on end. She is determined to save even those who have been complicit with this evil out of fear or weakness—if, indeed, they can be saved. Strengthened by the bond she shares with her fellow warrior, Duncan, Fallon has already succeeded in rescuing countless shifters and elves and ordinary humans. Now she must help them heal—and rediscover the light and faith within themselves. For although from the time of her birth, she has been The One, she is still only one. And as she faces down an old nemesis, sets her sights on the enemy’s stronghold, and pursues her destiny—to finally restore the mystical shield that once protected them all—she will need an army behind her...",
  industryIdentifiers: [
    {
      type: "ISBN_13",
      identifier: "9781250123060"
    },
    {
      type: "ISBN_10",
      identifier: "1250123062"
    }
  ],
  readingModes: {
    text: true,
    image: false
  },
  pageCount: 464,
  printType: "BOOK",
  categories: ["Fiction"],
  maturityRating: "NOT_MATURE",
  allowAnonLogging: true,
  contentVersion: "1.2.2.0.preview.2",
  panelizationSummary: {
    containsEpubBubbles: false,
    containsImageBubbles: false
  },
  imageLinks: {
    smallThumbnail:
      "http://books.google.com/books/content?id=JzV9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    thumbnail:
      "http://books.google.com/books/content?id=JzV9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  language: "en",
  previewLink:
    "http://books.google.com.eg/books?id=JzV9DwAAQBAJ&printsec=frontcover&dq=isbn:9781250123060&hl=&cd=1&source=gbs_api",
  infoLink:
    "https://play.google.com/store/books/details?id=JzV9DwAAQBAJ&source=gbs_api",
  canonicalVolumeLink:
    "https://play.google.com/store/books/details?id=JzV9DwAAQBAJ"
};

const tempBook = {
  rank: 1,
  rank_last_week: 0,
  weeks_on_list: 1,
  asterisk: 0,
  dagger: 0,
  primary_isbn10: "1250123062",
  primary_isbn13: "9781250123060",
  publisher: "St. Martin's",
  description:
    "The third book in the Chronicles of the One series. Fallon Swift goes up against an old foe.",
  price: 0,
  title: "THE RISE OF MAGICKS",
  author: "Nora Roberts",
  contributor: "by Nora Roberts",
  contributor_note: "",
  book_image: "https://s1.nyt.com/du/books/images/9781250123060.jpg",
  book_image_width: 326,
  book_image_height: 495,
  amazon_product_url:
    "https://www.amazon.com/Rise-Magicks-Chronicles-One-Book-ebook/dp/B07L2QR5WD?tag=NYTBS-20",
  age_group: "",
  book_review_link: "",
  first_chapter_link: "",
  sunday_review_link: "",
  article_chapter_link: "",
  isbns: [
    {
      isbn10: "1250123038",
      isbn13: "9781250123039"
    },
    {
      isbn10: "1250123062",
      isbn13: "9781250123060"
    },
    {
      isbn10: "1531834620",
      isbn13: "9781531834623"
    },
    {
      isbn10: "1531834671",
      isbn13: "9781531834678"
    }
  ],
  buy_links: [
    {
      name: "Amazon",
      url:
        "https://www.amazon.com/Rise-Magicks-Chronicles-One-Book-ebook/dp/B07L2QR5WD?tag=NYTBS-20"
    },
    {
      name: "Apple Books",
      url:
        "http://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+RISE+OF+MAGICKS&author=Nora+Roberts"
    },
    {
      name: "Barnes and Noble",
      url:
        "http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250123060"
    },
    {
      name: "Local Booksellers",
      url: "http://www.indiebound.org/book/9781250123060?aff=NYT"
    }
  ],
  book_uri: "nyt://book/f3fe19da-a628-5da2-b24a-f8e9193e660d"
};

export default App;
