import { IconButton } from './ButtonModalIcon.styled';
export const ButtonModalIcon = ({ children, type, onClick }) => {
  return (
    <IconButton type={type} onClick={onClick}>
      {children}
    </IconButton>
  );
};
