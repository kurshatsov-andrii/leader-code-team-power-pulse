import { RadioWrapper, Radio, RadioLabel, Mark } from '../InputRadio/InputRadio.styled';

const InputRadio = ({ type, name, label, value, required, checked, onChange }) => {
  return (
    <RadioWrapper>
      <Radio type={type} name={name} value={value} required={required} checked={checked} onChange={onChange} />
      {label && <RadioLabel>{label}</RadioLabel>}
      <Mark className={`Mark mark-${type}`}></Mark>
    </RadioWrapper>
  );
};

export default InputRadio;
