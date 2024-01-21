import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Icon from '../../../Icon/Icon';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarGlobalStyles, Label, InputWrapper, InputIcon, LabelText } from './InputDate.styled';

const InputDate = ({ label, name, value }) => {
  const [startDate, setStartDate] = useState(new Date(value));

  return (
    <>
      <Label>
        {label && <LabelText>{label}</LabelText>}
        <InputWrapper>
          <DatePicker name={name} selected={startDate} onChange={(date) => setStartDate(date)} />
          <InputIcon>
            <Icon name="calendar" />
          </InputIcon>
        </InputWrapper>
      </Label>
      <CalendarGlobalStyles />
    </>
  );
};

export default InputDate;
