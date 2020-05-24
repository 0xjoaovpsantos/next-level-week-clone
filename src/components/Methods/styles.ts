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

  h2 {
    font-size: 48px;
    margin-top: 40px;
    margin-bottom: 128px;
    max-width: 461px;
    color: #e1e1e6;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  div div {
    max-width: 320px;
    border-top-width: 4px;
    border-top-style: solid;
    border-top-color: #7159c1;
    padding-top: 40px;
  }

  div div:not(:last-child) {
    margin-right: 20px;
  }

  div div h3 {
    font-size: 36px;
    margin-bottom: 32px;
    color: #e1e1e6;
  }

  div div p {
    font-size: 18px;
    line-height: 1.5;
  }
`;
