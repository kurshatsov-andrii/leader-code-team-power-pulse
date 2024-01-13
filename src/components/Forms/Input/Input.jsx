import { useState, useEffect } from 'react';
import { InputText } from 'components/Forms';
import { validateInput } from './InputValidation';

// import { InputCheckbox, InputHidden, InputRadio, InputSelect, InputText, InputTextarea } from '../InputTypes';

const Input = ({ type, name, required, label, placeholder, value = '', min, max, icon, validation = '', onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [validateText, setValidateText] = useState(validation);
  //   options, checked = false
  //  const [inputChecked, setInputChecked] = useState(checked);

  useEffect(() => {
    console.log(validation);
  }, [validation]);

  const handleChange = (e) => {
    if (required) {
      const validateResult = validateInput(e.target);
      setValidateText(validateResult);
    }
    //  const validateResult = validateInput(e.target);
    //  setValidateText(validateResult);

    //  if (validateResult && validateResult === '') {
    //    setValidateText(`Success ${e.target.name}`);
    //  } else {
    //    setValidateText(validateResult);
    //  }

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
        validation={validateText}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
