import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../styles/device';

export const Ul = styled.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;
  height: 28px;
  @media (${device.tablet}) {
    margin-top: 0;
    margin-right: 32px;
  }
`;

export const Li = styled.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const LinkTo = styled(NavLink)`
  background: transparent;
  color: rgba(239, 237, 232, 0.4);
  border: none;
  height: 28px;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.beigeColor};
  }
  &.active {
    color: #efede8;
    & {
      position: relative;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: #ef8964;
    }
  }
`;
