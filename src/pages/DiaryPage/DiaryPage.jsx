import Section from 'components/Section/Section';
import { Title } from 'components/Typography';
import DiaryWidgets from '../../components/DiaryWidget/DiaryWidget';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import DaySwitch from '../../components/DiaryPageComponents/DaySwitch/DaySwitch';
import { DiaryProducts } from '../../components/DiaryPageComponents/DiaryProducts/DiaryProducts';
import { DiaryExercises } from '../../components/DiaryPageComponents/DiaryExercises/DiaryExercises';
import { getDiaryList } from '../../redux/diary/operations';
import { selectCalories } from '../../redux/diary/selectors';
import { selectUsers } from '../../redux/auth/selectors';
import { DiaryWrapActivity, DiaryWrapContent, DiaryWrapTitle } from './DiaryPage.styled';
import MediaQuery from 'react-responsive';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'dd-MM-yyyy'));
  const { bmr, targetTime } = useSelector(selectUsers);
  const consumedCalories = useSelector(selectCalories);
  console.log(consumedCalories);

  const handleDateChange = (date) => {
    const newDate = format(date, 'dd-MM-yyyy');
    setSelectedDate(newDate);
  };

  useEffect(() => {
    dispatch(getDiaryList(selectedDate));
  }, [dispatch, getDiaryList, selectedDate]);

  return (
    <Section>
      <DiaryWrapTitle>
        <Title tag={'h3'} size={'h3'}>
          Diary
        </Title>
        <DaySwitch onDateChange={handleDateChange} />
      </DiaryWrapTitle>
      <MediaQuery maxWidth={765}>
        <DiaryWidgets bmr={bmr} targetTime={targetTime} />
      </MediaQuery>
      <DiaryWrapContent>
        <DiaryWrapActivity>
          <DiaryProducts />
          <DiaryExercises />
        </DiaryWrapActivity>
        <MediaQuery minWidth={768}>
          <DiaryWidgets bmr={bmr} targetTime={targetTime} />
        </MediaQuery>
      </DiaryWrapContent>
    </Section>
  );
};

export default DiaryPage;
