import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { Name, Property, PropertyName } from './ExercisesList.styled';

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
  // name: 'barbell incline row';
  // bodyPart: 'back';
  // target: 'upper back';
  // burnedCalories: 112;

  // equipment: 'barbell';
  // gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0049.gif';
  // time: 3;

  console.log(data);

  return (
    <ul>
      {data &&
        data.map(({ _id, name, bodyPart, target, burnedCalories }) => {
          return (
            <li key={_id}>
              <p>
                <strong>WORKOUT</strong>
              </p>
              <button>
                <p>Start</p>
                {/* <svg></svg> */}
              </button>

              <div>
                {/* <svg></svg> */}
                <Name>{name}</Name>
              </div>

              <ul>
                <li>
                  <PropertyName>
                    Burned calories: <Property>{burnedCalories}</Property>
                  </PropertyName>
                </li>
                <li>
                  <PropertyName>
                    Body part: <Property>{bodyPart}</Property>
                  </PropertyName>
                </li>
                <li>
                  <PropertyName color="black">
                    Target: <Property>{target}</Property>
                  </PropertyName>
                </li>
              </ul>
            </li>
          );
        })}
    </ul>
  );
};

export default ExercisesList;
