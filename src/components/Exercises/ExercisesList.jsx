import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

export const ExercisesList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { subcategory } = useParams();

  useEffect(() => {
    api
      .fetchExercises(subcategory)
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, [subcategory]);

  if (isLoading) {
    return 'loading';
  }

  return (
    <ul>
      {data &&
        data.map((exercise) => {
          return <li key={exercise._id}>{exercise.bodyPart}</li>;
        })}
    </ul>
  );
};

export default ExercisesList;
