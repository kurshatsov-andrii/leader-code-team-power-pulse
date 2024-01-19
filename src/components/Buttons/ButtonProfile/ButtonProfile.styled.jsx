import styled from 'styled-components';
export const ButtonProfileElement = styled.span`
  display: block;
  cursor: pointer;
  color: rgba(239, 237, 232, 0.3);
  transition: 0.3s;
  &:hover,
  &:focus,
  .active {
    color: var(--orange-light-color);
  }
`;
