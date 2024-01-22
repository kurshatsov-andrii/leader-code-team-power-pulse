import { useEffect, useState } from 'react';
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
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import ModalTask from './modals/ModalTask';

export const ExercisesList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const isLoading = useSelector(selectLoading);
  const [selectTask, setSelectTask] = useState(null);


  const { category, subcategory } = useParams();

  useEffect(() => {
    dispatch(fetchSpecialExercises({ category, subcategory }));
  }, [dispatch, category, subcategory]);

  if (isLoading) {
    return 'loading';
  }

  const onShowModal = (task) => {
    setSelectTask(task);
  };
  const onClick = () => {
    setSelectTask(null);
  };

  return (
    <>
      {data && selectTask && (
        <BasicModalWindow onClick={onClick}>
          <ModalTask exerciseTask={selectTask} />
        </BasicModalWindow>
      )}
      <ExercisesListWrapper>
        {data &&
          data.map(({ _id, name, bodyPart, target, burnedCalories, time, equipment }) => {
            return (
              <ExerciseWrapper key={_id}>
                <ExerciseHeaderWrapper>
                  <CardHeaderTypeWrapper>WORKOUT</CardHeaderTypeWrapper>
                  <CardHeaderButtonWrapper onClick={() => onShowModal({ _id, name, bodyPart, target, equipment, time, burnedCalories })}>
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
    </>
  );
};

export default ExercisesList;
