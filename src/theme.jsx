import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#2C4F85' },
    secondaray: { main: '#E52909' },
    background: { default: '#fafafa', paper: '#fff' }
  },
  typography: {
    fontFamily: 'Montserrat'
  },
});

export default responsiveFontSizes(theme);