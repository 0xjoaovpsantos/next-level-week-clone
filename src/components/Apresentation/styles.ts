import styled from 'styled-components';

import { shade } from 'polished';

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
  margin: auto auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  display: flex;

  &::after {
    content: '';
    position: absolute;
    width: 872px;
    height: 872px;
    top: -23%;
    right: -14%;
    transition: all 0.2s;
    z-index: -1;
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
  display: flex;
  padding-top: 40px;
  @media only screen and (max-width: 960px) {
    margin: 0 auto;
  }

  > div > h1 {
    margin-top: 80px;
    font-size: 36px;
    color: #e1e1e6;
    max-width: 580px;
    margin-bottom: 40px;

    @media only screen and (max-width: 960px) {
      margin-top: 40px;
      font-size: 28px;
    }
  }

  > div > button {
    font-size: 18px;
    line-height: 72px;
    max-width: 312px;
    width: 100%;
    background-color: #7159c1;
    color: #e1e1e6;
    border-radius: 5px;
    font-weight: 700;
    border: 0;
    transition: all 0.2s;
    box-shadow: 0px 6px 0px rgba(113, 89, 193, 0.6);
    text-transform: uppercase;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(-0.2, '#7159c1')};
    }

    @media only screen and (max-width: 960px) {
      max-width: 100%;
    }

    @media only screen and (max-width: 640px) {
      font-size: 15px;
    }
  }

  > div > div {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 960px) {
      flex-direction: column;
      align-items: start;
    }
  }

  @media only screen and (max-width: 960px) {
    > div > div > img {
      max-width: 117px;
      margin-bottom: 40px;
    }
  }

  > div > div > div {
    display: flex;
    margin-left: 96px;

    @media only screen and (max-width: 960px) {
      margin-left: 0;
      align-items: center;
    }
  }

  > div > div > div > div {
    max-width: 140px;

    @media only screen and (max-width: 960px) {
      display: flex;
      max-width: 123px;
      width: 100%;
    }

    @media only screen and (max-width: 640px) {
      font-size: 15px;
    }
  }

  > div > div > div > div > svg {
    width: 40px;
    height: 40px;
    color: #04d361;
  }

  > div > div > div > div > p {
    font-size: 24px;
    margin-top: 24px;
    margin-left: 0;
    color: #fff;

    @media only screen and (max-width: 640px) {
      font-size: 15px;
      margin-top: 0;
      margin-left: 16px;
    }
  }
`;
