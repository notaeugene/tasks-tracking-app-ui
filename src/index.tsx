import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faBell,
  faCog,
  faSearch,
  faEllipsisV,
  faTimes,
  faCheck,
  faExclamationTriangle,
  faTrash,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from './state/rootStore';

library.add(
  faPlus,
  faBell,
  faCog,
  faSearch,
  faEllipsisV,
  faTimes,
  faCheck,
  faExclamationTriangle,
  faTrash,
  faPen
);

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <App rootStore={rootStore} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
