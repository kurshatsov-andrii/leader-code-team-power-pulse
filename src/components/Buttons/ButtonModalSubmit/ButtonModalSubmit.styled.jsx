import styled from 'styled-components';
import { device } from '../../../styles/device';

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  border: 1px solid var(--orange-color);
  border-radius: 12px;

  padding: 12px 32px;
  margin-left: 16px;

  color: var(--white-color);
  background: var(--orange-color);
  transition: 0.2s;
  transform: translate(0px, 0px);
  outline: none;
  &:hover,
  &:focus {
    background: var(--orange-light-color);
    border: 1px solid var(--orange-light-color);
  }
  &:disabled {
    opacity: 0.5;
  }
  @media (${device.tablet}) {
    margin-top: auto;
    align-self: flex-end;
  }
`;
