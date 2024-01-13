import styled from 'styled-components';
import { device } from '../../styles/device';

export const Title = styled.h1`
  color: #efede8;
  padding-top: 40px;
  padding-left: 20px;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  @media (${device.tablet}) {
    font-size: 32px;
    line-height: 44px;
  }
`;
