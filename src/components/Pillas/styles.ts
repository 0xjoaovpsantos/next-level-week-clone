import styled from 'styled-components';

export const Container = styled.section`
  background-color: #121214;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  div {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 960px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  div h2 {
    font-size: 48px;
    max-width: 277px;
    margin-bottom: 0;
    color: #e1e1e6;

    @media only screen and (max-width: 960px) {
      max-width: 460px;
      font-size: 32px;
      margin-bottom: 64px;
    }

    @media only screen and (max-width: 640px) {
      max-width: 277px;
    }
  }

  div div {
    display: grid;
    grid-gap: 0;
    grid-row-gap: 64px;
    grid-column-gap: 48px;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 640px) {
      grid-column-gap: 16px;
    }
  }

  div div h3 {
    max-width: 163px;
    font-size: 18px;
    color: #04d361;
    z-index: 1;
    font-weight: normal;
    position: relative;

    @media only screen and (max-width: 960px) {
      padding-left: 20px;
      padding-right: 20px;
    }
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

    @media only screen and (max-width: 960px) {
      top: -26px;
      left: 0;
      font-size: 48px;
    }
  }
`;
