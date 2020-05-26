import styled from 'styled-components';

export const Container = styled.section``;

export const Content = styled.div``;

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
