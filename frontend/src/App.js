import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Footer />
    </Router>
  );
}

export default App;
