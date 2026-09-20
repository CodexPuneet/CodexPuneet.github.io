import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

// Default to night mode (dark) on initial load
if (!localStorage.getItem('app-night-mode-v2')) {
  localStorage.setItem('chakra-ui-color-mode', 'dark');
  localStorage.setItem('app-night-mode-v2', 'true');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </BrowserRouter>
);


