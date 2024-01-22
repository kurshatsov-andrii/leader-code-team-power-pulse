import styled from 'styled-components';
import { device } from '../../../styles/device';
import { Link } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 48px 84px;

  @media (${device.tablet}) {
    margin: 64px 134px;
  }
`;

const Img = styled.img`
  padding: 28px 0;
  @media (${device.tablet}) {
    padding: 32px 0;
  }
`;

const Title = styled.span`
  color: #efede8;

  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
`;

const Span = styled.span`
  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;
`;

const SecondSpan = styled(Span)`
  margin-bottom: 16px;
  @media (${device.tablet}) {
    margin-bottom: 32px;
  }
`;

const SubSpan = styled(Span)`
  color: #e6533c;
`;

const LinkToDiary = styled(Link)`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export { Div, Img, Title, Span, SecondSpan, SubSpan, LinkToDiary };
