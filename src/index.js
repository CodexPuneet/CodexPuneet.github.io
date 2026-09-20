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

// Reset previous session's light mode cache so night mode is the default
if (!localStorage.getItem('app-night-mode-v1')) {
  localStorage.setItem('chakra-ui-color-mode', 'dark');
  localStorage.setItem('app-night-mode-v1', 'true');
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


