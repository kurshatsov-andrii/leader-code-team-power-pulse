import styled from 'styled-components';

export const ProfileAvatar = styled.div`
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 46px;
    height: 46px;
    border-radius: 150px;
    background: ${(props) => (props['data-avatar'] ? `url(${props['data-avatar']})` : 'rgb(34, 34, 34)')};
    background-size: cover;
    color: rgba(239, 237, 232, 0.2);
    border: 1px solid var(--orange-color);
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
