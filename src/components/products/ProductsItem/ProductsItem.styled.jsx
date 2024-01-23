import styled from 'styled-components';

export const CardHeader = styled.div`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }
`;

export const DietWrapper = styled.div`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const RecomendedWrapper = styled.div`
  display: flex;
  gap: 8px;

  div {
    width: 14px;
    height: 14px;
    background-color: ${(props) => (props.recommendation ? 'rgb(65, 155, 9)' : 'rgb(233, 16, 29)')};
    border-radius: 10px;
    margin: auto;
  }

  p {
    margin: auto 0;
    color: var(--white-color);
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const AddButton = styled.button`
  color: var(--orange-color);
  background-color: inherit;
  font-size: 14px;
  line-height: 1.28;
  display: flex;
  align-items: center;
  padding: 1px 0;
  transition: all 0.1s linear;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    stroke: var(--orange-color);
    transition: all 0.1s linear;
  }

  &:hover {
    color: var(--hover-color);

    svg {
      stroke: var(--hover-color);
    }
  }
  @media screen and (min-width: 768px) {
    padding: 4px 0;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CardTitle = styled.div`
  margin-bottom: 8px;
  display: flex;
  gap: 16px;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 24px;
    height: 24px;
    background-color: var(--beige-color);
    border-radius: 50%;

    svg {
      width: 14px;
      height: 16px;
      fill: var(--white-color);
    }
  }

  p {
    width: 100%;
    margin-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    line-height: 1.2;
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 24px;
      line-height: 1.33;
    }
  }

  @media screen and (min-width: 1440px) {
    p {
      margin-right: 0;
    }
  }
`;

// export const IconRunningFigure = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 24px;
//   height: 24px;
//   background-color: var(--beige-color);
//   border-radius: 50%;

//   svg {
//     width: 14px;
//     height: 16px;
//     fill: #efede8;
//     stroke: #efede8;
//   }
// `;

export const CardInfo = styled.ul`
  display: flex;
  gap: 16px;

  li p {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(239, 237, 232, 0.4);
    text-transform: capitalize;
    span {
      margin-left: 4px;
      color: var(--white-color);
    }
  }
`;

export const CategoryWrapper = styled.p`
  display: flex;
  span {
    max-width: 76px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
