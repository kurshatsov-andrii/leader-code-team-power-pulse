import styled from 'styled-components';
import { device } from '../../../styles/device';

export const Div = styled.div`
  padding: 48px 0;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${device.tablet}) {
    padding: 48px 32px 0 32px;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const DivFieldAndButton = styled(Div)`
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  @media (${device.tablet}) {
    height: 450px;
  }
`;

export const Img = styled.div`
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(${(props) => props.$gifUrl}),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
  background-position: center;
  background-size: cover;
`;

export const SpanTime = styled.span`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 14px;
  margin-bottom: 4px;
`;

export const DivGifAndTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 335px;
`;

export const SpanBurnedCalories = styled.span`
  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 40px;
`;
export const SubSpanBC = styled.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const FieldWrapper = styled.ul`
  display: flex;
  width: 335px;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (${device.tablet}) {
    width: 344px;
  }
`;

export const Field = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 147px;
  height: 68px;
  padding: 12px 18px 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media (${device.tablet}) {
    width: 168px;
    height: 70px;
  }
`;
export const FieldTitle = styled.span`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const FieldValue = styled.span`
  color: #efede8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
`;

