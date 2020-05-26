import React from 'react';
import GlobalStyle from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
