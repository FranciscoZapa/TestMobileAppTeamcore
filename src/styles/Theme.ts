// 1. Import the extendTheme function
import {extendTheme} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: '#002b5a',
    800: '#003165',
    700: '#003670',
    600: '#1a4a7e',
    500: '#335e8d',
  },
  text: {
    white: '#ffffff',
  },
  background: {
    varyDark: '#2E4453',
    dark: '#002635',
    light: '#e6ebf1',
  },
  general: {
    lightBlue: '#005B9A',
    grayBlue: '#B8D9E9',
  },
};
export const theme = extendTheme({colors: newColorTheme});

export const mainColor: string = '#003670';
