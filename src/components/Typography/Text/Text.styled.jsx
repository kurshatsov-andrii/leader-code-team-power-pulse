import styled from 'styled-components';

export const TextEl = styled.p`
  display: block;
  font-family: inherit;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  white-space: pre-line;
  color: ${(props) => props['data-color']};

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
  }

  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props['data-size'] === 'small' ? '12px' : '16px')};
    line-height: 1.5;
  }
`;
