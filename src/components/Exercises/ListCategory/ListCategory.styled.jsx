import styled from 'styled-components';
import { device } from '../../../styles/device';

export const SectionCategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.div`
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.5) 0%, rgba(4, 4, 4, 0.5) 100%),
    url(${(props) => props.$imageURL}),
    lightgray -38.124px 0px / 139.843% 99.51% no-repeat;
  background-position: center;
  background-size: cover;
  padding: 45px 105px;

  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;

  @media (${device.tablet}) {
    width: 224px;
  }
  @media (${device.desktop}) {
    width: 237px;
  }
`;

export const Ul = styled.ul`
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  @media (${device.tablet}) {
    gap: 20px 16px;
  }
  @media (${device.desktop}) {
    justify-content: center;
  }
`;

export const Title = styled.h2`
  color: #efede8;

  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  line-height: 24px;
`;
export const SubTitle = styled.p`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  line-height: 18px;
`;
