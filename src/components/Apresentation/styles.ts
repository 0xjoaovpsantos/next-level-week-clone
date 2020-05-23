import styled from 'styled-components';

import backgroundImage from '../../assets/background_apresentation.svg';

export const Container = styled.section`
  height: 100vh;
  background-color: #121214;
  overflow: hidden;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 872px;
    height: 872px;
    top: -23%;
    right: -14%;
    transition: height 0.4s;
    transition: width 0.4s;
    background: url(${backgroundImage}) no-repeat;
  }

  @media only screen and (max-width: 960px) {
    &::after {
      width: 258px;
      height: 258px;
      top: -8%;
      right: -3%;
      background-size: cover;
    }
  }
`;

export const Information = styled.div`
  max-width: 620px;
  width: 100%;
`;
