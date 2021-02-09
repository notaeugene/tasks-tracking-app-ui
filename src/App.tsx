import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageKit from './components/PageKit/PageKit';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <PageKit>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </PageKit>
  );
}

export default App;
