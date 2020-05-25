import styled from 'styled-components';

export const Container = styled.section`
  background-color: #121214;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  div {
    display: flex;
    justify-content: space-between;
  }

  div h2 {
    font-size: 48px;
    max-width: 277px;
    margin-bottom: 0;
    color: #e1e1e6;
  }

  div div {
    display: grid;
    grid-gap: 0;
    grid-row-gap: 64px;
    grid-column-gap: 48px;
    grid-template-columns: repeat(3, 1fr);
  }

  div div h3 {
    max-width: 163px;
    font-size: 18px;
    color: #04d361;
    z-index: 1;
    font-weight: normal;
    position: relative;
  }

  div div h3 span {
    display: block;
    position: absolute;
    font-weight: 700;
    z-index: -1;

    top: -35px;
    left: -35px;
    font-size: 64px;
    color: #202024;
  }
`;
