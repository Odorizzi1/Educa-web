import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik,Roboto, Arial, sans-serif, Poppins, Montserrat',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
