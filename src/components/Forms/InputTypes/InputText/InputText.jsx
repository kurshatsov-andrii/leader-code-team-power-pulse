import { Label, LabelText, InputWrapper, InputIcon, Input, ValidateText } from './InputText.styled';
import Icon from 'components/Icon/Icon';

const InputText = ({ type, name, value, required, placeholder, min, max, label, icon, validation, onChange }) => {
  return (
    <Label>
      {label && <LabelText>{label}</LabelText>}
      <InputWrapper>
        <Input
          type={type}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          data-icon={icon}
          onChange={onChange}
        />
        {icon && (
          <InputIcon>
            <Icon name={icon} />
          </InputIcon>
        )}
      </InputWrapper>
      {validation && (
        <ValidateText>
          <Icon name="validation" />
          {validation}
        </ValidateText>
      )}
    </Label>
  );
};

export default InputText;
