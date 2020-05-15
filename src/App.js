import React, { Fragment } from 'react';

// Views
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';

// Components
import Navigation from './components/Navigation';

// Misc
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
