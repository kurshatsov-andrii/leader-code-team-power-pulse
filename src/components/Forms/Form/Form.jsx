import { CustomForm } from './Form.styled';
import { validateForm } from './FormValidation';

const Form = ({ enctype, children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(e.target);
    if (formErrors > 0) {
      return;
    }
    onSubmit && onSubmit(e);
  };

  return (
    <CustomForm action="#" noValidate onSubmit={handleSubmit} enctype={enctype}>
      {children}
    </CustomForm>
  );
};

export default Form;
