import Section from 'components/Section/Section';
import { Title, TitleWrapper } from 'components/Typography';
import { ProfileWrapper } from 'components/ProfilePageComponents';
import { Calendar } from 'components/Forms';

const UserPage = () => {
  return (
    <Section>
      <TitleWrapper>
        <Title tag="h1" size="h3">
          Calendar
        </Title>
      </TitleWrapper>
      <ProfileWrapper>
        <Calendar />
      </ProfileWrapper>
    </Section>
  );
};

export default UserPage;
