import { File } from './InputFile.styled';
import Avatar from '../../../Avatar/Avatar';
import Icon from '../../../Icon/Icon';

const InputFile = ({ type, name, onChange }) => {
  return (
    <File>
      <input type={type} name={name} onChange={onChange} />
      <Avatar />
      <Icon name="avatar_plus" />
    </File>
  );
};

export default InputFile;
