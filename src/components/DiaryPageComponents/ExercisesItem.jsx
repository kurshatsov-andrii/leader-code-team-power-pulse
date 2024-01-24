import { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExercise } from '../../redux/diary/operations';
import { DiaryCard, DescriptionItem, DiarySupTitle, ValueBox, WrapLastDescrBox, TrashIconWrapper, DiaryTrashButton } from './Diary.styled';
import { selectDiaryDate } from '../../redux/diary/selectors';

export const ExercisesItem = ({ workout }) => {
  const {
    calories,
    time,
    exerciseId: { _id, bodyPart, equipment, name, target },
  } = workout;
  const [points, setPoints] = useState(window.innerWidth);
  const handleResize = () => setPoints(window.innerWidth);
  const date = useSelector(selectDiaryDate);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dispatch = useDispatch();

  const deleteWorkoutItem = (exerciseDetails) => {
    dispatch(deleteExercise(exerciseDetails));
  };

  return (
    <DiaryCard key={_id}>
      <DescriptionItem>
        <DiarySupTitle>Body Part</DiarySupTitle>
        <ValueBox width={points < 1440 && points >= 768 ? '90px' : points >= 1440 ? '115px' : '100%'}>{bodyPart}</ValueBox>
      </DescriptionItem>
      <DescriptionItem>
        <DiarySupTitle>Equipment</DiarySupTitle>
        <ValueBox width={points < 1440 && points >= 768 ? '132px' : points >= 1440 ? '157px' : '100%'}>{equipment}</ValueBox>
      </DescriptionItem>
      <DescriptionItem>
        <DiarySupTitle>Name</DiarySupTitle>
        <ValueBox width={points < 1440 && points >= 768 ? '128px' : points >= 1440 ? '131px' : '100%'}>{name}</ValueBox>
      </DescriptionItem>
      <WrapLastDescrBox>
        <DescriptionItem>
          <DiarySupTitle>Target</DiarySupTitle>
          <ValueBox $maxwidth="81px" width={points < 1440 && points >= 768 ? '84px' : points >= 1440 ? '106px' : '100%'}>
            {target}
          </ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle size="80px">Burned Calories</DiarySupTitle>
          <ValueBox $maxwidth="80px" width={points < 1440 && points >= 768 ? '78px' : points >= 1440 ? '91px' : '100%'}>
            {calories}
          </ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle>Time</DiarySupTitle>
          <ValueBox $maxwidth="76px" width={points < 1440 && points >= 768 ? '72px' : points >= 1440 ? '82px' : '100%'}>
            {time}
          </ValueBox>
        </DescriptionItem>
        <DiaryTrashButton type="button" onClick={() => deleteWorkoutItem({ id: _id, date })}>
          <TrashIconWrapper>
            <use href={`${sprite}#icon-trash`} />
          </TrashIconWrapper>
        </DiaryTrashButton>
      </WrapLastDescrBox>
    </DiaryCard>
  );
};
