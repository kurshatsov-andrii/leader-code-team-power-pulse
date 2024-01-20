import styled from 'styled-components';

export const Logout = styled.button`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  color: inherit;
  gap: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  margin-left: 16px;
  padding: 0%;
  border: 0;
  background: none;

  &:hover,
  &:focus {
    svg {
      transform: translate(4px, 0px);
      path {
        stroke: var(--orange-light-color);
      }
    }
  }
  svg {
    position: relative;
    transform: translate(0px, 0px);
    transition: 0.3s;
    path {
      stroke: var(--orange-color);
      transition: 0.3s;
    }
  }
`;
