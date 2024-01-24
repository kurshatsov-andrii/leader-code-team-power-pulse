import MediaQuery from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Section from 'components/Section/Section';
import DiaryWidgets from '../../components/DiaryWidget/DiaryWidget';
import DaySwitch from '../../components/DiaryPageComponents/DaySwitch/DaySwitch';
import { Title } from 'components/Typography';
import { DiaryProducts } from '../../components/DiaryPageComponents/DiaryProducts/DiaryProducts';
import { DiaryExercises } from '../../components/DiaryPageComponents/DiaryExercises/DiaryExercises';
import { getDiaryList } from '../../redux/diary/operations';
import { refreshUser } from '../../redux/auth/operations';
import { DiaryWrapActivity, DiaryWrapContent, DiaryWrapTitle } from './DiaryPage.styled';
import CustomLoader from '../../components/Loader/Loader';
import { selectIsLoadingDiary } from '../../redux/diary/selectors';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'dd-MM-yyyy'));
  const isLoading = useSelector(selectIsLoadingDiary);

  const handleDateChange = (date) => {
    const newDate = format(date, 'dd-MM-yyyy');
    setSelectedDate(newDate);
  };

  useEffect(() => {
    dispatch(getDiaryList(selectedDate));
  }, [dispatch, selectedDate]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      <Section>
        <DiaryWrapTitle>
          <Title tag={'h3'} size={'h3'}>
            Diary
          </Title>
          <DaySwitch onDateChange={handleDateChange} />
        </DiaryWrapTitle>
        <MediaQuery maxWidth={765}>
          <DiaryWidgets />
        </MediaQuery>
        <DiaryWrapContent>
          <DiaryWrapActivity>
            <DiaryProducts />
            <DiaryExercises />
          </DiaryWrapActivity>
          <MediaQuery minWidth={768}>
            <DiaryWidgets />
          </MediaQuery>
        </DiaryWrapContent>
      </Section>
    </>
  );
};

export default DiaryPage;
