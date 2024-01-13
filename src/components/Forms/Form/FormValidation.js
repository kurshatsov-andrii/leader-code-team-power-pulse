import { validateInput } from '../Input/InputValidation';

export const validateForm = (form) => {
  let errorsCount = 0;
  const formData = form.querySelectorAll('[required]');
  formData.forEach((input) => {
    const error = validateInput(input);
    if (error) {
      errorsCount += 1;
    }
  });
  return errorsCount;
};
