import React from 'react';

import { Container, Content } from './styles';

import companyLogo from '../../assets/rocketseat.svg';

const Company: React.FC = () => (
  <Container>
    <Content>
      <div>
        <h2>Sobre a Rocketseat</h2>
        <img src={companyLogo} alt="Rocketseat logo" />
      </div>
      <div>
        <div>
          <h3>8 mil</h3>
          <p>Alunos treinados nos bootcamps</p>
        </div>
        <div>
          <h3>173 mil</h3>
          <p>Alunos iniciados nos cursos gratuitos</p>
        </div>
        <div>
          <h3>50 mil</h3>
          <p>Membros na comunidade aberta</p>
        </div>
        <div>
          <h3>330 mil</h3>
          <p>Devs impactados no Brasil</p>
        </div>
      </div>
    </Content>
  </Container>
);

export default Company;
