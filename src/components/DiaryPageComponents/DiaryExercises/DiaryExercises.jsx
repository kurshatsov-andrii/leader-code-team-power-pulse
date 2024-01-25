import { useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { selectDiaryExercises } from '../../../redux/diary/selectors';
import { ExercisesItem } from '../ExercisesItem';
import {
  DiarySections,
  DiaryTitle,
  DiaryLink,
  NextIconWrapper,
  WrapTitlesTablet,
  DiarySupTitleTablet,
  DiaryLists,
  SectionsWrapTitle,
  EmptyText,
} from '../Diary.styled';

export const DiaryExercises = () => {
  const exercises = useSelector(selectDiaryExercises);
  const navigate = useNavigate();

  return (
    <DiarySections height="1066px">
      <SectionsWrapTitle>
        <DiaryTitle>Exercises</DiaryTitle>
        <DiaryLink onClick={() => navigate('/exercises')}>
          Add exercise
          <NextIconWrapper>
            <use href={`${sprite}#icon-arrow-right`} />
          </NextIconWrapper>
        </DiaryLink>
      </SectionsWrapTitle>

      {exercises.length !== 0 ? (
        <>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <WrapTitlesTablet>
              <DiarySupTitleTablet width="90px">Body Part</DiarySupTitleTablet>
              <DiarySupTitleTablet width="132px">Equipment</DiarySupTitleTablet>
              <DiarySupTitleTablet width="128px">Name</DiarySupTitleTablet>
              <DiarySupTitleTablet width="84px">Target</DiarySupTitleTablet>
              <DiarySupTitleTablet width="78px">Burned Calories</DiarySupTitleTablet>
              <DiarySupTitleTablet width="72px">Time</DiarySupTitleTablet>
            </WrapTitlesTablet>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <WrapTitlesTablet>
              <DiarySupTitleTablet width="115px">Body Part</DiarySupTitleTablet>
              <DiarySupTitleTablet width="157px">Equipment</DiarySupTitleTablet>
              <DiarySupTitleTablet width="131px">Name</DiarySupTitleTablet>
              <DiarySupTitleTablet width="106px">Target</DiarySupTitleTablet>
              <DiarySupTitleTablet width="91px">Burned Calories</DiarySupTitleTablet>
              <DiarySupTitleTablet width="82px">Time</DiarySupTitleTablet>
            </WrapTitlesTablet>
          </MediaQuery>
          <DiaryLists>
            {exercises.map((workout) => (
              <ExercisesItem workout={workout} key={workout._id} />
            ))}
          </DiaryLists>
        </>
      ) : (
        <EmptyText>Not found exercises</EmptyText>
      )}
    </DiarySections>
  );
};
