import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format, subDays, addDays } from 'date-fns';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  CalendarWrapper,
  IconWrapper,
  IconCalendar,
  CustomHeaderWrapper,
  IconWrapperHeader,
  HeaderData,
  CircleWrapper,
} from './DaySwitch.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../../images/sprite.svg';

const DaySwitch = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(function CustomInput({ onClick }, ref) {
    return (
      <CalendarWrapper>
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(startDate, 'dd/MM/yyyy')}
          <IconCalendar onClick={onClick} ref={ref}>
            <use href={`${sprite}#icon-calendar-orange`} />
          </IconCalendar>
        </TitleWrapper>

        <IconWrapper onClick={() => handleDateChange(subDays(startDate, 1))}>
          <use href={`${sprite}#icon-calendar-left`} />
        </IconWrapper>
        <IconWrapper onClick={() => handleDateChange(addDays(startDate, 1))}>
          <use href={`${sprite}#icon-calendar-right`} />
        </IconWrapper>
      </CalendarWrapper>
    );
  });

  const handleDateChange = (newDate) => {
    setStartDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const CustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    return (
      <CustomHeaderWrapper>
        <CircleWrapper onClick={decreaseMonth}>
          <IconWrapperHeader>
            <use href={`${sprite}#icon-calendar-left`} />
          </IconWrapperHeader>
        </CircleWrapper>
        <HeaderData>{format(date, 'MMMM yyyy')}</HeaderData>
        <CircleWrapper onClick={increaseMonth}>
          <IconWrapperHeader>
            <use href={`${sprite}#icon-calendar-right`} />
          </IconWrapperHeader>
        </CircleWrapper>
      </CustomHeaderWrapper>
    );
  };

  return (
    <>
      <DatePicker
        // minDate={new Date()}
        // maxDate={new Date()}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          onDateChange(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
        renderCustomHeader={(props) => <CustomHeader {...props} />}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default DaySwitch;
