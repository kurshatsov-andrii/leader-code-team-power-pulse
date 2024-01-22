import { Label, LabelText, InputWrapper, InputIcon, Input } from './InputText.styled';
import Icon from 'components/Icon/Icon';

const InputText = ({ type, name, label, value, placeholder, min, max, icon, required, onChange, disabled }) => {
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
          onChange={onChange} // Важно использовать onChange, чтобы обновлять значение внешнего компонента
          disabled={disabled}
        />
        {icon && (
          <InputIcon>
            <Icon name={icon} />
          </InputIcon>
        )}
      </InputWrapper>
    </Label>
  );
};

export default InputText;
