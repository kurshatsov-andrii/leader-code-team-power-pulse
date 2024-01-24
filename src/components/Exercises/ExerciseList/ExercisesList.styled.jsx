import styled from 'styled-components';
import { device } from '../../../styles/device';

export const ExercisesListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
  height: 487px;
  @media (${device.tablet}) {
    overflow-y: scroll;
    width: 710px;
    gap: 32px 16px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ef8964;
      border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
    }
  }
  @media (${device.desktop}) {
    width: 850px;
    margin-left: 100px;
  }
`;

export const ExerciseWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 335px;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.cardBorderColor};
  background: ${(props) => props.theme.cardColor};
  @media (${device.desktop}) {
    width: 405px;
  }
`;

export const ExerciseHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`;

export const CardHeaderTypeWrapper = styled.p`
  padding: 5px 7.5px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  background: ${(props) => props.theme.cardColor};
`;

export const CardHeaderButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.orangeColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  background: transparent;
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
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-size: 20px;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const PropertiesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`;

export const PropertyName = styled.p`
  color: ${(props) => props.theme.prpertyNameColort};
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Property = styled.span`
  color: ${(props) => props.theme.whiteColor};
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  text-transform: capitalize;
`;
