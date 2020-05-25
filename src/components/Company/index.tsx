import React from 'react';

import { Container, Content, Grid } from './styles';

import companyLogo from '../../assets/rocketseat.svg';

const Company: React.FC = () => (
  <Container>
    <Content>
      <div>
        <h2>Sobre a Rocketseat</h2>
        <img src={companyLogo} alt="Rocketseat logo" />
      </div>
      <Grid>
        <div>
          <h3>
            <b>8</b> mil
          </h3>
          <p>Alunos treinados nos bootcamps</p>
        </div>
        <div>
          <h3>
            <b>173</b> mil
          </h3>
          <p>Alunos iniciados nos cursos gratuitos</p>
        </div>
        <div>
          <h3>
            <b>50</b> mil
          </h3>
          <p>Membros na comunidade aberta</p>
        </div>
        <div>
          <h3>
            <b>330</b> mil
          </h3>
          <p>Devs impactados no Brasil</p>
        </div>
      </Grid>
    </Content>
  </Container>
);

export default Company;
