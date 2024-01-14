import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  svg path {
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 767px) {
    svg {
      width: 82px;
    }
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 152px;
    }
  }
`;
