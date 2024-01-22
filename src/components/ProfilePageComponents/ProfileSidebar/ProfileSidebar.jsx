import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Sidebar, SidebarContent, Username, UserStatistic, StatisticItem } from './ProfileSidebar.styled';
import { Form, Input } from 'components/Forms';
import { Text, Title, TextContent } from 'components/Typography';
import { ButtonLogout } from 'components/Buttons';
import { updateAvatar } from '../../../redux/auth/operations';

const ProfileSidebar = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const [userName, setUserName] = useState('User Name');
  const [targetTime, setTargetTime] = useState('0');
  const [bmr, setBmr] = useState('0');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
      setTargetTime(userData.targetTime);
      setBmr(userData.bmr);
    }
  }, [userData]);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const uploadPhoto = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    fileReader.readAsDataURL(file);
    setLoading(true);

    try {
      await dispatch(updateAvatar(file));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setImageURL(null);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <Form>
          <Input type="file" name="avatar" isLoading={loading} avatar={imageURL} onChange={uploadPhoto} />
        </Form>

        <Username>
          <Title tag="h3" size="user">
            {userName}
          </Title>
          <Text align="center" color="rgba(239, 237, 232, 0.30)">
            User
          </Text>
        </Username>

        <UserStatistic>
          <StatisticItem>
            <Text size="small" icon="knife">
              Daily calorie intake
            </Text>
            <Title size="h5">{bmr}</Title>
          </StatisticItem>
          <StatisticItem>
            <Text size="small" icon="dumbbell">
              Daily physical activity
            </Text>
            <Title size="h5">{targetTime} min</Title>
          </StatisticItem>
          <Text size="big" color="rgba(239, 237, 232, 0.30)" icon="alarm">
            We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.
          </Text>
        </UserStatistic>

        <TextContent justify="flex-end">
          <ButtonLogout />
        </TextContent>
      </SidebarContent>
    </Sidebar>
  );
};

export default ProfileSidebar;
