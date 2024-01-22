import styled from 'styled-components';

export const TitleContent = styled.span`
  display: inline-block;
  position: relative;
  font-family: 'RobotoMedium';
  font-weight: 500;

  &::first-letter {
    text-transform: capitalize;
  }

  span {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    z-index: 1;
    svg {
      position: absolute;
      width: 120%;
      z-index: -1;
    }
  }

  &.size_h1 {
    font-size: 70px;
    line-height: 1.1;
    letter-spacing: 0.7px;

    @media screen and (max-width: 767px) {
      font-size: 38px;
      line-height: 1.05263;
      letter-spacing: 0.38px;
    }

    @media screen and (min-width: 768px) {
      font-size: 70px;
      line-height: 1.1;
      letter-spacing: 0.7px;
    }
  }

  &.size_h2 {
    font-family: 'RobotoBold';
    font-weight: 700;
    letter-spacing: -1px;

    @media screen and (max-width: 767px) {
      font-size: 24px;
      line-height: 1;
    }

    @media screen and (min-width: 768px) {
      font-size: 48px;
      line-height: 1.04167;
    }
  }

  &.size_h3 {
    font-family: 'RobotoBold';
    font-weight: 700;

    @media screen and (max-width: 767px) {
      font-size: 24px;
      line-height: 1.16667;
    }

    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 1.375;
    }
  }

  &.size_h4 {
    font-family: 'RobotoBold';
    font-style: normal;
    font-weight: 700;

    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 1.111111;
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.333333;
    }
  }

  &.size_h5,
  &.size_h6 {
    font-family: 'RobotoBold';
    font-style: normal;
    font-weight: 700;

    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 1.111111;
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.333333;
    }
  }

  &.size_error {
    @media screen and (max-width: 767px) {
      font-size: 66px;
      line-height: 1;
      letter-spacing: 0.66px;
    }

    @media screen and (min-width: 768px) {
      font-size: 160px;
      line-height: 0.93;
      letter-spacing: 1.6px;
    }
  }

  &.size_user {
    font-family: 'RobotoRegular';
    font-style: normal;
    font-weight: 400;

    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 1.111111;
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.333333;
    }
  }
`;
