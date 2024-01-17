import { Ul, Img, Title, SubTitle } from './ListCategory.styled';
import { Button } from './Categories.styled';
import { useParams } from 'react-router-dom';
import { queryCoder } from '../../utils/queryEditior';

export const ListCategory = ({ exercisesCategories }) => {
  const {categorie} = useParams()

  return (
    <Ul>
      {exercisesCategories &&
        exercisesCategories.map((category) => {
          return (
            <li key={category._id}>
              <Button to={`/exercises/${categorie}/${queryCoder(category.name)}`}>
                <Img $imageURL={category.imgURL} alt={category.name}>
                  <Title>{category.name}</Title>
                  <SubTitle>{category.filter}</SubTitle>
                </Img>
              </Button>
            </li>
          );
        })}
    </Ul>
  );
};
