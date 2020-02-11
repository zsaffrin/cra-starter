import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../themes';
import GlobalStyle from './GlobalStyle';
import { H } from '../ui';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <div>
      <H l={1}>App generated with cra-starter</H>
    </div>
  </ThemeProvider>
);

export default App;
