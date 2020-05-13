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
      // <React.Fragment>
      //   <CssBaseline />
      //   <AppBar>
      //     <Toolbar>
      //       <Typography variant="h4">
      //         Joel Wukusick
      //     </Typography>
      //     </Toolbar>
      //   </AppBar>
      //   <main>
      //     <Container maxWidth="md">
      //       <Grid container spacing={4}>
      //         {data.map((app) => (
      //           <div>
      //             test
      //             <Card >
      //               <CardMedia
      //                 image={app.imageThumbURL}
      //                 title={`${app.name} screenshot`}
      //               />
      //               <CardContent>
      //                 <Typography gutterBottom variant='h5' component='h2'>
      //                   {app.name}
      //                 </Typography>
      //               </CardContent>
      //             </Card>
      //           </div>
      //         ))}
      //       </Grid >
      //     </Container>
      //   </main>
      // </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));