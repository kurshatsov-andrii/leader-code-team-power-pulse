import styled from 'styled-components';

export const Name = styled.p`
  font-size: 20px;
  font-style: normal;
  line-height: 1.2;
  &::first-letter {
    text-transform: capitalize;
  }
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
