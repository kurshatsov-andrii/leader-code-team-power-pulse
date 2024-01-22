import styled from 'styled-components';

export const PaginationDotsWrapper = styled.ul`
  height: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 32px;
`;

export const OutCircle = styled.li`
  width: 14px;
  height: 14px;
  display: flex;

  &.active {
    width: 14px;
    height: 14px;
    position: relative;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.orangeColor};
  }
  &.active p {
    width: 8px;
    height: 8px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 50%;
    background: ${(props) => props.theme.orangeColor};
  }
`;

export const InnerCircle = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(239, 237, 232, 0.1);
`;
