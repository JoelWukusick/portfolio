import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from "react-router-dom";
import Main from './Main.jsx';
import Header from './Header.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import theme from './theme.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
          <CssBaseline />
          <Header />
          <Main />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('App'));