import { RadioWrapper, Radio, RadioLabel, Mark } from '../InputRadio/InputRadio.styled';
import { useState, useEffect } from 'react';
import { validateInput } from '../../Input/InputValidation';

const InputRadio = ({ type, name, label, value, required = false, checked, onChange }) => {
  const [inputChecked, setInputChecked] = useState(checked);

  useEffect(() => {
    setInputChecked(checked);
  }, [checked]);

  const handleChange = (e) => {
    validateInput(e.target);
    if (onChange) {
      onChange(!inputChecked);
    }
  };

  return (
    <RadioWrapper>
      <Radio type={type} name={name} value={value} required={required} checked={inputChecked} onChange={handleChange} />
      {label && <RadioLabel>{label}</RadioLabel>}
      <Mark className={`Mark mark-${type}`}></Mark>
    </RadioWrapper>
  );
};

export default InputRadio;
