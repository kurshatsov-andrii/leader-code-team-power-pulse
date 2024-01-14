import styled from 'styled-components';

export const ButtonElement = styled.div`
  display: block;

  > * {
    display: inline-flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    align-items: center;
    align-content: center;

    width: 100%;
    min-width: ${(props) => props.width && props.width + 'px'};
    min-height: 52px;

    font-family: 'RobotoMedium';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;

    border: 1px solid var(--orange-color);
    border-radius: 12px;

    padding: 0px 20px;

    color: var(--white-color);
    background: var(--orange-color);
    transition: 0.2s;

    cursor: pointer;
    transform: translate(0px, 0px);
    outline: none;
    user-select: none;

    span {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 10px;
      pointer-events: none;
      transition: 0.2s;
    }

    &:disabled {
      opacity: 0.5;
    }
    &:active {
      transform: translate(0px, 2px);
    }
    &:hover,
    &:focus {
      background: var(--orange-light-color);
      border: 1px solid var(--orange-light-color);
    }
    @media screen and (max-width: 767px) {
      min-height: 42px;
      font-size: 16px;
      min-width: auto;
      padding: 0px 30px;
    }
  }

  &.border {
    > * {
      border: 1px solid rgba(239, 237, 232, 0.3);
      background: rgba(0, 0, 0, 0);
      &:hover,
      &:focus {
        border: 1px solid var(--orange-color);
      }
    }
  }

  &.border_invers {
    > * {
      border: 1px solid rgba(239, 237, 232, 0.3);
      background: rgba(0, 0, 0, 0);
      &:hover,
      &:focus {
        border: 1px solid var(--orange-light-color);
        background: var(--orange-light-color);
      }
    }
  }

  &.full {
    width: 100%;
  }

  &.big {
    > * {
      min-height: 56px;
      font-size: 20px;
      line-height: 1.2;
      @media screen and (max-width: 767px) {
        min-height: 42px;
        font-size: 16px;
        min-width: auto;
        padding: 0px 30px;
      }
    }
  }

  &.small {
    > * {
      min-height: 44px;
      font-size: 16px;
      line-height: 1.5;
      font-family: 'RobotoRegular';
      font-weight: 400;
      @media screen and (max-width: 767px) {
        min-height: 38px;
        font-size: 14px;
        min-width: auto;
        padding: 0px 27px;
      }
    }
  }
`;
