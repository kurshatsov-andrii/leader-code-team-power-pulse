import { SubmitButton } from './ButtonModalSubmit.styled';

export const ButtonModalSubmit = ({ onSubmit, isPause, children }) => {
  return (
    <SubmitButton onClick={onSubmit} disabled={!isPause}>
      {children}
    </SubmitButton>
  );
};
