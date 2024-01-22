import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises';
import { Title } from 'components/Typography';
import { useEffect } from 'react';
// import Section from 'components/Section/Section';
import desktop from '../../images/waist-1x.jpg';
import desktopretina from '../../images/waist-2x.jpg';
import { SectionPage, SectionBackground } from './ExercisesPage.styled';

function ExercisesPage() {
  const navigate = useNavigate();
  const { category = 'Body parts', subcategory } = useParams();

  useEffect(() => {
    const navigatePath = subcategory ? `${category}/${subcategory}` : category;
    navigate(navigatePath, { replace: true });
  }, [navigate, category, subcategory]);

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
            <Title tag="h1" size="h3">
              {subcategory ? 'Waist' : 'Exercises'}
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
