import styled from 'styled-components';

export const Container = styled.section`
  background-color: #121214;
  margin-top: 311px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    max-width: 520px;
  }

  div h2 {
    max-width: 240px;
    margin-bottom: 80px;
    font-size: 48px;
    color: #e1e1e6;

    @media only screen and (max-width: 960px) {
      margin-bottom: 24px;
      font-size: 32px;
    }
  }
`;

export const Grid = styled.div`
  min-width: 0;
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 960px) {
    grid-gap: 32px;
    margin-top: 80px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: #e1e1e6;
    max-width: 320px;
    padding-top: 40px;
    font-size: 64px;
    padding-bottom: 4px;
    border-top-width: 4px;
    border-top-style: solid;
    border-top-color: #7159c1;

    @media only screen and (max-width: 960px) {
      font-size: 36px;
      padding-top: 24px;
      padding-bottom: 8px;
    }

    b {
      color: #04d361;
    }
  }

  p {
    color: #e1e1e6;
    font-size: 18px;
  }
`;
