import { validateInput, clearErrorInputs } from '../Input/InputValidation';

export const validateForm = (form) => {
  let errorsCount = 0;
  const formData = form.querySelectorAll('[required]');
  formData.forEach((input) => {
    const error = validateInput(input);

    if (!error.includes('Success')) {
      errorsCount += 1;
    }
  });
  return errorsCount;
};

export const clearAllInputs = (form) => {
  const formData = form.querySelectorAll('input');
  formData.forEach((input) => {
    if (input.type !== 'hidden') {
      input.value = '';
      const wrapper = input.type === 'radio' ? input.closest('fieldset') : input.closest('label');
      const errorText = wrapper.querySelector('em');
      wrapper.classList.remove('valid', 'invalid');
      errorText && errorText.remove();
    }
  });
};

export const clearAllValidations = (form) => {
  const formData = form.querySelectorAll('input');
  formData.forEach((input) => {
    if (input.type !== 'hidden') {
      clearErrorInputs(input);
    }
  });
};
