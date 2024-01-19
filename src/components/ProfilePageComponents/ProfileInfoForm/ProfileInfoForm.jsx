import { Form, Fieldset, Input } from 'components/Forms';
import { Button, ButtonsList } from 'components/Buttons';

const ProfileInfoForm = () => {
  const handleSubmit = (e) => {
    const form = e.target;
    console.log(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset col="2" colTablet="2" colMobil="1">
        <Input type="text" name="name" label="Name" value="Ivan" placeholder="Name" required />
        <Input type="email" name="email" label="Email" value="mirasovdev@gmail.com" placeholder="E-mail" disabled />
      </Fieldset>
      <Fieldset col="4" colTablet="4" colMobil="2">
        <Input type="number" name="height" label="Height" placeholder="0" value="" required />
        <Input type="number" name="currentWeight" label="Current Weight" placeholder="0" value="" required />
        <Input type="number" name="desiredWeight" label="Desired Weight" placeholder="0" value="" required />
        <Input type="date" name="birthday" label="Date of birth" value="" required icon="calendar" />
      </Fieldset>
      <Fieldset col="3" colTablet="3" colMobil="1">
        <Fieldset label="Blood" col="auto" colTablet="auto" colMobil="auto">
          <Input type="radio" name="blood" label="1" value="1" required />
          <Input type="radio" name="blood" label="2" value="2" required />
          <Input type="radio" name="blood" label="3" value="3" required />
          <Input type="radio" name="blood" label="4" value="4" required />
        </Fieldset>
        <Fieldset label="Sex" col="auto" colTablet="auto" colMobil="auto">
          <Input type="radio" name="sex" label="Male" value="Male" required />
          <Input type="radio" name="sex" label="Female" value="Female" required />
        </Fieldset>
      </Fieldset>
      <Fieldset label="Activity level" col="1" colTablet="1" colMobil="1">
        <Input
          type="radio"
          name="levelActivity"
          label="Sedentary lifestyle (little or no physical activity)"
          value="Sedentary lifestyle (little or no physical activity)"
          required
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Light activity (light exercises/sports 1-3 days per week)"
          value="Light activity (light exercises/sports 1-3 days per week)"
          required
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Moderately active (moderate exercises/sports 3-5 days per week)"
          value="Moderately active (moderate exercises/sports 3-5 days per week)"
          required
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Very active (intense exercises/sports 6-7 days per week)"
          value="Very active (intense exercises/sports 6-7 days per week)"
          required
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Extremely active (very strenuous exercises/sports and physical work)"
          value="Extremely active (very strenuous exercises/sports and physical work)"
          required
        />
      </Fieldset>
      <ButtonsList>
        <Button width="144" size="big">
          Send
        </Button>
      </ButtonsList>
    </Form>
  );
};

export default ProfileInfoForm;
