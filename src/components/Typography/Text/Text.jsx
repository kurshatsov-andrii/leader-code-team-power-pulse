import { TextEl } from './Text.styled';

const Text = ({ color = 'inherit', size, children }) => {
  return (
    <TextEl data-color={color} data-size={size}>
      {children}
    </TextEl>
  );
};

export default Text;
