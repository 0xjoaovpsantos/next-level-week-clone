import React from 'react';

import {
  Container,
  Content,
  Information,
  StepByStep,
  Step,
  StepOne,
  StepTwo,
  StepThree,
} from './styles';

const Description: React.FC = () => (
  <Container>
    <Content>
      <Information>
        <div>
          <h2>Mas afinal, o que é o próximo nível?</h2>
          <p>
            A jornada do dev é longa e feita de etapas, e a melhor forma de
            acelerar sua evolução é entender exatamente em que nível você está e
            focar na sua próxima etapa.
          </p>
        </div>
        <div>
          <p>
            A primeira coisa que você precisa saber sobre a jornada do dev é que
            <br />
            <b>o aprendizado é contínuo e sempre haverá um próximo nível.</b>
          </p>
        </div>
      </Information>
      <StepByStep>
        <StepOne>
          <Step>
            <h3>
              <span>01</span>
              Legal
              <br />e o que é um dev?
            </h3>
            <p>
              É a pessoa responsável por transformar linhas de código em
              soluções que tornam a vida das pessoas mais fácil, como um
              aplicativo de transporte por exemplo.
            </p>
            <p>
              <b>Dev é a abreviação de developer</b>: uma palavra que não tem
              gênero. Ou seja, um dev pode ser tanto um programador quanto uma
              programadora.
            </p>
          </Step>
        </StepOne>
        <StepTwo>
          <Step>
            <h3>
              <span>02</span>
              E esse evento
              <br />é pra mim?
            </h3>
            <p>
              Nessa edição o foco do NLW será o universo JavaScript: a
              tecnologia essencial para todos os devs que trabalham ou pretendem
              trabalhar com web.
            </p>
            <p>
              <b>Se você é apaixonado por código</b>, está em busca de evolução
              e não se cansa de aprender coisas novas todos os dias, esse evento
              é para você.
            </p>
          </Step>
        </StepTwo>
        <StepThree>
          <Step>
            <h3>
              <span>03</span>
              O que eu vou levar
              <br />
              desse evento?
            </h3>
            <p>
              Aprendizado prático de novas ferramentas, hacks para sua carreira
              e um trabalho incrível para colocar no seu portfólio.
            </p>
            <p>
              Lembre que certificados não acrescentam nada na sua carreira,
              <b>
                a coisa mais importante que você pode levar daqui é o
                conhecimento.
              </b>
            </p>
          </Step>
        </StepThree>
      </StepByStep>
    </Content>
  </Container>
);

export default Description;
