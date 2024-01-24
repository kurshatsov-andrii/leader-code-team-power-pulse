import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../styles/device';

export const SectionBackground = styled.div`
  position: relative;
  top: 0;
  left: auto;
  width: 100%;
  min-height: 100%;
  background-repeat: no-repeat;
  overflow-y: hidden;
  z-index: 1;
  background-position: right center;
  background-size: auto 100%;
  @media (${device.desktop}) {
    background-image: url(${(props) => (props.$backgrounds.desktop && props.$isActive ? props.$backgrounds.desktop : 'none')});
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(${(props) => (props.$backgrounds.desktopretina && props.$isActive ? props.$backgrounds.desktopretina : 'none')});
    }
  }
`;

export const Title = styled.h1`
  color: #efede8;
  padding-top: 40px;
  padding-left: 20px;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  @media (${device.tablet}) {
    font-size: 32px;
    line-height: 44px;
  }
`;

export const SectionPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 90px;
  margin-left: 20px;
  margin-bottom: 20px;
  @media (${device.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-top: 144px;
    margin-bottom: 32px;
    gap: 0;
    justify-content: space-between;
  }
  @media (${device.desktop}) {
    margin-left: 110px;
    margin-right: 60px;
  }
`;

export const BackButtonWrapper = styled(Link)`
  width: fit-content;
  background: transparent;
  padding: 0;
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(239, 237, 232, 0.4);
  font-size: 16px;
  line-height: 1.5;
  position: absolute;
  top: 68px;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.beigeColor};
    svg {
      & path {
        transition: 0.3s;
        stroke: ${(props) => props.theme.beigeColor};
      }
    }
  }

  @media (${device.tablet}) {
    top: 102px;
  }
`;
