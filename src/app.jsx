import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import { CssBaseline } from '@material-ui/core';
import theme from './theme.jsx';
import { ThemeProvider } from '@material-ui/core/styles';
import { ContextProvider } from './Context.jsx';
import { BrowserRouter } from "react-router-dom";
import Main from './Main.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ContextProvider>
          <CssBaseline />
          <Header />
          <Main />
        </ContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('App'));