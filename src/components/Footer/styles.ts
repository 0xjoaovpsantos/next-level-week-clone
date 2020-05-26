import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.section`
  background-color: #121214;

  footer {
    background-color: #202024;
    width: 100%;
    display: flex;
    margin-top: 140px;

    > div {
      display: flex;
      justify-content: space-between;
      max-width: 1160px;
      width: 100%;
      margin: 0 auto;
      padding: 24px 20px 24px 20px;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 500px;
        width: 100%;

        @media only screen and (max-width: 960px) {
          align-items: flex-start;
          max-width: 160px;
        }

        @media only screen and (max-width: 960px) {
          flex-direction: column;
        }

        a {
          color: #e1e1e6;
          font-size: 14px;
          text-decoration: none;

          @media only screen and (max-width: 960px) {
            margin-top: 10px;
          }
        }

        button {
          width: 40px;
          height: 40px;
          background-color: #29292e;
          border: none;
          margin-left: 64px;
          border-radius: 5px;

          @media only screen and (max-width: 960px) {
            display: none;
          }

          svg {
            color: #04d361;
          }
        }
      }

      div:first-of-type {
        justify-content: space-between;
        max-width: 404px;
        width: 100%;

        @media only screen and (max-width: 960px) {
          max-width: 120px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  > div > p {
    display: none;

    @media only screen and (max-width: 960px) {
      margin-top: 40px;
      display: block;
      max-width: 420px;
      font-size: 14px;
      line-height: 1.5;
      b {
        color: #04d361;
      }
    }
  }

  div:not(:first-of-type) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 960px) {
      flex-direction: column;
    }

    h2 {
      font-size: 48px;
      color: #e1e1e6;
      max-width: 580px;

      @media only screen and (max-width: 960px) {
        font-size: 32px;
        margin-bottom: 40px;
      }
    }

    button {
      font-size: 20px;
      line-height: 100px;
      max-width: 420px;
      width: 100%;
      background-color: #7159c1;
      color: #e1e1e6;
      border-radius: 5px;
      font-weight: 700;
      border: 0;
      transition: all 0.2s;
      box-shadow: 0px 6px 0px rgba(113, 89, 193, 0.6);
      text-transform: uppercase;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(-0.2, '#7159c1')};
      }

      @media only screen and (max-width: 960px) {
        font-size: 20px;
        line-height: 100px;
      }

      @media only screen and (max-width: 640px) {
        font-size: 15px;
      }
    }
  }
`;

export const Information = styled.div`
  @media only screen and (max-width: 960px) {
    display: none;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      max-width: 420px;
      font-size: 14px;
      line-height: 1.5;
      b {
        color: #04d361;
      }
    }
  }

  > div > div > div {
    display: flex;

    margin-left: 96px;

    @media only screen and (max-width: 960px) {
      margin-left: 0;
      align-items: center;
    }
  }

  > div > div > div > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 140px;

    @media only screen and (max-width: 960px) {
      display: flex;
      max-width: 123px;
      width: 100%;
    }

    @media only screen and (max-width: 640px) {
      font-size: 15px;
    }
  }

  > div > div > div > div > svg {
    width: 40px;
    height: 40px;
    color: #04d361;
  }

  > div > div > div > div > p {
    font-size: 24px;
    margin-top: 24px;
    margin-left: 0;
    color: #fff;

    @media only screen and (max-width: 640px) {
      font-size: 15px;
      margin-top: 0;
      margin-left: 16px;
    }
  }
`;
