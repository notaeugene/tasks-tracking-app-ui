import { observer } from 'mobx-react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayout from './components/layout/DefaultLayout/DefaultLayout';
import Homepage from './pages/Homepage/Homepage';
import RootStore from './state/rootStore';

export type AppProps = {
  rootStore: RootStore;
};

const App = observer(({ rootStore }: AppProps) => {
  const { uiStore, projectsStore, projectDetailsStore } = rootStore;

  return (
    <Router>
      <DefaultLayout rootStore={rootStore}>
        <Switch>
          <Route exact path="/">
            <Homepage
              uiStore={uiStore}
              projectsStore={projectsStore}
              projectDetailsStore={projectDetailsStore}
            />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  );
});

export default App;
