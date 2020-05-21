import React, { Fragment } from 'react';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer/Footer';

// Contexts
import AuthContextProvider from './contexts/AuthContext';
import HTTPContextProvider from './contexts/httpContext';

// Misc
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <Fragment>
      <Router>
        <AuthContextProvider>
          <HTTPContextProvider>
            <Navigation />
            <Container className="mt-4">
              <Switch>
                { Routes }
              </Switch>
            </Container>
            <Footer />
          </HTTPContextProvider>
        </AuthContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;
