import styled from 'styled-components';
import { device } from '../../styles/device';

const Img = styled.div`
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.5) 0%, rgba(4, 4, 4, 0.5) 100%),
    url(${(props) => props.$imageURL}),
    lightgray -38.124px 0px / 139.843% 99.51% no-repeat;
  background-position: center;
  padding: 45px 105px;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;

  @media (${device.tablet}) {
    width: 224px;
  }
  @media (${device.desktop}) {
    width: 237px;
  }
`;

const Ul = styled.ul`
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const H2 = styled.h2`
  color: #efede8;

  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  line-height: 24px;
`;
const P = styled.p`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  line-height: 18px;
`;

export const ListCategory = ({ exercisesCategories }) => {
  return (
    <Ul>
      {exercisesCategories &&
        exercisesCategories.map((category) => {
          return (
            <li key={category._id}>
              <Img $imageURL={category.imgURL} alt={category.name}>
                <H2>{category.name}</H2>
                <P>{category.filter}</P>
              </Img>
            </li>
          );
        })}
    </Ul>
  );
};
