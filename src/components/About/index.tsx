import React from 'react';

import { Container, Content } from './styles';

import imgAbout from '../../assets/about.svg';

const About: React.FC = () => (
  <Container>
    <Content>
      <img src={imgAbout} alt="O que é a Next Level Week?" />
      <div>
        <h2>O que é o Next Level Week?</h2>
        <p>
          O NLW é uma semana prática com muito código, desafios, networking e um
          único objetivo: te levar para o próximo nível.
        </p>
        <p>
          Através do nosso método você vai aprender novas ferramentas, conhecer
          novas tecnologias e descobrir hacks que vão impulsionar a sua
          carreira.
        </p>
        <p>
          Um evento online e totalmente gratuito que vai te ajudar a dar o
          próximo passo na sua evolução como dev.
        </p>
      </div>
    </Content>
  </Container>
);

export default About;
