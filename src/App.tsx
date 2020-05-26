import React from 'react';
import GlobalStyle from './styles/global';

import Apresentation from './components/Apresentation/';
import About from './components/About';
import Methods from './components/Methods';
import Pillars from './components/Pillas';
import Instructors from './components/Instructors';
import Company from './components/Company';
import Guests from './components/Guests';
import Description from './components/Description';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Apresentation />
    <About />
    <Methods />
    <Pillars />
    <Instructors />
    <Company />
    <Guests />
    <Description />
  </>
);

export default App;
