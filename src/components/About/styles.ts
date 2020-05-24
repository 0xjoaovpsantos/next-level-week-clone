import styled from 'styled-components';

export const Container = styled.section`
  background-color: #121214;
  margin-top: 145px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    margin-top: 250px;
    max-width: 520px;
  }

  div h2 {
    color: #e1e1e6;
    font-size: 48px;
    max-width: 382px;
    margin-bottom: 40px;
  }

  div p {
    line-height: 1.5;
  }

  div p:first-of-type {
    color: #04d361;
  }

  div p:not(:first-of-type) {
    color: #a8a8b3;
  }

  div p:not(:last-child) {
    margin-bottom: 40px;
  }
`;
