import styled from 'styled-components';

export const Container = styled.section`
  background-color: #121214;
  margin-top: 320px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  > div {
    display: flex;
    flex-direction: column;
  }

  > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 1160px) {
    > div > div:not(:first-of-type) {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 960px) {
    > div > div:first-of-type {
      flex-direction: column;
    }

    > div > div > h2 > img {
      display: none;
    }
  }

  > div > div h2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: #e1e1e6;
    max-width: 348px;
    font-size: 48px;
    margin-bottom: 0;

    @media only screen and (max-width: 960px) {
      max-width: 460px;
      font-size: 32px;
      margin-bottom: 40px;
    }
  }

  > div > div > h2 > img {
    padding-top: 40px;
  }

  > div > div > div {
    max-width: 518px;
  }

  > div > div > div > p {
    font-size: 18px;
    line-height: 1.5;
  }

  > div > div > div > p:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Instructor = styled.div`
  div {
    position: relative;
  }

  div img {
    min-width: 0;
    max-width: 100%;
  }

  div svg {
    position: absolute;
    width: 90px;
    height: 80px;
    bottom: -35px;
    right: 40px;

    @media only screen and (max-width: 960px) {
      width: 45px;
      height: 40px;
      bottom: -15px;
      right: 24px;
    }
  }

  h3 {
    margin-top: 64px;
    font-size: 36px;
    padding-bottom: 8px;
    color: #e1e1e6;

    @media only screen and (max-width: 960px) {
      margin-top: 40px;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: normal;
    color: #04d361;
  }

  p {
    margin-top: 40px;
    font-size: 18px;
    color: #a8a8b3;
    line-height: 1.5;
  }
`;
