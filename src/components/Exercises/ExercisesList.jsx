import { useEffect, useState } from 'react';
import api from '../../services/api';
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
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import ModalTask from './modals/ModalTask';

export const ExercisesList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectTask, setSelectTask] = useState(null);

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

  const onShowModal = (i) => {
    console.log(data[i]);
    setSelectTask(data[i]);
  };
  const onClick = () => {
    setSelectTask(null);
  };
  // equipment: 'barbell';
  // gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0049.gif';
  // time: 3;

  return (
    <>
      {data && selectTask && (
        <BasicModalWindow onClick={onClick}>
          <ModalTask exerciseTask={selectTask} />
        </BasicModalWindow>
      )}
      <ExercisesListWrapper>
        {data &&
          data.map(({ _id, name, bodyPart, target, burnedCalories }, i) => {
            return (
              <ExerciseWrapper key={_id}>
                <ExerciseHeaderWrapper>
                  <CardHeaderTypeWrapper>WORKOUT</CardHeaderTypeWrapper>
                  <CardHeaderButtonWrapper onClick={() => onShowModal(i)}>
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
