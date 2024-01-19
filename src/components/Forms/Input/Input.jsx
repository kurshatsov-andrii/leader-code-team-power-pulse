import { useState } from 'react';
import { InputText, InputPassword, InputHidden, InputSelecte, InputRadio, InputFile } from 'components/Forms';
import { validateInput } from './InputValidation';

const Input = ({ type, name, required, label, placeholder, value = '', checked = '', min, max, icon, options, onChange, disabled, avatar }) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputChecked, setInputChecked] = useState(checked);

  const handleChange = (e) => {
    if (required) {
      validateInput(e.target);
    }

    setInputValue(e.target.value);

    if (inputChecked) {
      setInputChecked(e.target.checked);
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      {type === 'hidden' ? (
        <InputHidden type={type} name={name} value={inputValue} />
      ) : type === 'radio' ? (
        <InputRadio type={type} name={name} label={label} value={inputValue} required={required} onChange={handleChange} />
      ) : type === 'file' ? (
        <InputFile type={type} name={name} value={inputValue} onChange={onChange} avatar={avatar} />
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
