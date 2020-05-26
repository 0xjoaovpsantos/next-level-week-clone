import React from 'react';

import Apresentation from '../../components/Apresentation';
import About from '../../components/About';
import Methods from '../../components/Methods';
import Pillars from '../../components/Pillas';
import Instructors from '../../components/Instructors';
import Company from '../../components/Company';
import Guests from '../../components/Guests';
import Description from '../../components/Description';
import Disclaimer from '../../components/Disclaimer';
import Footer from '../../components/Footer';

const Home: React.FC = () => (
  <>
    <Apresentation />
    <About />
    <Methods />
    <Pillars />
    <Instructors />
    <Company />
    <Guests />
    <Description />
    <Disclaimer />
    <Footer />
  </>
);

export default Home;
