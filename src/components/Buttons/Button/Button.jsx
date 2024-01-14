import { Link } from 'react-router-dom';
import { ButtonElement } from './Button.styled';

const Button = ({ to, border, size, full, blank, disabled, width, onClick, children }) => {
  const buttonClasses = {
    big: size === 'big',
    small: size === 'small',
    border_invers: border === 'invers',
    border: border,
    full: full,
  };

  const currentButtonClasses = Object.keys(buttonClasses)
    .filter((key) => buttonClasses[key])
    .join(' ');

  const buttonMarkup = to ? (
    <Link to={to} target={blank ? '_blank' : undefined}>
      <span>{children}</span>
    </Link>
  ) : onClick ? (
    <button type="button" disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </button>
  ) : (
    <button type="submit" disabled={disabled}>
      <span>{children}</span>
    </button>
  );

  return (
    <ButtonElement width={width} className={currentButtonClasses}>
      {buttonMarkup}
    </ButtonElement>
  );
};

export default Button;
