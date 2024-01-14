import { useState } from 'react';
import { InputText } from 'components/Forms';
import { validateInput } from './InputValidation';

// import { InputCheckbox, InputHidden, InputRadio, InputSelect, InputText, InputTextarea } from '../InputTypes';

const Input = ({ type, name, required, label, placeholder, value = '', min, max, icon, onChange }) => {
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
    </>
  );
};

export default Input;
