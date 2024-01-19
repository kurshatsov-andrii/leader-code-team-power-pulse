import styled from 'styled-components';

export const TitleWrapperContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${(props) => (props['data-width'] ? props['data-width'] + 'px' : '100%')};
  position: relative;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 32px;

  @media screen and (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
  }
`;
