import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageKit from './components/layout/PageKit/PageKit';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Router>
      <PageKit>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </PageKit>
    </Router>
  );
}

export default App;
