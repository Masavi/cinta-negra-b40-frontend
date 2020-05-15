import React, { Fragment } from 'react';

// Views
import Login from './views/Login';
import Home from './views/Home';

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
