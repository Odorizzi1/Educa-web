import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Criar um tema personalizado com a fonte desejada
const theme = createTheme({
  typography: {
    fontFamily: 'Rubik,Roboto, Arial, sans-serif', // Substitua com a sua fonte desejada
  },
});

// Renderizar a aplicação com ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
