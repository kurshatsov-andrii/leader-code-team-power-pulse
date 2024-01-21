import { Form, Fieldset, Input } from 'components/Forms';
import { Button, ButtonsList } from 'components/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateUser, refreshUser } from '../../../redux/auth/operations';

const ProfileInfoForm = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  // const [userName, setUserName] = useState();
  const { profile } = useSelector((state) => state.profile);
  // useEffect(() => {
  //   if (profile) {
  //     setUserName(profile.name);
  //   }
  // }, [profile]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const form = e.target;
    const updateData = {};
    new FormData(form).forEach((value, key) => {
      updateData[key] = value;
    });

    try {
      await dispatch(updateUser(updateData));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} isloading={isLoading}>
      <Fieldset col="2" colTablet="2" colMobil="1">
        <Input type="text" name="name" label="Name" value={profile && profile.name ? profile.name : ''} placeholder="Name" required />
        <Input type="email" name="email" label="Email" value={profile && profile.email ? profile.email : ''} placeholder="E-mail" disabled />
      </Fieldset>
      <Fieldset col="4" colTablet="4" colMobil="2">
        <Input
          type="number"
          name="height"
          label="Height"
          placeholder="0"
          min="35"
          value={profile && profile.height > 0 ? profile.height : ''}
          required
        />
        <Input
          type="number"
          name="currentWeight"
          label="Current Weight"
          placeholder="0"
          min="35"
          value={profile && profile.currentWeight > 0 ? profile.currentWeight : ''}
          required
        />
        <Input
          type="number"
          name="desiredWeight"
          label="Desired Weight"
          placeholder="0"
          min="35"
          value={profile && profile.desiredWeight > 0 ? profile.desiredWeight : ''}
          required
        />
        <Input
          type="date"
          name="birthday"
          label="Date of birth"
          value={profile && profile.birthday ? profile.birthday : ''}
          required
          icon="calendar"
        />
      </Fieldset>
      <Fieldset col="3" colTablet="3" colMobil="1">
        <Fieldset label="Blood" col="auto" colTablet="auto" colMobil="auto">
          <Input
            type="radio"
            name="blood"
            label="1"
            value="1"
            required={profile && profile.blood === 0 ? 'required' : undefined}
            checked={profile && profile.blood === 1 ? true : undefined}
          />
          <Input
            type="radio"
            name="blood"
            label="2"
            value="2"
            required={profile && profile.blood === 0 ? 'required' : undefined}
            checked={profile && profile.blood === 2 ? true : undefined}
          />
          <Input
            type="radio"
            name="blood"
            label="3"
            value="3"
            required={profile && profile.blood === 0 ? 'required' : undefined}
            checked={profile && profile.blood === 3 ? true : undefined}
          />
          <Input
            type="radio"
            name="blood"
            label="4"
            value="4"
            required={profile && profile.blood === 0 ? 'required' : undefined}
            checked={profile && profile.blood === 4 ? true : undefined}
          />
        </Fieldset>
        <Fieldset label="Sex" col="auto" colTablet="auto" colMobil="auto">
          <Input
            type="radio"
            name="sex"
            label="Male"
            value="male"
            required={profile && profile.sex === '' ? 'required' : undefined}
            checked={profile && profile.sex === 'male' ? true : undefined}
          />
          <Input
            type="radio"
            name="sex"
            label="Female"
            value="female"
            required={profile && profile.sex === '' ? 'required' : undefined}
            checked={profile && profile.sex === 'female' ? true : undefined}
          />
        </Fieldset>
      </Fieldset>
      <Fieldset label="Activity level" col="1" colTablet="1" colMobil="1">
        <Input
          type="radio"
          name="levelActivity"
          label="Sedentary lifestyle (little or no physical activity)"
          value="1"
          required={profile && profile.levelActivity === 0 ? 'required' : undefined}
          checked={profile && profile.levelActivity === 1 ? true : undefined}
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Light activity (light exercises/sports 1-3 days per week)"
          value="2"
          required={profile && profile.levelActivity === 0 ? 'required' : undefined}
          checked={profile && profile.levelActivity === 2 ? true : undefined}
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Moderately active (moderate exercises/sports 3-5 days per week)"
          value="3"
          required={profile && profile.levelActivity === 0 ? 'required' : undefined}
          checked={profile && profile.levelActivity === 3 ? true : undefined}
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Very active (intense exercises/sports 6-7 days per week)"
          value="4"
          required={profile && profile.levelActivity === 0 ? 'required' : undefined}
          checked={profile && profile.levelActivity === 4 ? true : undefined}
        />
        <Input
          type="radio"
          name="levelActivity"
          label="Extremely active (very strenuous exercises/sports and physical work)"
          value="5"
          required={profile && profile.levelActivity === 0 ? 'required' : undefined}
          checked={profile && profile.levelActivity === 5 ? true : undefined}
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
