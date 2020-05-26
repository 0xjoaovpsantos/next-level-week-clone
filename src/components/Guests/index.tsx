import React from 'react';

import { Container, Content } from './styles';

import guestsImg from '../../assets/guests.svg';
import icon2Img from '../../assets/icon2.svg';

const Guests: React.FC = () => (
  <Container>
    <Content>
      <img src={guestsImg} alt="Guests" />
      <div>
        <h2>Convidados especiais em breve!</h2>
        <img src={icon2Img} />
      </div>
    </Content>
  </Container>
);

export default Guests;
