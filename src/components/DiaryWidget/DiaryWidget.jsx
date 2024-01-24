import { StatisticsItem, UserStatistics, TextEl, StatisticsItemLable, AlarmWrapper, StatisticsSection } from './DiaryWidget.styled';
import { Title } from 'components/Typography';
import Icon from '../Icon/Icon';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectCalories, selectDoneExercisesTime, selectBurnedCalories } from '../../redux/diary/selectors';
import { selectUsers } from '../../redux/auth/selectors';

const DiaryWidgets = () => {
  const user = useSelector(selectUsers);
  let bmr = 0;
  let targetTime = 0;
  if (user) {
    bmr = user.bmr;
    targetTime = user.targetTime;
  }
  const consumedCalories = useSelector(selectCalories);
  const burnedCalories = useSelector(selectBurnedCalories);
  const timeExercise = useSelector(selectDoneExercisesTime);
  const caloriesRemaining = bmr - consumedCalories;
  const timeInMinutes = Math.round(timeExercise / 60);
  const sportsRemaining = targetTime > timeInMinutes ? targetTime - timeInMinutes : timeInMinutes - targetTime;

  return (
    <StatisticsSection>
      {user && (
        <>
          <UserStatistics>
            <StatisticsItem color="var(--orange-color)">
              <StatisticsItemLable>
                <Icon name={'knife'} />
                <TextEl color="rgba(239, 237, 232, 0.80)">Daily calorie intake</TextEl>
              </StatisticsItemLable>

              <Title size="h4">{bmr}</Title>
            </StatisticsItem>

            <StatisticsItem color="var(--orange-color)">
              <StatisticsItemLable>
                <Icon name={'dumbbell'} />
                <TextEl color="rgba(239, 237, 232, 0.80)">Daily physical activity</TextEl>
              </StatisticsItemLable>

              <Title size="h4">{targetTime} min</Title>
            </StatisticsItem>

            <StatisticsItem color="rgba(239, 237, 232, 0.05)">
              <StatisticsItemLable>
                <Icon name={'apple'} />
                <TextEl color="rgba(239, 237, 232, 0.40)">Сalories consumed</TextEl>
              </StatisticsItemLable>

              <Title size="h4">{consumedCalories}</Title>
            </StatisticsItem>

            <StatisticsItem color="rgba(239, 237, 232, 0.05)">
              <StatisticsItemLable>
                <Icon name={'fire'} />
                <TextEl color="rgba(239, 237, 232, 0.40)">Сalories burned</TextEl>
              </StatisticsItemLable>

              <Title size="h4">{burnedCalories}</Title>
            </StatisticsItem>

            <StatisticsItem color="rgba(239, 237, 232, 0.05)" $border={consumedCalories > bmr ? '#E9101D' : undefined}>
              <StatisticsItemLable>
                <Icon name={'bubbles'} />
                <TextEl color="rgba(239, 237, 232, 0.40)">Calories remaining</TextEl>
              </StatisticsItemLable>

              <Title size="h4">{caloriesRemaining}</Title>
            </StatisticsItem>

            <StatisticsItem color={'rgba(239, 237, 232, 0.05)'} $border={timeInMinutes > targetTime ? '#3CBF61' : undefined}>
              <StatisticsItemLable>
                <Icon name={'runner'} />
                <TextEl color="rgba(239, 237, 232, 0.40)">Sports remaining</TextEl>
              </StatisticsItemLable>
              <Title size="h4">{timeInMinutes > targetTime ? `+${sportsRemaining}` : `${sportsRemaining}`} min</Title>
            </StatisticsItem>
          </UserStatistics>

          <AlarmWrapper>
            <div style={{ width: '24px', height: '24px' }}>
              <Icon name={'alarm'} size={24} />
            </div>

            <MediaQuery maxWidth={767}>
              <TextEl size="14px" color="rgba(239, 237, 232, 0.30)" $lineheight="1.28">
                Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices.
              </TextEl>
            </MediaQuery>

            <MediaQuery minWidth={768}>
              <TextEl size="16px" color="rgba(239, 237, 232, 0.30)">
                Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices.
              </TextEl>
            </MediaQuery>
          </AlarmWrapper>
        </>
      )}
    </StatisticsSection>
  );
};

export default DiaryWidgets;
