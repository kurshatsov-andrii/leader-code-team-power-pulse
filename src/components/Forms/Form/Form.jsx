import { CustomForm } from './Form.styled';
import { validateForm } from './FormValidation';

const Form = ({ isloading, enctype, children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(e.target);
    if (formErrors > 0) {
      return;
    }
    onSubmit && onSubmit(e);
  };

  return (
    <CustomForm action="#" method="post" noValidate onSubmit={handleSubmit} enctype={enctype} data-loading={isloading ? 'true' : 'false'}>
      {children}
    </CustomForm>
  );
};

export default Form;
