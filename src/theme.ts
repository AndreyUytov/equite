import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#3F51B5',
    },
    //secondary: purple,

    secondary: {
      main: '#ffffff',
      //main: '#673ab7',
      // #4ba0d7
    },
    text: {
      primary: '#ffffff',
      secondary: '#6A7CE0',
    },
    background: {
      paper: '#171d2a',
      default: '#101724',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  //status: {
  //    danger: 'orange',
  //},
});

theme = responsiveFontSizes(theme);
export default theme;
