import styled from 'styled-components';

export const Container = styled.section`
  background-color: #121214;
  margin-top: 320px;
  margin-bottom: 320px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1030px) {
    justify-content: center;
  }

  > img {
    max-width: 577px;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 1030px) {
      display: none;
    }
  }

  div {
    max-width: 420px;

    h2 {
      font-size: 48px;
      color: #e1e1e6;
      padding-bottom: 40px;
    }

    p {
      font-size: 18px;
      line-height: 1.5;

      @media only screen and (max-width: 640px) {
        font-size: 15px;
      }

      b {
        font-size: 24px;
        color: #04d361;
        font-weight: normal;
      }
    }

    p:not(:last-child) {
      padding-bottom: 40px;
    }

    img {
      display: none;

      @media only screen and (max-width: 1030px) {
        display: block;
        max-width: 577px;
        height: 100%;
        width: 100%;
        margin-top: 40px;
        margin-bottom: 80px;
      }
    }
  }
`;
