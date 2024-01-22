import { clearAllValidations } from '../../Forms/Form/FormValidation.js';
import { Form, Fieldset, Input } from 'components/Forms';
import { Button, ButtonsList } from 'components/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateUser } from '../../../redux/auth/operations';
import { refreshUser } from '../../../redux/auth/operations';
import { getUserProfile } from '../../../redux/userProfile/operations';

const ProfileInfoForm = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userHeight, setUserHeight] = useState('');
  const [userCurrentWeight, setUserCurrentWeight] = useState('');
  const [userDesiredWeight, setUserDesiredWeight] = useState('');
  const [userBirthday, setUserBirthday] = useState(new Date());
  const [userBlood, setUserBlood] = useState(0);
  const [userSex, setUserSex] = useState('');
  const [userLevelActivity, setUserLevelActivity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
      setUserEmail(userData.email);
      setUserHeight(userData.height);
      setUserCurrentWeight(userData.currentWeight);
      setUserDesiredWeight(userData.desiredWeight);
      setUserBirthday(userData.birthday);
      setUserBlood(userData.blood);
      setUserSex(userData.sex);
      setUserLevelActivity(userData.levelActivity);
    }
  }, [userData]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const form = e.target;
    const updateData = {};
    new FormData(form).forEach((value, key) => {
      updateData[key] = value;
    });
    try {
      await dispatch(updateUser(updateData));
      await dispatch(getUserProfile());
      await dispatch(refreshUser());
    } finally {
      clearAllValidations(form);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} isloading={isLoading}>
      <Fieldset col="2" colTablet="2" colMobil="1">
        <Input type="text" name="name" label="Name" value={userName} placeholder="Name" required />
        <Input type="email" name="email" label="Email" value={userEmail} placeholder="E-mail" disabled />
      </Fieldset>
      <Fieldset col="4" colTablet="4" colMobil="2">
        <Input type="number" name="height" label="Height" placeholder="0" min="35" value={userHeight === 0 ? '' : userHeight} required />
        <Input
          type="number"
          name="currentWeight"
          label="Current Weight"
          placeholder="0"
          min="35"
          value={userCurrentWeight === 0 ? '' : userCurrentWeight}
          required
        />
        <Input
          type="number"
          name="desiredWeight"
          label="Desired Weight"
          placeholder="0"
          min="35"
          value={userDesiredWeight === 0 ? '' : userDesiredWeight}
          required
        />
        <Input type="date" name="birthday" label="Date of birth" value={userBirthday} required icon="calendar" />
      </Fieldset>
      <Fieldset col="3" colTablet="3" colMobil="1">
        <Fieldset label="Blood" col="auto" colTablet="auto" colMobil="auto">
          <Input
            type="radio"
            name="blood"
            label="1"
            value="1"
            required={userBlood === 0 ? 'required' : undefined}
            checked={userBlood === 1 ? true : undefined}
          />
          <Input
            type="radio"
            name="blood"
            label="2"
            value="2"
            required={userBlood === 0 ? 'required' : undefined}
            checked={userBlood === 2 ? true : undefined}
          />
          <Input
            type="radio"
            name="blood"
            label="3"
            value="3"
            required={userBlood === 0 ? 'required' : undefined}
            checked={userBlood === 3 ? true : undefined}
          />
          <Input
            type="radio"
            name="blood"
            label="4"
            value="4"
            required={userBlood === 0 ? 'required' : undefined}
            checked={userBlood === 4 ? true : undefined}
          />
        </Fieldset>
        <Fieldset label="Sex" col="auto" colTablet="auto" colMobil="auto">
          <Input
            type="radio"
            name="sex"
            label="Male"
            value="male"
            required={userSex === '' ? 'required' : undefined}
            checked={userSex === 'male' ? true : undefined}
          />
          <Input
            type="radio"
            name="sex"
            label="Female"
            value="female"
            required={userSex === '' ? 'required' : undefined}
            checked={userSex === 'female' ? true : undefined}
          />
        </Fieldset>
      </Fieldset>
      <Fieldset label="Activity level" col="1" colTablet="1" colMobil="1">
        <Input
          type="radio"
          name="levelActivity"
          label="Sedentary lifestyle (little or no physical activity)"
          value="1"
          required={userLevelActivity === 0 ? 'required' : undefined}
          checked={userLevelActivity === 1 ? true : undefined}
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Light activity (light exercises/sports 1-3 days per week)"
          value="2"
          required={userLevelActivity === 0 ? 'required' : undefined}
          checked={userLevelActivity === 2 ? true : undefined}
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Moderately active (moderate exercises/sports 3-5 days per week)"
          value="3"
          required={userLevelActivity === 0 ? 'required' : undefined}
          checked={userLevelActivity === 3 ? true : undefined}
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Very active (intense exercises/sports 6-7 days per week)"
          value="4"
          required={userLevelActivity === 0 ? 'required' : undefined}
          checked={userLevelActivity === 4 ? true : undefined}
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Extremely active (very strenuous exercises/sports and physical work)"
          value="5"
          required={userLevelActivity === 0 ? 'required' : undefined}
          checked={userLevelActivity === 5 ? true : undefined}
        />
      </Fieldset>
      <ButtonsList>
        <Button width="144" size="big">
          Save
        </Button>
      </ButtonsList>
    </Form>
  );
};

export default ProfileInfoForm;
