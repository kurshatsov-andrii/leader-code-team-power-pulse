import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises';
import { TitleContent } from '../../components/Typography/Title/Title.styled';
import { useEffect } from 'react';

function ExercisesPage() {
  const navigate = useNavigate();
  const { category = 'Body parts', subcategory } = useParams();

  useEffect(() => {
    const navigatePath = subcategory ? `${category}/${subcategory}` : category
    navigate(navigatePath, { replace: true });
  }, [navigate, category, subcategory]);

  return (
    <Container>
      <section>
        <TitleContent tag="h1" size="h3">
          Exercises
        </TitleContent>
      </section>

      <Categories />
      <Outlet />
    </Container>
  );
}

export default ExercisesPage;
