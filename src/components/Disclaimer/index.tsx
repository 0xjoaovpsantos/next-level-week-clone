import React from 'react';

import { Container, Content } from './styles';

import disclaimerImg from '../../assets/disclaimer.svg';
import disclaimer2Img from '../../assets/disclaimer2Img.svg';

const Disclaimer: React.FC = () => (
  <Container>
    <Content>
      <img src={disclaimerImg} alt="Disclaimer" />
      <div>
        <h2>Disclaimer</h2>
        <p>
          <b>
            Ao final desse evento nós abrimos as inscrições para turmas dos
            nossos bootcamps pagos.
          </b>
        </p>
        <img src={disclaimer2Img} alt="Disclaimer" />
        <p>
          Mas o NLW não é uma amostra ou parte dos bootcamps: o conteúdo desse
          evento é completo, inédito e exclusivo.
        </p>
        <p>
          O NLW existe para entregar o que a gente tem de melhor para toda a
          comunidade antes de colocar toda a nossa energia e foco nos nossos
          alunos.
        </p>
      </div>
    </Content>
  </Container>
);

export default Disclaimer;
