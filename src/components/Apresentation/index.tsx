import React from 'react';

import { Container, Content, Information } from './styles';

import logoImg from '../../assets/logo.svg';

const Apresentation: React.FC = () => (
  <Container>
    <Content>
      <Information>
        <div>
          <div>
            <img src={logoImg} alt="Logo da Next Level Week" />
            <div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <p>1 a 7 de Junho</p>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12" y2="16"></line>
                </svg>
                <p>100% online e gratuito</p>
              </div>
            </div>
          </div>
          <h1>
            Uma semana para acelerar sua evolução como dev e avançar para o
            próximo nível.
          </h1>
          <button type="button">Inscrição gratuita</button>
        </div>
      </Information>
    </Content>
  </Container>
);

export default Apresentation;
