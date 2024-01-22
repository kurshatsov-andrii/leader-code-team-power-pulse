const nameRegex = /[^A-zА-яЁё+ ()-]/;
const passwordRegex = /^.{6,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const errors = {
  empty: 'This field is empty!',
  name: 'The name cannot contain numbers',
  phone: 'Wrong Phone format!',
  email: 'Wrong E-Mail format!',
  checkbox: 'This field is required!',
  radio: 'Select one of the values',
  max: 'Maximum is: ',
  min: 'Minimum is:',
  password: 'Can be from 6 to 16 characters',
  maxLange: 'Field must be no more than ',
  minLange: 'Field must be at least ',
};

export const validateInput = (input) => {
  const currentInput = input;
  let validationResult = `Success ${currentInput.name}`;
  const fieldsetWrapper = currentInput.closest('fieldset');
  const labelWrapper = currentInput.type === 'radio' ? fieldsetWrapper : currentInput.closest('label');
  const wrapper = labelWrapper || fieldsetWrapper;
  wrapper.classList.remove('invalid');
  wrapper.classList.add('valid');

  const addErrorMarkup = (text) => {
    const errorMarkup = wrapper.querySelector('em');
    if (errorMarkup) {
      errorMarkup.innerHTML = `<em><svg width="14" height="14" view-box="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99998 13.6666C3.31798 13.6666 0.333313 10.682 0.333313 6.99998C0.333313 3.31798 3.31798 0.333313 6.99998 0.333313C10.682 0.333313 13.6666 3.31798 13.6666 6.99998C13.6666 10.682 10.682 13.6666 6.99998 13.6666ZM6.22931 9.98998L10.9426 5.27598L9.99998 4.33331L6.22931 8.10465L4.34331 6.21865L3.40065 7.16131L6.22931 9.98998Z" fill='currentColor'></path></svg>${text}</em>`;
      return;
    }
    wrapper.insertAdjacentHTML(
      'beforeend',
      `<em><svg width="14" height="14" view-box="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99998 13.6666C3.31798 13.6666 0.333313 10.682 0.333313 6.99998C0.333313 3.31798 3.31798 0.333313 6.99998 0.333313C10.682 0.333313 13.6666 3.31798 13.6666 6.99998C13.6666 10.682 10.682 13.6666 6.99998 13.6666ZM6.22931 9.98998L10.9426 5.27598L9.99998 4.33331L6.22931 8.10465L4.34331 6.21865L3.40065 7.16131L6.22931 9.98998Z" fill='currentColor'></path></svg>${text}</em>`
    );
  };

  addErrorMarkup(validationResult);

  // add Error
  const addError = (text) => {
    validationResult = text;
    addErrorMarkup(text);
    wrapper.classList.remove('valid');
    wrapper.classList.add('invalid');
  };

  // radios in grup validate
  const radiosValidate = () => {
    const allRadios = wrapper.querySelectorAll('input[type="radio"]');
    const checkedRadios = wrapper.querySelectorAll('input[type="radio"]:checked');

    if (checkedRadios.length) {
      allRadios.forEach((radio) => {
        radio.classList.remove('invalid');
        radio.removeAttribute('required');
      });
      wrapper.querySelector('em').remove();
      return;
    }
    addError(errors.radio);
  };

  // validate inputs by type
  if (!currentInput.value.length) {
    addError(errors.empty);
  } else {
    if (currentInput.type === 'number') {
      if (currentInput.min && Number(currentInput.value) < currentInput.min) {
        addError(`${errors.min} ${currentInput.min}`);
      }
      if (currentInput.max && Number(currentInput.value) > currentInput.max) {
        addError(`${errors.max} ${currentInput.max}`);
      }
    } else {
      if (currentInput.name === 'password' && !passwordRegex.test(currentInput.value)) {
        addError(errors.password);
      }
      if (currentInput.min && Number(currentInput.value.length) < currentInput.min) {
        addError(`${errors.minLange} ${currentInput.min} characters`);
      }
      if (currentInput.max && Number(currentInput.value.length) > currentInput.max) {
        addError(`${errors.maxLange} ${currentInput.max} characters`);
      }
      //Name
      if (currentInput.name === 'name' && nameRegex.test(currentInput.value)) {
        addError(errors.name);
      }
      //email
      if (currentInput.type === 'email' && !emailRegex.test(currentInput.value)) {
        addError(errors.email);
      }
      //radio
      if (currentInput.type === 'radio') {
        radiosValidate();
      }
    }
  }

  return validationResult;
};

export const clearErrorInputs = (input) => {
  const currentInput = input;
  const fieldsetWrapper = currentInput.closest('fieldset');
  const labelWrapper = currentInput.type === 'radio' ? fieldsetWrapper : currentInput.closest('label');
  const wrapper = labelWrapper || fieldsetWrapper;
  const errorMarkup = wrapper.querySelector('em');
  wrapper.classList.remove('invalid');
  wrapper.classList.remove('valid');
  if (errorMarkup) {
    errorMarkup.remove();
  }
};
