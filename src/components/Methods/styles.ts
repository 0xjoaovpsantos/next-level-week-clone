import styled from 'styled-components';

export const Container = styled.div`
  background-color: #121214;
  margin-top: 253px;
  margin-bottom: 320px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 960px) {
    img {
      display: none;
    }
  }

  h2 {
    font-size: 48px;
    margin-top: 40px;
    margin-bottom: 128px;
    max-width: 461px;
    color: #e1e1e6;

    @media only screen and (max-width: 960px) {
      margin-top: 0;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 64px;
      max-width: 520px;
      font-size: 32px;
    }
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 960px) {
      flex-direction: column;
      align-items: center;
    }
  }

  div div {
    max-width: 320px;
    border-top-width: 4px;
    border-top-style: solid;
    border-top-color: #7159c1;
    padding-top: 40px;

    @media only screen and (max-width: 960px) {
      border-top-width: 0px;
      border-left-width: 4px;
      border-left-style: solid;
      border-left-color: #7159c1;
      padding-top: 0px;
      padding-left: 40px;
    }
  }

  div div:not(:last-child) {
    margin-right: 20px;

    @media only screen and (max-width: 960px) {
      margin-right: 0px;
      margin-bottom: 40px;
    }
  }

  div div h3 {
    font-size: 36px;
    margin-bottom: 32px;
    color: #e1e1e6;
  }

  div div p {
    font-size: 18px;
    line-height: 1.5;

    @media only screen and (max-width: 640px) {
      font-size: 15px;
    }
  }
`;
