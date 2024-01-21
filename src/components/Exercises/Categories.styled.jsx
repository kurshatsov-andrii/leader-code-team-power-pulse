import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;
  margin-left: 20px;
  height: 28px;
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
  &.active {
    color: #efede8;
    & {
      position: relative;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: #ef8964;
    }
  }
`;