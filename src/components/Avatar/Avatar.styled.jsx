import styled from 'styled-components';

export const ProfileAvatar = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 46px;
  height: 46px;
  border-radius: 46px;

  background: ${(props) => (props['data-avatar'] ? `url(${props['data-avatar']})` : 'rgba(48, 48, 48, 0.3)')};
  /* background: rgba(48, 48, 48, 0.3); */
  background-size: cover;
  color: rgba(239, 237, 232, 0.2);
  border: 1px solid var(--orange-color);
  transition: 0.3s;
  svg {
    display: block;
    width: 50%;
    height: auto;
  }
`;
