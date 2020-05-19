import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';

const Logout = (props) => {
  localStorage.removeItem('token');
  alert('Succesful logout');
  return props.history.push("/");
}

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
  </React.Fragment>
;