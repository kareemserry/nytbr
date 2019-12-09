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
import LinkDiscord from "./components/auth/LinkDiscord.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/linkDiscord/:id" component={LinkDiscord} />
      <Route exact path="/" component={Books} />
      <Route exact path="/favourites" component={Favourites} />
      <Footer />
    </Router>
  );
}


export default App;
