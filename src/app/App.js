import React from 'react';
import {Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';

import history from '@history';
import AppContext from './AppContext';
import {defaultMuiTheme} from './configs/themeConfig';
import {SwitchRoute} from './route-system';
import logo from './logo.svg';
import '../styles/App.css';

function App() {
  return (
    <AppContext.Provider>
      <ThemeProvider theme={defaultMuiTheme()}>
        <Router history={history}>
          <SwitchRoute />
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
