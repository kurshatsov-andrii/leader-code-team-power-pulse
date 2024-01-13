const nameRegex = /[^A-zА-яЁё+ ()-]/;
const phoneRegex = /^\+49\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const errors = {
  empty: 'Это поле обязательно к заполнению!',
  name: 'Имя не может содержать чисел',
  phone: 'Wrong Phone format!',
  email: 'Wrong E-Mail format!',
  checkbox: 'Этот пункт обязателен!',
  radio: 'Выберите значение ',
  max: 'Максимальное кол-во:',
  min: 'Минимальное кол-во:',
  maxLange: 'Максимальное кол-во символов:',
  minLange: 'Минимальное кол-во символов:',
};

export const validateInput = (input) => {
  const currentInput = input;
  let validationResult = `Success ${currentInput.name}`;

  const wrapper = currentInput.type === 'radio' ? currentInput.closest('fieldset') : currentInput.closest('label');
  wrapper.classList.remove('invalid');
  wrapper.classList.add('valid');

  // add Error
  const addError = (text) => {
    validationResult = text;
    wrapper.classList.remove('valid');
    wrapper.classList.add('invalid');
    return validationResult;
  };

  // radios in grup validate
  // const radiosValidate = () => {
  //   const allRadios = inputWrapper.querySelectorAll('input[type="radio"]');
  //   const checkedRadios = inputWrapper.querySelectorAll('input[type="radio"]:checked');

  //   if (checkedRadios.length) {
  //     allRadios.forEach((radio) => {
  //       radio.classList.remove('invalid');
  //       radio.removeAttribute('required');
  //     });
  //     deleteErrorText();
  //     return;
  //   }
  //   addError(errors.radio);
  // };

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
      if (currentInput.min && Number(currentInput.value.length) < currentInput.min) {
        addError(`${errors.minLange} ${currentInput.min}`);
      }
      if (currentInput.max && Number(currentInput.value.length) > currentInput.max) {
        addError(`${errors.maxLange} ${currentInput.max}`);
      }
      //Name
      if (currentInput.name === 'name' && nameRegex.test(currentInput.value)) {
        addError(errors.name);
      }
      //phone
      if (currentInput.type === 'tel' && !phoneRegex.test(currentInput.value)) {
        addError(errors.phone);
      }
      //email
      if (currentInput.type === 'email' && !emailRegex.test(currentInput.value)) {
        addError(errors.email);
      }
    }
  }

  // //password
  // if (currentInput.type === 'password' && !passwordRegex.test(currentInput.value)) {
  //   addError(errors.password);
  // }
  // //checkboxes
  // if (currentInput.type === 'checkbox' && currentInput.checked === false) {
  //   addError(errors.checkbox);
  // }
  //radio
  // if (currentInput.type === 'radio') {
  //   radiosValidate();
  // }

  return validationResult;
};
