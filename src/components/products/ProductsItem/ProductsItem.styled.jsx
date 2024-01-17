import styled from 'styled-components';

export const CardHeader = styled.div`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const CardTitle = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const CardInfo = styled.ul`
  display: flex;
  gap: 16px;
`;

export const AddButton = styled.button`
  > svg {
    width: 16px;
    height: 16px;
    stroke: var(--color-main-one);
  }
`;

export const IconRunningFigure = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  > svg {
    width: 14px;
    height: 16px;
  }
`;
