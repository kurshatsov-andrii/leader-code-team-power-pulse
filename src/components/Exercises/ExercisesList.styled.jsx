import styled from 'styled-components';

export const ExercisesListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const ExerciseWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 335px;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`;

export const Name = styled.p`
  font-size: 20px;
  font-style: normal;
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
