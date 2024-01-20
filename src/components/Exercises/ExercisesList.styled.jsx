import styled from 'styled-components';

export const ExercisesListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const ExerciseWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 335px;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: ${(props) => props.theme.cardColor};
`;

export const ExerciseHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardHeaderTypeWrapper = styled.p`
  padding: 5px 7.5px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  background: ${(props) => props.theme.cardColor};
`;

export const CardHeaderButtonWrapper = styled.button`
  color: ${(props) => props.theme.orangeColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  background: transparent;
`;

export const Name = styled.p`
  font-size: 20px;
  line-height: 1.2;
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
  color: ${(props) => props.theme.normalColor};
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
