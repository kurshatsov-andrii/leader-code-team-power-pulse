import { Ul, Img, Title, SubTitle } from './ListCategory.styled';

export const ListCategory = ({ exercisesCategories, onCategorieClick }) => {
  return (
    <Ul>
      {exercisesCategories &&
        exercisesCategories.map((category) => {
          return (
            <li key={category._id}>
              <button onClick={() => onCategorieClick(category.name)}>
                <Img $imageURL={category.imgURL} alt={category.name}>
                  <Title>{category.name}</Title>
                  <SubTitle>{category.filter}</SubTitle>
                </Img>
              </button>
            </li>
          );
        })}
    </Ul>
  );
};
