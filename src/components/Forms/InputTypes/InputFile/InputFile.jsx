import { File } from './InputFile.styled';
import Avatar from '../../../Avatar/Avatar';
import Icon from '../../../Icon/Icon';

const InputFile = ({ type, name, avatar }) => {
  return (
    <File>
      <input type={type} name={name} />
      <Avatar foto={avatar} />
      <Icon name="avatar_plus" />
    </File>
  );
};

export default InputFile;
