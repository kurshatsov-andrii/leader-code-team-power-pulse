import Icon from 'components/Icon/Icon';
import { useState, useEffect, useRef } from 'react';
import { LabelText, InputWrapper, Input } from '../InputText/InputText.styled';
import { SelectLabel, SelectIcon, Area, Options } from './InputSelecte.styled';
import { validateInput } from '../../Input/InputValidation';

const InputSelect = ({ type, name, label, placeholder, required, options, onChange }) => {
  const [selectValue, setSelectValue] = useState('');
  const [selectLabel, setSelectLabel] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [prevSelectValue, setPrevSelectValue] = useState('');
  const selectInputRef = useRef(null);
  const selectWrapperRef = useRef(null);

  useEffect(() => {
    required && validateInput(selectInputRef.current);
    if (selectValue !== '' && selectInputRef.current && prevSelectValue !== selectValue) {
      onChange && onChange(selectInputRef.current);
      setPrevSelectValue(selectValue);
    }
  }, [selectValue, onChange, required, prevSelectValue]);

  const handleOptionClick = (value, label) => {
    setSelectValue(value);
    setSelectLabel(label);
    setIsSelected(true);
    onChange({ target: { name, value } }); // Симулируем объект события, как это делает обычный input
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
    <SelectLabel className={isOpen === true ? 'open' : ''} onClick={handleOpen} data-selected={isSelected} ref={selectWrapperRef}>
      {label && <LabelText>{label}</LabelText>}
      <InputWrapper>
        <Input type={type} name={name} required={required} placeholder={placeholder} defaultValue={selectValue} ref={selectInputRef} />
        <SelectIcon>
          <Icon name="arrow" size="12" />
        </SelectIcon>
        <Area data-label={selectLabel}>{selectLabel}</Area>
        <Options>
          <ul>
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option.value, option.label)}>
                {option.label}
              </li>
            ))}
          </ul>
        </Options>
      </InputWrapper>
    </SelectLabel>
  );
};

export default InputSelect;
