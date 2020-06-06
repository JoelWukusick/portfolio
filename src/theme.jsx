import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#2D79B8' },
    secondary: { main: '#E52909' },
    background: { default: '#fafafa', paper: '#fff' }
  },
  typography: {
    fontFamily: 'Montserrat'
  },
});

export default responsiveFontSizes(theme);