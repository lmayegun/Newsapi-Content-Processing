import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';

import store from './store';
import history from '@history';
import AppContext from './AppContext';
import {defaultMuiTheme} from './configs/themeConfig';
import {SwitchRoute} from './route-system';
import SearchHeader from 'app/pages/shared-components/SearchHeader';
// import logo from './logo.svg';
import '../styles/App.css';

function App() {
  return (
    <AppContext.Provider>
      <Provider store={store}>
        <ThemeProvider theme={defaultMuiTheme()}>
          <Router history={history}>
            <SearchHeader />
            <SwitchRoute />
          </Router>
        </ThemeProvider>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
