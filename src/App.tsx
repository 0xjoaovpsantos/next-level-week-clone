import React from 'react';
import GlobalStyle from './styles/global';

import Apresentation from './components/Apresentation/';
import About from './components/About';
import Methods from './components/Methods';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Apresentation />
    <About />
    <Methods />
  </>
);

export default App;
