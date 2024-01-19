import styled from 'styled-components';

export const TextEl = styled.p`
  display: block;
  position: relative;
  font-family: inherit;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  white-space: pre-line;
  padding-left: ${(props) => (props['data-icon'] && '36px') || '0px'};
  color: ${(props) => props['data-color']};
  text-align: ${(props) => (props['data-center'] === 'center' ? 'center' : 'left')};
  svg {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  a {
    color: var(--white-color);
    border-bottom: 1px solid var(--white-color);
    transition: 0.3s;
    &:hover,
    &:focus {
      color: var(--orange-light-color);
      border-bottom: 1px solid var(--orange-light-color);
    }
  }

  @media screen and (max-width: 767px) {
    font-size: ${(props) => (props['data-size'] === 'small' ? '12px' : '14px')};
    line-height: 1.2857;

    padding-left: ${(props) => (props['data-icon'] && '28px') || '0px'};
    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props['data-size'] === 'small' ? '12px' : '18px')};
    line-height: 1.5;
  }
`;
