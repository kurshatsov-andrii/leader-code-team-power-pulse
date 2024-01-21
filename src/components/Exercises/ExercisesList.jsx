import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CardHeaderButtonWrapper,
  CardHeaderTypeWrapper,
  ExerciseHeaderWrapper,
  ExerciseWrapper,
  ExercisesListWrapper,
  Name,
  NameWrapper,
  PropertiesWrapper,
  Property,
  PropertyName,
} from './ExercisesList.styled';
import { Arrow } from './Arrow';
import { ExerciseIcon } from './ExerciseIcon';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpecialExercises } from '../../redux/exercises/operations';
import { selectData, selectLoading } from '../../redux/exercises/selectors';

export const ExercisesList = () => {
  const data = useSelector(selectData);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  console.log(data)

  const { category, subcategory } = useParams();

  useEffect(() => {
    dispatch(fetchSpecialExercises({ category, subcategory }));
  }, [dispatch, category, subcategory]);

  if (isLoading) {
    return 'loading';
  }

  return (
    <ExercisesListWrapper>
      {data &&
        data.map(({ _id, name, bodyPart, target, burnedCalories }) => {
          return (
            <ExerciseWrapper key={_id}>
              <ExerciseHeaderWrapper>
                <CardHeaderTypeWrapper>WORKOUT</CardHeaderTypeWrapper>
                <CardHeaderButtonWrapper>
                  <p>Start</p>
                  <Arrow />
                </CardHeaderButtonWrapper>
              </ExerciseHeaderWrapper>

              <div>
                <NameWrapper>
                  <ExerciseIcon />
                  <Name>{name}</Name>
                </NameWrapper>

                <PropertiesWrapper>
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
                </PropertiesWrapper>
              </div>
            </ExerciseWrapper>
          );
        })}
    </ExercisesListWrapper>
  );
};

export default ExercisesList;
