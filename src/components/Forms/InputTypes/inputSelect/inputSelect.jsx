import Icon from 'components/Icon/Icon';
import { useState, useEffect, useRef } from 'react';
import { LabelText, InputWrapper, Input } from '../InputText/InputText.styled';
import { SelectLabel, SelectIcon, Area, Options } from './InputSelect.styled';
import { validateInput } from '../../Input/InputValidation';

const InputSelect = ({ type, name, label, placeholder, required, options, onChange }) => {
  const [selectValue, setSelectValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectInputRef = useRef(null);
  const selectWrapperRef = useRef(null);

  useEffect(() => {
    if (selectValue) {
      required && validateInput(selectInputRef.current);
      onChange(selectInputRef.current);
    }
  }, [selectValue, onChange, required]);

  const handleOptionClick = (option) => {
    setSelectValue(option);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (selectWrapperRef.current && !selectWrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    //   isOpen должен падать на Label
    <SelectLabel className={isOpen === true ? 'open' : ''} onClick={handleOpen} ref={selectWrapperRef}>
      {label && <LabelText>{label}</LabelText>}
      <InputWrapper>
        <Input type={type} name={name} required={required} placeholder={placeholder} value={selectValue} onChange={onChange} ref={selectInputRef} />
        <SelectIcon>
          <Icon name="arrow" size="12" />
        </SelectIcon>
        <Area />
        <Options>
          <ul>
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </Options>
      </InputWrapper>
    </SelectLabel>
  );
};

export default InputSelect;
