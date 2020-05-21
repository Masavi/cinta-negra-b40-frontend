import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Login from './views/Login';
import Logout from './views/Logout';
import Home from './views/Home';
import Signup from './views/Signup';
import BookForm from './views/BookForm';

export default
  <React.Fragment>
    <Route
      exact path="/"
      component={ Home } />
    <Route
      exact path="/logout"
      component={ Logout } />
    <Route
      exact path="/login"
      component={ Login } />
    <Route
      exact path="/signup"
      component={ Signup } />
    <Route
      exact path="/book-form"
      component={ BookForm } />
  </React.Fragment>
;