import styled from 'styled-components';

import icon3Img from '../../assets/icon3.svg';
import icon4Img from '../../assets/icon4.svg';

export const Container = styled.section`
  background-color: #121214;
  padding-top: 222px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Information = styled.div`
  padding-bottom: 80px;

  div:first-of-type {
    max-width: 448px;

    h2 {
      font-size: 48px;
      color: #e1e1e6;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      line-height: 1.5;
      margin-top: 40px;
    }
  }

  div:not(:first-of-type) {
    max-width: 402px;
    margin-left: auto;
    position: relative;

    p {
      font-size: 36px;
      color: #7159c1;
      line-height: 1.5;
      z-index: 2;

      b {
        color: #04d361;
        font-weight: normal;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: -35%;
      right: -15%;
      width: 555px;
      height: 555px;
      background: url(${icon4Img}) center no-repeat;
    }
  }
`;

export const StepByStep = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepOne = styled.div``;

export const StepTwo = styled.div`
  margin-top: -125px;
  margin-left: auto;
`;

export const StepThree = styled.div``;

export const Step = styled.div`
  position: relative;
  z-index: 2;
  max-width: 505px;
  padding-left: 96px;

  h3 {
    font-size: 36px;
    color: #e1e1e6;

    span {
      position: absolute;
      font-weight: 700;
      top: -71px;
      left: 0;
      font-size: 192px;
      z-index: -1;
      color: #202024;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    padding-top: 40px;

    b {
      color: #04d361;
    }
  }

  p:not(:last-child) {
    padding-bottom: 80px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #7159c1;
  }
`;
