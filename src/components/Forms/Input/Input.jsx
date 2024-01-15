import { useState } from 'react';
import { InputText, InputPassword, InputHidden, InputSelecte } from 'components/Forms';
import { validateInput } from './InputValidation';

const Input = ({ type, name, required, label, placeholder, value = '', min, max, icon, options, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  // const [inputChecked, setInputChecked] = useState(checked);

  const handleChange = (e) => {
    if (required) {
      validateInput(e.target);
    }
    setInputValue(e.target.value);
    //  setInputChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      {type === 'hidden' ? (
        <InputHidden type={type} name={name} value={inputValue} />
      ) : type === 'password' ? (
        <InputPassword
          type={type}
          name={name}
          value={inputValue}
          label={label}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
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
        />
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
        />
      )}
    </>
  );
};

export default Input;
