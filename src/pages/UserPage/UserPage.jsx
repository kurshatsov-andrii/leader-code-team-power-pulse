import Section from 'components/Section/Section';
import { Title, TitleWrapper } from 'components/Typography';
import { ProfileWrapper, ProfileMain, ProfileSidebar, ProfileInfoForm } from 'components/ProfilePageComponents';

const UserPage = () => {
  return (
    <Section>
      <TitleWrapper>
        <Title tag="h1" size="h3">
          Profile Settings
        </Title>
      </TitleWrapper>
      <ProfileWrapper>
        <ProfileMain>
          <ProfileInfoForm />
        </ProfileMain>
        <ProfileSidebar />
      </ProfileWrapper>
    </Section>
  );
};

export default UserPage;
