import styled from 'styled-components';

export const ProfileAvatar = styled.div`
  position: relative;
  &:after {
    content: '';
    opacity: ${(props) => (props['data-loading'] === true ? 1 : 0)};
    visibility: ${(props) => (props['data-loading'] === true ? 'visible' : 'hidden')};
    pointer-events: none;
    transition: 0.3s;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 50%;
    margin-left: -25%;
    margin-top: -25%;
    border-left: 2px solid var(--orange-color);
    border-top: 2px solid rgba(0, 0, 0, 0);
    border-right: 2px solid var(--orange-color);
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    border-radius: 40px;
    z-index: 3;
    animation: spinner 0.8s linear infinite;
  }
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    width: 46px;
    height: 46px;
    border-radius: 150px;
    background: ${(props) => (props['data-avatar'] ? `url(${props['data-avatar']})` : 'rgb(34, 34, 34)')};
    opacity: ${(props) => (props['data-loading'] === true ? 0.3 : 1)};
    background-size: cover;
    color: rgba(239, 237, 232, 0.2);
    border: 1px solid var(--orange-color);
    transition: 0.3s;
    &:hover,
    &:focus {
      border: 1px solid var(--orange-light-color);
    }
    transition: 0.3s;
    svg {
      display: block;
      width: 50%;
      height: auto;
    }

    @media screen and (max-width: 767px) {
      width: 36px;
      height: 36px;
    }
  }
`;
