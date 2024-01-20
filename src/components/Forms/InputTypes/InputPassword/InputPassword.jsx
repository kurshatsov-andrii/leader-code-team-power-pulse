import { Label, LabelText, InputWrapper, InputIcon, Input } from '../InputText/InputText.styled';
import Icon from 'components/Icon/Icon';
import { useState, useEffect } from 'react';

const InputPassword = ({ type = 'password', name, label, value, placeholder, min, icon = 'password', max, required, onChange, disabled }) => {
  const [isVisible, setIsVisible] = useState(icon);
  const [customType, setCustomType] = useState(type);

  useEffect(() => {
    if (isVisible === 'password') {
      setCustomType('password');
      return;
    }
    setCustomType('text');
  }, [isVisible]);

  const handleIconToggle = () => {
    if (isVisible === 'password') {
      setIsVisible('password2');
      return;
    }
    setIsVisible('password');
  };

  return (
    <Label>
      {label && <LabelText>{label}</LabelText>}
      <InputWrapper>
        <Input
          type={customType}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          onChange={onChange}
          disabled={disabled}
        />
        <InputIcon onClick={handleIconToggle}>
          <Icon name={isVisible} />
        </InputIcon>
      </InputWrapper>
    </Label>
  );
};

export default InputPassword;
