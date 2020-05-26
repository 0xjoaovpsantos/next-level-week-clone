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

  > img {
    max-width: 580px;
    min-width: 0;
    width: 100%;
    height: 100%;
    margin-right: 64px;
  }

  div {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 48px;
      color: #e1e1e6;

      b {
        color: #04d361;
      }
    }

    img {
      max-width: 100%;
      min-width: 0;
      margin-left: auto;
      margin-top: 40px;
    }
  }
`;
