import Section from 'components/Section/Section';
import { Title, TitleWrapper } from 'components/Typography';
import { ProfileWrapper } from 'components/ProfilePageComponents';
import { Calendar } from 'components/Forms';
import { Input } from 'components/Forms';

const UserPage = () => {
  const Options = [
    { value: 'all', label: 'All' },
    { value: 'false', label: 'Recommended' },
    { value: 'true', label: 'Not recommended' },
  ];
  return (
    <Section>
      <TitleWrapper>
        <Title tag="h1" size="h3">
          Calendar
        </Title>
      </TitleWrapper>
      <ProfileWrapper>
        <Input type="select" name="test" options={Options} onChange={Options} />
      </ProfileWrapper>
    </Section>
  );
};

export default UserPage;
