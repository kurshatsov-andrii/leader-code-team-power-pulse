import styled from 'styled-components';

export const NavigationMenu = styled.nav`
  display: inline-flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 0px 32px;
  justify-content: flex-end;
  margin-left: auto;
  ul {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    gap: 16px;
    li {
      a {
        display: flex;
        padding: 10px 27px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 12px;
        border: 1px solid rgba(239, 237, 232, 0.2);
        font-size: 16px;
        line-height: 1.5;
        transition: 0.3s;
        background: rgba(0, 0, 0, 0);
        &:hover,
        &:focus,
        &.active {
          border: 1px solid var(--orange-color);
          background: var(--orange-color);
        }
      }
    }
  }
`;
