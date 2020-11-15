import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import {ThemeProvider, createGlobalStyle} from 'styled-components';
import colors from './theme/colors';

import Main from './components/Main';
import Topbar from './components/Topbar';
import Users from './components/Users';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.backgroundColor};
    color: ${colors.fontColor}
  }
`

function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Router>
        <div className="container">
          <Topbar />        
          <Switch>
            <Route path="/usuarios" exact>
              <Users />
            </Route>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
