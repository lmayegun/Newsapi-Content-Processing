import React from 'react';
import {Router} from 'react-router-dom';
import history from '@history';

import AppContext from './AppContext';
import {SwitchRoute} from './route-system';
import logo from './logo.svg';
import '../styles/App.css';

function App() {
  return (
    <AppContext.Provider>
      <Router history={history}>
        <SwitchRoute />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
