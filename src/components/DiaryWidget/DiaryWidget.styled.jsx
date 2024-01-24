import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
    width: 390px;
  }
`;

export const UserStatistics = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 20px 0px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    width: 593px;
    height: 248px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
    height: 100%;
    flex-direction: row;
  }
`;

export const StatisticsItemLable = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AlarmWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 161px;
  height: 96px;

  padding: 13px;

  border-radius: 12px;
  border: 1px solid ${(props) => props.$border || 'rgba(239, 237, 232, 0.2)'};
  background: ${(props) => props.color || 'initial'};

  @media screen and (max-width: 375px) {
    width: 48%;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;

    padding: 17px;
  }
`;

export const TextEl = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: ${(props) => props.size || '12px'};
  line-height: ${(props) => props.$lineheight || '1.33'};

  color: ${(props) => props.color || 'rgba(239, 237, 232, 0.8)'};

  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`;
