import { Outlet } from 'react-router-dom';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises';
import { TitleContent } from '../../components/Typography/Title/Title.styled';

function ExercisesPage() {
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
