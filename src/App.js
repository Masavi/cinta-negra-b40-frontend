import React, { Fragment } from 'react';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer/Footer';

// Misc
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Container className="mt-4">
          <Switch>
            { Routes }
          </Switch>
        </Container>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
