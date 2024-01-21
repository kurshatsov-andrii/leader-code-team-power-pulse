import styled from 'styled-components';

export const CustomForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  transition: 0.3s;
  position: relative;
  &:before {
    content: '';
    opacity: ${(props) => (props['data-loading'] === 'true' ? 1 : 0)};
    visibility: ${(props) => (props['data-loading'] === 'true' ? 'visible' : 'hidden')};
    pointer-events: ${(props) => (props['data-loading'] === 'true' ? 'all' : 'none')};
    transition: 0.3s;
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: grayscale(100%);
    z-index: 2;
  }
  &:after {
    content: '';
    opacity: ${(props) => (props['data-loading'] === 'true' ? 1 : 0)};
    visibility: ${(props) => (props['data-loading'] === 'true' ? 'visible' : 'hidden')};
    pointer-events: ${(props) => (props['data-loading'] === 'true' ? 'all' : 'none')};
    transition: 0.3s;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    margin-top: -20px;
    border-left: 4px solid var(--orange-color);
    border-top: 4px solid rgba(0, 0, 0, 0);
    border-right: 4px solid var(--orange-color);
    border-bottom: 4px solid rgba(0, 0, 0, 0);
    border-radius: 40px;
    z-index: 3;
    animation: spinner 0.8s linear infinite;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    gap: 20px 20px;
  }
  @media screen and (max-width: 767px) {
    gap: 20px 20px;
  }
`;
