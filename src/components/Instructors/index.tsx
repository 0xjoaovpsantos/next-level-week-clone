import React from 'react';

import { Container, Content } from './styles';

import iconSvg from '../../assets/icones.svg';

import instructor1Img from '../../assets/instructor1.png';
import instructor2Img from '../../assets/instructor2.png';

const Instructors: React.FC = () => (
  <Container>
    <Content>
      <div>
        <div>
          <h2>
            Com quem você vai aprender?
            <img src={iconSvg} alt="" />
          </h2>
          <div>
            <p>
              Programação é um universo vasto e em constante transformação. Por
              isso as oportunidades são enormes, mas a jornada nem sempre é
              clara. E muitos devs acabam dando voltas sem nunca atingir os
              objetivos.
            </p>
            <p>
              Então a melhor forma de acelerar sua evolução é ter alguém que já
              tenha passado por esse caminho e possa te guiar.
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={instructor1Img} alt="Diego Fernandes" />
            </div>
            <h3>Diego Fernandes</h3>
            <h4>CTO na Rocketseat</h4>
            <p>
              Programador há 10 anos e apaixonado pelas melhores tecnologias de
              desenvolvimento back-end, front-end e mobile, vai ser o
              responsável por guiar os devs através do ecossistema da OmniStack.
            </p>
          </div>
          <div>
            <div>
              <img src={instructor2Img} alt="Mayk Brito" />
            </div>
            <h3>Mayk Brito</h3>
            <h4>Expert na Rocketseat</h4>
            <p>
              Programador há 12 anos e apaixonado por ajudar quem está dando os
              primeiros passos, vai ser o reponsável por guiar os alunos que
              desejam entrar no desenvolvimento web com o pé direito.
            </p>
          </div>
        </div>
      </div>
    </Content>
  </Container>
);

export default Instructors;
