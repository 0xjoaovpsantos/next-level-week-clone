import React from 'react';
import GlobalStyle from './styles/global';

import Apresentation from './components/Apresentation/';
import About from './components/About';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Apresentation />
    <About />
  </>
);

export default App;
