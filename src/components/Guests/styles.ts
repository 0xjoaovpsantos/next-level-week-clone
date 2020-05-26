import styled from 'styled-components';

export const Container = styled.section`
  background-color: #121214;
  margin-top: 170px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }

  > img {
    max-width: 580px;
    min-width: 0;
    width: 100%;
    height: 100%;
    margin-right: 64px;
    order: 1;

    @media only screen and (max-width: 960px) {
      order: 2;
      margin-right: 0px;
      margin-top: 40px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    order: 2;
    @media only screen and (max-width: 960px) {
      order: 1;
    }

    h2 {
      font-size: 48px;
      color: #e1e1e6;

      @media only screen and (max-width: 960px) {
        font-size: 32px;
      }

      b {
        color: #04d361;
      }
    }

    img {
      max-width: 100%;
      min-width: 0;
      margin-left: auto;
      margin-top: 40px;

      @media only screen and (max-width: 960px) {
        display: none;
      }
    }
  }
`;
