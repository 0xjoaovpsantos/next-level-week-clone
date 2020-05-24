import React from 'react';

import { Container, Content } from './styles';

import arrowsImg from '../../assets/arrows.svg';

const Methods: React.FC = () => (
  <Container>
    <Content>
      <img src={arrowsImg} alt="Arrows" />
      <h2>Nosso método é baseado em 3 pilares</h2>
      <div>
        <div>
          <h3>Prática</h3>
          <p>
            Existem muitas formas de estudar programação, mas só existe uma
            forma de aprender: na prática. A teoria só funciona se você souber
            onde e quando aplicar, e são as horas de código que vão te ensinar a
            tomar as melhores decisões.
          </p>
        </div>
        <div>
          <h3>Foco</h3>
          <p>
            Programação é um universo infinito, por isso ter foco é o primeiro
            passo para atingir seus objetivos. Saber onde você quer chegar e não
            se distrair com cada ferramenta que surge é a melhor forma de
            acelerar sua evolução.
          </p>
        </div>
        <div>
          <h3>Grupo</h3>
          <p>
            Para se destacar é preciso ter habilidades que vão além do código, e
            a melhor forma de dominar essas habilidades também é na prática.
            Ajudar outros devs, se posicionar e receber feedback formam o bom
            profissional.
          </p>
        </div>
      </div>
    </Content>
  </Container>
);

export default Methods;
