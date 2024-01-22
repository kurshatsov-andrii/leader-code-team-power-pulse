import { useNavigate, Outlet, useParams, useLocation } from 'react-router-dom';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises/Categories';
import { Title } from 'components/Typography';
import { useEffect,  useState } from 'react';
import desktop from '../../images/waist-1x.jpg';
import desktopretina from '../../images/waist-2x.jpg';
import { SectionPage, SectionBackground, BackButtonWrapper } from './ExercisesPage.styled';
import BackButtonIcon from '../../components/Exercises/BackButton';

function ExercisesPage() {
  const navigate = useNavigate();
  const { category = 'Body parts', subcategory } = useParams();
  const location = useLocation();

  const [backLocation, setBackLocation] = useState('/exercise');

  useEffect(() => {
    if (location.state?.from) {
      setBackLocation(location.state.from);
    }
    const navigatePath = subcategory ? `${category}/${subcategory}` : category;
    navigate(navigatePath, { replace: true });
  }, [navigate, category, subcategory, location.state?.from]);

  return (
    <>
      <SectionBackground
        isActive={subcategory ? true : false}
        backgrounds={{
          desktop,
          desktopretina,
        }}
      >
        <Container>
          <SectionPage>
            {subcategory && (
              <BackButtonWrapper to={backLocation}>
                <BackButtonIcon /> Back
              </BackButtonWrapper>
            )}
            <Title tag="h1" size="h3">
              {subcategory ? subcategory : 'Exercises'}
            </Title>
            <Categories />
          </SectionPage>
          <Outlet />
        </Container>
      </SectionBackground>
    </>
  );
}

export default ExercisesPage;
