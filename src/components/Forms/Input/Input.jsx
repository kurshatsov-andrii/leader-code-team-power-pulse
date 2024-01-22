import { useState, useEffect } from 'react';
import { InputText, InputPassword, InputHidden, InputSelecte, InputRadio, InputFile, InputDate } from 'components/Forms';
import { validateInput } from './InputValidation';

const Input = ({ type, name, required, label, placeholder, value = '', checked = false, min, max, icon, options, onChange, disabled }) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputChecked, setInputChecked] = useState(checked);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setInputChecked(checked);
  }, [checked]);

  const handleChange = (e) => {
    if (required) {
      validateInput(e.target);
    }
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleRadioChange = (newChecked) => {
    console.log(newChecked);
    setInputChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <>
      {type === 'hidden' ? (
        <InputHidden type={type} name={name} value={inputValue} />
      ) : type === 'radio' ? (
        <InputRadio
          type={type}
          name={name}
          label={label}
          value={inputValue}
          required={required}
          checked={inputChecked}
          onChange={handleRadioChange}
        />
      ) : type === 'file' ? (
        <InputFile type={type} name={name} value={inputValue} onChange={onChange} />
      ) : type === 'password' ? (
        <InputPassword
          type={type}
          name={name}
          value={inputValue}
          label={label}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          disabled={disabled}
        />
      ) : type === 'select' ? (
        <InputSelecte
          type={type}
          name={name}
          value={inputValue}
          label={label}
          placeholder={placeholder}
          required={required}
          options={options}
          onChange={onChange}
          disabled={disabled}
        />
      ) : type === 'date' ? (
        <InputDate label={label} name={name} value={value} onChange={onChange} />
      ) : (
        <InputText
          type={type}
          name={name}
          label={label}
          value={inputValue}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          icon={icon}
          onChange={handleChange}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default Input;
