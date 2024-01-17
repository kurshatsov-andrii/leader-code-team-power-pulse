import { Ul, Img, Title, SubTitle } from './ListCategory.styled';
import { Button } from './Categories.styled';
import { useParams } from 'react-router-dom';
import { queryCoder } from '../../utils/queryEditior';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export const ListCategory = () => {
  const [exercisesCategories, setExercisesCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    api
      .fetchCategories(category)
      .then((response) => setExercisesCategories(response))
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return 'loading';
  }

  return (
    <Ul>
      {exercisesCategories &&
        exercisesCategories.map(({name, filter, imgURL, _id}) => {
          return (
            <li key={_id}>
              <Button to={`/exercises/${category}/${queryCoder(name)}`}>
                <Img $imageURL={imgURL} alt={name}>
                  <Title>{name}</Title>
                  <SubTitle>{filter}</SubTitle>
                </Img>
              </Button>
            </li>
          );
        })}
    </Ul>
  );
};
