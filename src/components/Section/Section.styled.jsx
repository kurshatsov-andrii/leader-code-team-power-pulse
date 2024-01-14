import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 46px;
  color: var(--white-color);
  background-color: var(--black-color);
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: 1;
  opacity: ${(props) => (props.visibility === 'true' ? 1 : 0)};
  transition: opacity 0.6s ease-out;

  @media screen and (max-width: 767px) {
    background-image: ${(props) => (props['data-background']?.mobil ? `url(${props['data-background']?.mobil})` : 'none')};
    background-position: right bottom;
    background-size: auto 70%;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: ${(props) => (props['data-background']?.tablet ? `url(${props['data-background']?.tablet})` : 'none')};
    background-position: right center;
    background-size: auto 100%;
    padding-top: 84px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    background-image: ${(props) => (props['data-background']?.desctop ? `url(${props['data-background']?.desctop})` : 'none')};
    background-position: right center;
    background-size: auto 100%;
    padding-top: 84px;
    padding-bottom: 46px;
  }

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: ${(props) => (props['data-background']?.mobilretina ? `url(${props['data-background']?.mobilretina})` : 'none')};
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: ${(props) => (props['data-background']?.tabletretina ? `url(${props['data-background']?.tabletretina})` : 'none')};
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: ${(props) => (props['data-background']?.desctopretina ? `url(${props['data-background']?.desctopretina})` : 'none')};
  }
`;

export const Container = styled.div`
  display: block;
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 375px;
    padding: 0px 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0px 96px;
  }
`;
