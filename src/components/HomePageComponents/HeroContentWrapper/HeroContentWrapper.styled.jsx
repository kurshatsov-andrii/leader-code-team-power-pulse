import styled from 'styled-components';

export const HeroContentWrapp = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  position: relative;

  @media screen and (max-width: 767px) {
    padding-top: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 50px;
    margin-bottom: 25%;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 18vh;
  }
`;
