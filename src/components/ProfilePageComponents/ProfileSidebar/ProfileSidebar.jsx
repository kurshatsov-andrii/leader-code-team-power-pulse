import { Sidebar, SidebarContent, Username, UserStatistic, StatisticItem } from './ProfileSidebar.styled';
import { Form, Input } from 'components/Forms';
import { Text, Title, TextContent } from 'components/Typography';
import { ButtonLogout } from 'components/Buttons';

const testAvatar = ''; //https://fotobam.ru/gallery/VF1A80295.jpg

const ProfileSidebar = () => {
  const handleAvatarChange = (e) => {
    const form = e.target;
    console.log(form);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <Form onSubmit={handleAvatarChange}>
          <Input type="file" name="avatar" avatar={testAvatar} />
        </Form>

        <Username>
          <Title tag="h3" size="user">
            Mirasov Ruslan
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
            <Title size="h5">0</Title>
          </StatisticItem>
          <StatisticItem>
            <Text size="small" icon="dumbbell">
              Daily physical activity
            </Text>
            <Title size="h5">0 min</Title>
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
