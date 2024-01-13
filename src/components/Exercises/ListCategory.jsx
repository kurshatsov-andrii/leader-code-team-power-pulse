import { Ul, Img, Title, SubTitle } from './ListCategory.styled';

export const ListCategory = ({ exercisesCategories }) => {
  return (
    <Ul>
      {exercisesCategories &&
        exercisesCategories.map((category) => {
          return (
            <li key={category._id}>
              <Img $imageURL={category.imgURL} alt={category.name}>
                <Title>{category.name}</Title>
                <SubTitle>{category.filter}</SubTitle>
              </Img>
            </li>
          );
        })}
    </Ul>
  );
};
