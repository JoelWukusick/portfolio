import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import { CssBaseline } from '@material-ui/core';
import theme from './theme.js';
import { ThemeProvider } from '@material-ui/core/styles';
import Main from './Main.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Main />
        </ThemeProvider>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));