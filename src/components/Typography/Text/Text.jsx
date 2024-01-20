import { TextEl } from './Text.styled';
import Icon from '../../Icon/Icon';

const Text = ({ color = 'inherit', size, align, icon, children }) => {
  return (
    <TextEl data-color={color} data-size={size} data-center={align} data-icon={icon}>
      {icon && <Icon name={icon} />}
      {children}
    </TextEl>
  );
};

export default Text;
