import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: "#212121",
    lightGray: "#e4eaf0",
    
  },
  radii: {
    sm: "2px",
    md: "4px",
    lg: "8px",
  },
  
  spacing: value => `${value * 4}px`,

};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
